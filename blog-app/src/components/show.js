import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { fb } from '../firebase'
const DB = fb.firestore()
const Blogslist = DB.collection('create_blog')
const BlogView = () => {
    const {id} = useParams();
    const [blogs, Setblogs] = useState([]);

    Blogslist.doc(id).get().then((snapshot) => {

        const data = snapshot.data()
        Setblogs(data);
} );
return (
    <div>
 <div className='BlogDetailView'>
            <h1>{blogs.name}</h1>
            <p>{ blogs.content}</p>
       
            

    </div>

    </div>

);
}

export default BlogView;