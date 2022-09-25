import fb from '../../firebase';
import React, {useEffect, useState} from 'react';
const DB = fb.firestore();
const Blogslist = DB.collection('create_blog');

const AstrophysicsFilter = () => {
    const [posts, setPosts] = useState([]);

    const [filteredastrophysics, setFilteredastrophysics] = useState([])

    const Filter_Astrophysics = () => {
         Blogslist.filter(Blogslist.Tag === 'Astrophysics').then((snapshot) => {

        const data = snapshot.data()
        console.log(data)
    setFilteredastrophysics(data);
} );
    
   
    // filter function  


       
    };        
    
    return (
        Filter_Astrophysics(),        <div>
            <h3>Astrophysics</h3>
            <div className='filtered_data'>
                <p>{filteredastrophysics.name}</p>
            </div>
        </div>
    )
}
export default AstrophysicsFilter;