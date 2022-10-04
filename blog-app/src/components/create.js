import { store,fb} from '../firebase';
import React, {useState} from 'react';
const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');

    // Handle file upload event and update state

const CreateBlog = () => {

    const [title, SetTitle] = useState("");
    const [body, SetBody] = useState("");
    const [date, SetDate] = useState("");
    const [tag, SetTag] = useState("");
    const [file, setFile] = useState(null);
 
    // progress
    const [percent, setPercent] = useState(0);
    
    function handleChange(event) {
        setFile(event.target.files[0]);
    const storageRef = store.ref(store, `/files/${file.name}`);

            const uploadTask = store.uploadBytesResumable(storageRef, file);
 
    uploadTask.on(
        "state_changed",
        (snapshot) => {
            const percent = Math.round(
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            );
 
            // update progress
            setPercent(percent);
        },
        (err) => console.log(err),
        () => {
            // download url
            store.getDownloadURL(uploadTask.snapshot.ref).then((url) => {
                console.log(url);
            });
        }
    );
    }
 
   

 
    // progress can be paused and resumed. It also exposes progress updates.
    // Receives the storage reference and the file to upload.

  


    const Submit = (e) => {
        
        e.preventDefault();
        Blogslist.add({
            Title: title,
            Body: body,
            Date: date,
            Tag: tag,
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
                <input type="file" onChange={handleChange(Event) } accept="/image/*" />
                <button type="submit" >Submit</button>
            </form>
            
        </div>
    );
    

};

export default CreateBlog;