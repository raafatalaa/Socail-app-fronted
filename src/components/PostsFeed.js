import React,{useState,useEffect} from "react";
import PostCard from "./PostCard";


export default function PostsFeed ({posts}){
    
   

   console.log("alllo",posts);
    const postComponent=posts.map((post , i)=>{
      return <PostCard key ={posts[i].id} body={posts[i].body} image={posts[i].image} userName={posts[i].userName} date = {posts[i].date}/>
    })

    return(       
        <div style={{display:"flex",justifyContent : "center",flexWrap:"wrap",padding:"7px"}}> 
          {postComponent}
        </div>
    );
}