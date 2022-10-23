import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fb } from '../firebase'
import Card from 'react-bootstrap/Card'
import Markdown from 'markdown-to-jsx';
import ReactMarkdown from 'react-markdown';
import ReactDom, { render } from 'react-dom';
const DB = fb.firestore()
const Blogslist = DB.collection('create_blog');

// {Body: 'The blog is my first blog!', 
// Date: '2022-10-05',
//     Title: 'First Blog!', Tag: 'General', Image: ''}
const BlogView = () => {
    const [body,setBody] = useState('');
    const { id } = useParams();
    const [blog, Setblogs] = useState([]);
    
    Blogslist.doc(id).get().then((snapshot) => {
        const data = snapshot.data()
        setBody(data.Body);
        Setblogs(data);
    });

    
        return (
   
  

            <div className="details_show">
            
                <div className="w-full max-w-2xl mx-auto">
                    <h1 className="heading_blog">
                        <span>{blog.Title}</span><br></br><br></br>
                        <img class="blog_img" src={blog.Image}></img>
                    </h1>
                    <div className="bodyread">
                        <Markdown>{body}</Markdown>
                         </div>
                        <div className="details_blog">
                        <p>Tagged under: {blog.Tag}</p>
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