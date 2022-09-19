import fb from '../../firebase';
import React, {useEffect, useState} from 'react';
const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');

const AstrophysicsFilter = () => {
    // const [title, SetTitle] = useState("");
    // const [body, SetBody] = useState("");
    // const [date, SetDate] = useState("");
    // const [tag, SetTag] = useState("");
    // const [image, SetImage] = useState("");
    const [posts, setPosts] = useState([]);

    const [filteredastrophysics, setFilteredastrophysics] = useState([])

    const Filter_Astrophysics = () => {
        
    
   
    // filter function  


       
    };        
    
    return (
        Filter_Astrophysics(),        <div>
            <h3>Astrophysics</h3>
            <div className='filtered_data'>
                <p>{filteredastrophysics}</p>
            </div>
        </div>
    )
}
export default AstrophysicsFilter;