import { store, fb } from '../firebase';
import React, { useState } from 'react';
// import { register } from "react-hook-form";

const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');



const CreateBlog = () => {

    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");
    const [date, SetDate] = useState("");
    const [tag, SetTag] = useState("");
    const [file, setFile] = useState("");
    const [img,Seturl ]= useState('');

    
    function handleChange(event) {
        const fileimg = event.target.files[0];
        setFile(fileimg);
        const storageRef = store.ref("files/" + fileimg.name);
        // const upload = store.uploadBytesResumable(storageRef, file);
        storageRef.put(file).on(
        "state_changed",
        (snap) => {
            console.log('percent');
        },
            (err) => {
                        console.log(err);

        },
        async () => {
          const url = await storageRef.getDownloadURL();
            Seturl(url);

        }
      );
    

        // const uploadTask = store.uploadBytesResumable(storageRef, file);
        // store.getDownloadURL(uploadTask.snapshot.ref).then((url) => {
        //     console.log(url);
        //      Seturl(url);
    //  });
        
    };

    const Submit = (e) => {
        
        e.preventDefault();
        Blogslist.add({
            Title: title,
            Body: body,
            Date: date,
            Tag: tag,
            Image:img
        }).then((docRef) => {
            alert("Data added")
            e.target.reset();


        }).catch((error) => {
            console.log("Error:", error);
        })
           

    };
    return (
        <div>
            <form className="AdminForm" onSubmit={(event) => { Submit(event) }}>
                <input type="text" placeholder="Title"
                    onChange={(e) => { SetTitle(e.target.value) }} required />

                <textarea name="content" type="text" placeholder="write your content here"
                    rows="10" cols="150" onChange={(e) => { SetBody(e.target.value) }} required >
                </textarea>
                <input type='date' placeholder='Date' onChange={(e) => { SetDate(e.target.value) }} required ></input>
                <input type='text' placeholder='Tag' onChange={(e) => { SetTag(e.target.value) }} required ></input>
                <input type="file"  onChange={handleChange} accept="/image/*" />
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    );
    

};

export default CreateBlog;