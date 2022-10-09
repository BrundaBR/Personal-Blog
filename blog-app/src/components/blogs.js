import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import { fb } from '../firebase'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import ListGroup from 'react-bootstrap/ListGroup';
import { stringify } from '@firebase/util';

const db = fb.firestore()
const Blogs = db.collection('create_blog');


const Bloglist = () => {
  
  const [blogslist, setblogs] = useState([]);

    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Blogs.limit(3).onSnapshot(querySnapshot => {
          // Get all documents from collection - with IDs
          const data = querySnapshot.docs.map(doc => ({
            ...doc.data(),
            id: doc.id,
          }));
          // Update state
          setblogs(data);

        });

        // Detach listener
        return unsubscribe;
      }, []);

    return (
      <div className='BlogDisplay'>


            {
          blogslist.map(blog => (
            
            <div key={blog.id} className='cards'> 
              <Card style={{ width: '10rem' }}>
                <Card.Img variant="top" src={blog.Image} alt='Image' />
                {/* {require($'{blog.Image}')} */}
      <Card.Body>
                  <Card.Title>{ blog.Title}</Card.Title>
        <Card.Text>
          {blog.Body.substring(0, 40)}
                  </Card.Text>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>{ blog.Tag}</ListGroup.Item>
                    <ListGroup.Item>{ blog.Date}</ListGroup.Item>
        
                  </ListGroup>
                  
        <Link to={"/show/"+blog.id}
                    className="mr-2 bg-indigo-500 text-black font-bold py-2 px-3 border border-indigo-500 rounded"
                    >Read More
              </Link>
                </Card.Body>
               
              </Card>  
              
              </div>  
          )).sort()}
           
        
      
        
            

    </div>
    );
  };

export default Bloglist;