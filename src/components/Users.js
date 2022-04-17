import React,{useState} from "react";
import UserCard from "./UserCard";
import 'bootstrap/dist/css/bootstrap.min.css';
import PostsFeed from "./PostsFeed";

export default function Users ({users,posts}) {
    const [user,setUser]=useState(null);
    // const userIdChange=(id)=>{
    //     setUser(users.find(user=>user.id===id));  
    //    const post = posts.find(post => (post.createdBy === id));
    //    console.log("ya 3mmm",post,user)
    //  }
    // console.log("user",user);
    const test = (id) => {
        // console.log(users.filter(user => user.id === id));
        setUser(users.filter(user => user.id === id));
        const post = posts.filter(post => (post.postedBy === id));
         console.log("test",users.filter(user => user.id === id))
    }
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
                    (user === null)?(
                        <div>.</div>
                    ):(
                        <div style={{display:"flex",justifyContent : "center",flexWrap:"wrap",padding:"7px"}}>
                            {console.log("return",user)}
                            <UserCard key ={user[0].id} name={user[0].name} email={user[0].email} createdAt={user[0].createdAt} id={user[0].id} tmp={user}
                             style={{width:"5%", height:"3rem"}}/>
                             {console.log("username",user.name)}
                            <PostsFeed posts={posts.filter(posts => posts.postedBy === user[0].id)}/>
                        </div>
                    )
                }
            </div>
                
        </div>
    );
} 