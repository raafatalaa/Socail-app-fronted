import React from 'react';
import '../UserCard.css';
import PostsFeed from '../PostsFeed';
import 'bootstrap/dist/css/bootstrap.min.css';
// import PostsFeed from '../PostsFeed';
export default function profile({user,posts}) {
    const userPosts = posts.filter(post => post.postedBy === user.id);
    return (
        <div className="card"  style={{display:"flex" , flexWrap:"nowrap"}}>
                <div className="card-body">
                  <div className="avatar" >
                    <img
                      src="https://i.imgur.com/aoKusnD.jpg"
                      className="card-img-top"
                      alt="photo"
                      style={{"width":"15rem"}}
                    />
                  </div>
                  <div style={{display:"flex",flexDirection:"column",alignItems:"center" }}> 
                  {/* style={{display: 'flex',flex-direction: 'column',align-items: "center"}}  */}
                    <h5 className="card-title">
                        {user.name}
                    </h5>
                    <p className="card-text">
                        {user.email}
                        <br/>
                    </p>
                  </div>
                </div>
                <PostsFeed posts={userPosts}/>
            </div>
    );
}