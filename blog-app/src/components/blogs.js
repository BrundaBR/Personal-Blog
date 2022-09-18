import React, { useState, useEffect }from 'react'
import { Link } from "react-router-dom";
import fb from '../firebase'


const db = fb.firestore()
const Blogs = db.collection('create_blog');


const Bloglist = () => {
    const [blogslist, setblogs] = useState([]);

    useEffect(() => {
        // Subscribe to query with onSnapshot
        const unsubscribe = Blogs.limit(100).onSnapshot(querySnapshot => {
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
        <div >


            {
                blogslist.map(blog => (
                    console.log(blog),
                <div key={blog.id}>
                
                        <p>Title : {blog.Title}</p>
                        <p>body: {blog.Body} </p>
                        <p>Date: {blog.Date} </p>
                        <p>Tag: {blog.Tag} </p>
                        <p>Image: {blog.Image} </p>
                <Link to={"/blog/"+blog.id}
                    className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded"
                    >Read More
                        </Link>
                        <hr></hr>
    
</div>          
            ))}
            

    </div>
    );
  };

export default Bloglist;