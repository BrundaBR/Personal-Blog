import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import fb from '../firebase'


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
                    console.log(blog.Image),
                  <div key={blog.id}> 
                    <p>{blog.Title}</p>
                    <img src={blog.Image}></img>
                    <p >{blog.Body.substring(0, 40)}</p>
                        {/* <p>body: {blog.Body} </p> */}
                        <p>Date: {blog.Date} </p>
                        <p>Tags: {blog.Tag} </p>
                        
                <Link to={"/blog/"+blog.id}
                    className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded"
                    >Read More
                        </Link>
                         </div>          
          )).sort()}
       
            

    </div>
    );
  };

export default Bloglist;