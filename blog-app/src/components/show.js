import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fb } from '../firebase'
import Card from 'react-bootstrap/Card'
const DB = fb.firestore()
const Blogslist = DB.collection('create_blog');

// {Body: 'The blog is my first blog!', 
// Date: '2022-10-05',
//     Title: 'First Blog!', Tag: 'General', Image: ''}
const BlogView = () => {
    const { id } = useParams();
    const [blog, Setblogs] = useState([]);
    Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        Setblogs(data);
    });
return (
    <div>
            
            <div className="w-full max-w-2xl mx-auto">       
                <h1 className="heading">
                    <span>{blog.Title}</span>
                </h1>
             
                <div  className="bodyread">
                <p>{blog.Body}</p>
                <p>{blog.Tag}</p>
                    <p>Created on : {blog.Date}</p>
                    <div className="Author">
                        <p>Author: Brunda Revadi</p>
                    </div>
                    </div>
            
            </div>
                        
</div>
                
               
             

);
}

export default BlogView;