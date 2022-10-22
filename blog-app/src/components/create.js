import { store, fb } from '../firebase';
import React, { useState } from 'react';
import { ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');



const CreateBlog = () => {

    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");
    const [date, SetDate] = useState("");
    const [tag, SetTag] = useState("");
    const [file, setFile] = useState("");
    const [img, Seturl] = useState('');
    const [progresspercent, setProgresspercent] = useState(0);

   
    const handleChange = (e) => {
        const fileimg = e.target.files[0];
        setFile(fileimg);
        handleupload(fileimg);

    };
    const handleupload = (file) => {
        
        const storageRef = ref(store, `files/${file.name}`);
        const uploadTask = uploadBytesResumable(storageRef, file);

        uploadTask.on(
            "state_changed",
            (snapshot) => {
                const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
                setProgresspercent(progress);
                console.log(progress)

            },
            (err) => {
                console.log(err);
            },
            () => {
                getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                    Seturl(downloadURL)
                    alert(downloadURL)
                }
                );
        
            })
    }


    const Submit = (e) => {
        e.preventDefault();
        Blogslist.add({
            Title: title,
            Body: body,
            Date: date,
            Tag: tag,
            Image: img
        }).then((docRef) => {
            alert("Data added")
            e.target.reset();


        }).catch((error) => {
            console.log("Error:", error);
        })
           

    };

        return (
        
            <div>
           

                <form className="AdminForm" onSubmit={(event) => { Submit(event) }} >
                    <input type="text" placeholder="Title"
                        onChange={(e) => { SetTitle(e.target.value) }} required /><br></br>

                    <textarea name="content" type="text" placeholder="write your content here"
                        rows="30" cols="100" onChange={(e) => { SetBody(e.target.value) }} required >
                    </textarea><br></br>
                    
                    <input type='date' placeholder='Date' onChange={(e) => { SetDate(e.target.value) }} required ></input>
                    <input type='text' placeholder='Tag' onChange={(e) => { SetTag(e.target.value) }} required ></input>
                    <input type="file" onChange={handleChange} accept="/image/*" />
                

                    <button type="submit" >Submit</button>
                </form>
                <div>

                </div>
                <div className='loading'><p>Uploading Progress : {progresspercent}%</p></div>
            
            </div>
        );
    
    };


export default CreateBlog;