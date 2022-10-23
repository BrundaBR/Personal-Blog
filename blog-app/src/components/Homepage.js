import React from "react";
import Bloglist from "./blogs";
import TagsBar from "./Sidebar";
import FooterBar from "./footer";
import Card from 'react-bootstrap/Card';
const HomePage = () => {

            

    return (
        <div>
        <div>
            <h4 className="recentblogs">Recent Uploads</h4>
            <div className="component">
            <Bloglist />
            <div className="Tags">
                     
                </div>
            </div>
            <TagsBar /> 
        <div className="contact">
     
                <Card >
    <h3 className="contact_head">Contact</h3>

     <form >

    <label >Email</label><br></br>
    <input type="text" id="fname" name="firstname" placeholder="Email.." /><br></br><br></br>

 
<label >Share your thoughts!</label>
    <input type="text" id="comment" name="comment" placeholder="Comment" /><br></br>

   <br></br>
    <input type="submit" value="Submit" />

                    </form>
                </Card></div>





            </div>
                        

            </div>
    )
    
}

export default HomePage;