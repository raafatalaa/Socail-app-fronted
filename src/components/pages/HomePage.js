import React from 'react'
import NavBar from '../NavBar.js'
import PostsFeed from '../PostsFeed.js';
import Users from '../Users.js';

export default function HomePage({users,posts}) {
    return (
        <div>
            <NavBar/>
            {/* <PostsFeed posts = {posts}/> */}
            <Users users= {users} posts = {posts}/>
        </div>
    )
}

