import React,{useState} from "react";
import UserCard from "./UserCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsFeed from "./PostsFeed";

export default function Users ({users,posts}) {
    const [user,setUser]=useState([]);
    // const userIdChange=(id)=>{
    //     setUser(users.find(user=>user.id===id));  
    //    const post = posts.find(post => (post.createdBy === id));
    //    console.log("ya 3mmm",post,user)
    //  }
    const test = (id) => {
        console.log("mahameho",id)
        setUser(users.filter(user => user.id === id));
        const post = posts.filter(post => (post.postedBy === id));
        console.log("ya 3mmm",post,user)
    }
    console.log("hommmme: ",users);
     const usersComponent=users.map((user , i)=>{
        return <UserCard key ={users[i].id} name={users[i].name} email={users[i].email} createdAt={users[i].createdAt} id={users[i].id} test = {test}/>
      })  
    return(
        <div className="d-md-flex h-md-100 align-items-center">
            
            {/* <!-- First Half --> */}
            <div className="col-md-4 p-0 bg-secondary h-md-100">
                <div className="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                    <div className="logoarea pt-5 pb-5">
                        {usersComponent}
                    </div>
                </div>
            </div>

            {/* <!-- Second Half --> */}
            <div className=" bg-white h-md-100 loginarea">
                {
                    (user)?(
                        <div>.</div>
                    ):(
                        <div style={{display:"flex",justifyContent : "center",flexWrap:"wrap",padding:"7px"}}>
                            <UserCard key ={user.id} name={user.name} email={user.email} createdAt={user.createdAt} id={user.id}
                             style={{width:"5%", height:"3rem"}}/>
                            <PostsFeed posts={posts.filter(posts => posts.postedBy === user.id)}/>
                        </div>
                    )
                }
            </div>
                
        </div>
    );
} 