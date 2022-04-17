import React,{useState} from 'react'
import NavBar from '../NavBar.js'
import PostsFeed from '../PostsFeed.js';
import Users from '../Users.js';
import Profile from './Profile.js';

export default function HomePage({users,posts}) {
    const [currPage,setCurrPage]=useState("posts");

    const changePage=(page)=>{
        setCurrPage(page);
    }
    return (
        <div>
            <NavBar changePage={changePage}/>
            {
            (currPage === "posts")?(
                <PostsFeed posts = {posts} />
            )
            :(
                (currPage === "users")?(
                    <Users users= {users} posts = {posts}  />
            )  :(
                    <div>
                        <Profile user={users[0]} posts={posts}/>  
                    </div>
            )
            )}
        </div>
    )
}

