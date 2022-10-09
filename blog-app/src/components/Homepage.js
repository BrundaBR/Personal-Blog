import React from "react";
import Bloglist from "./blogs";
import TagsBar from "./Sidebar";
import FooterBar from "./footer";
import Card from 'react-bootstrap/Card';
const HomePage = () => {

            

    return (
        <div>
        <div>
            <h3 className="recentblogs">Recent Uploads</h3>
            <div className="component">
            <Bloglist />
            <div className="Tags">
                     
                </div>
            </div>
            <TagsBar /> 
        <div className="contact">
     
                <Card >
                                    <h3 className="contact">Contact</h3>

     <form >

    <label >First Name</label>
    <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br></br>

    <label >Last Name</label>
    <input type="text" id="lname" name="lastname" placeholder="Your last name.." /><br></br>
<label >Comment</label>
    <input type="text" id="comment" name="comment" placeholder="comment" /><br></br>

    {/* <label >Country</label> */}
    {/* <select id="country" name="country">
      <option value="australia">Australia</option>
      <option value="canada">Canada</option>
      <option value="usa">USA</option>
    </select> */}
    

   
    <input type="submit" value="Submit" />

                    </form>
                </Card></div>





            </div>
                        

            </div>
    )
    
}

export default HomePage;