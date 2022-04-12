import React,{useState,useEffect} from "react";
import PostCard from "./PostCard";


export default function PostsFeed (){
    const [posts,setPosts] = useState([]);
    useEffect(async() => {
    try {
        const response = await fetch('http://localhost:5000/api/post', {
          method: 'GET',
          headers: {
            accept: 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error(`Error! status: ${response.status}`);
        }
    
        const result = await response.json();
        console.log("aloooo   ",result)
        setPosts(result);
      } catch (err) {
        console.log(err);
      }
    },[]);
    const postComponent=posts.map((post , i)=>{
      return <PostCard key ={posts[i].id} body={posts[i].body} image={posts[i].image} userName={posts[i].userName} date = {posts[i].date}/>
    })
    return(       
        <div style={{display:"flex",justifyContent : "center",flexWrap:"wrap",padding:"7px"}}> 
          {postComponent}
        </div>
    );
}