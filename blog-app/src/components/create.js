import fb from '../firebase';
import React, {useState} from 'react';

const DB = fb.firestore();
const Blogslist = DB.collection('blogs');

const CreateBlog = () => {

    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");

    const Submit = (e) => {
        e.preventDefault();
        Blogslist.add({
            Title: title,
            Body: body
        }).then((docRef) => {
            alert("Data added")
        }).catch((error) => {
            console.log("Error:", error);
        })
    };
    return (
        <div>
            <form onSubmit={(event) => { Submit(event) }}>
                <input type="text" placeholder="Title"
                    onChange={(e) => { SetTitle(e.target.value) }} required />

                <textarea name="content" type="text" placeholder="write your content here"
                    rows="10" cols="150" onChange={(e) => { SetBody(e.target.value) }} required >
                </textarea>

                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
};

export default CreateBlog;