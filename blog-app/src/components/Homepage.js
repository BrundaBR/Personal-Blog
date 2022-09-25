import React from "react";
import Bloglist from "./blogs";
import TagsBar from "./Sidebar";
import FooterBar from "./footer";
const HomePage = () => {

            

    return (
        <div>
            <h2 className="recentblogs">Recent Blogs</h2>
            <div className="component">
            <Bloglist />
            <div className="Tags">
                    <TagsBar />
                </div>
            </div>

            
         </div>
    )
    
}

export default HomePage;