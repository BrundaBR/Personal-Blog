import React, {useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fb } from '../../firebase'
import { Link } from "react-router-dom";
import {
  doc,
  onSnapshot,
  updateDoc,
  setDoc,
  deleteDoc,
  collection,
  serverTimestamp,
  getDocs,
  query,
  where,
  orderBy,
  limit,
} from 'firebase/firestore';
const DB = fb.firestore()
const Blogslist = DB.collection('create_blog');


const Astrophysics = () => {
    const [filteredData, setFilteredData] = useState([]);
    const tryout = [];
  useEffect(() => {
    const q = query(
      Blogslist.
      //  where('owner', '==', currentUserId),
      where('Tag', '==', 'Astrophysics') // does not need index
      //  where('score', '<=', 100) // needs index  https://firebase.google.com/docs/firestore/query-data/indexing?authuser=1&hl=en
      // orderBy('score', 'asc'), // be aware of limitations: https://firebase.google.com/docs/firestore/query-data/order-limit-data#limitations
      // limit(1)
    );

    // const unsub = onSnapshot(q, (querySnapshot) => {
    const unsub = onSnapshot(q, (querySnapshot) => {
      const items = [];
      querySnapshot.forEach((doc) => {
          items.push(doc.data());
        tryout.push(doc.data());

      });
        setFilteredData(items);
    });
    return () => {
      unsub();
    };

    // eslint-disable-next-line
  }, []);

    return (
                <div>
            
           
            {
                filteredData.map((blog) => {
                    return (
                        <div key={blog.id}>
                            <p>{blog.id}</p>
                            <p>{blog.Title}</p>
                            <img alt='image' src={blog.Image}></img>
                            {/* <p >{blog.Body.substring(0, 40)}</p> */}
                            {/* <p>body: {blog.Body} </p> */}
                            <p>Date: {blog.Date} </p>
                        
                            <Link to={"/show/" + blog.id}
                                className="mr-2 bg-indigo-500 hover:bg-indigo-700 text-white font-bold py-1 px-2 border border-indigo-500 rounded"
                            >Read More
                            </Link>
                        </div>
                    )
                }
                )
            }
        </div>

        )
}
    

export default Astrophysics;