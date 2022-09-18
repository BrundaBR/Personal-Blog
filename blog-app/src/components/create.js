import fb from '../firebase';
import React, {useState} from 'react';

const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');

const CreateBlog = () => {

    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");
    const [date, SetDate] = useState("");
    const [tag, SetTag] = useState("");
    const [image, SetImage] = useState("");
   
    const Submit = (e) => {
        
        e.preventDefault();
        Blogslist.add({
            Title: title,
            Body: body,
            Date: date,
            Tag: tag,
            Image: image
        }).then((docRef) => {
            alert("Data added")
            e.target.reset();


        }).catch((error) => {
            console.log("Error:", error);
        })
           

    };
    return (
        <div>
            <form className="AdminForm" onSubmit={(event) => { Submit(event)}}>
                <input type="text" placeholder="Title"
                    onChange={(e) => { SetTitle(e.target.value) }} required />

                <textarea name="content" type="text" placeholder="write your content here"
                    rows="10" cols="150" onChange={(e) => { SetBody(e.target.value) }} required >
                </textarea>
                <input type='date' placeholder='Date' onChange={(e) => { SetDate(e.target.value) }} required ></input>
                <input type='text' placeholder='Tag' onChange={(e) => { SetTag(e.target.value) }} required ></input>
                <input type='file' placeholder='Image' onChange={(e) => { SetImage(e.target.value) }} required ></input>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default CreateBlog;