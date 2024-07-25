import React,{ useState,createContext } from "react";


export const postContext = createContext()

function PostProduct({children}){
    const [postDetails,setPost] = useState(()=>{
       const post= localStorage.getItem('post');
       console.log(post);
       return post ?JSON.parse(localStorage.getItem("post")):""
    })
   
    return (
        <postContext.Provider value={{postDetails,setPost}}>
            {children}
        </postContext.Provider>
    )
}

export default PostProduct