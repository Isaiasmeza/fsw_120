import React from "react"
import BlogPost from "./BlogPost"
function BlogList(){
    return(
        <div>
            <BlogPost/>
            <button style={{backgroundColor:"teal", color:"white",fontSize:"25px",textAlign:"right"}}>Older Posts</button>
        </div>
    )
}


export default BlogList