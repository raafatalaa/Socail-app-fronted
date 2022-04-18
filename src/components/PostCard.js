import React from "react";
import "./PostCard.css";
export default function PostCard({body,image,userName,date}) {
    console.log("post card", body);
    let imageUrl ="http://localhost:5000/"+image;
    imageUrl = imageUrl.replace(/\\/g, '/');
    console.log("image url",imageUrl);
    return (
        <div className="bg-white border mt-2 postcard">
                    <div>
                        <div className="d-flex flex-row justify-content-between align-items-center p-2 border-bottom">
                            <div className="d-flex flex-row align-items-center feed-text px-2"><img className="rounded-circle" src="https://i.imgur.com/aoKusnD.jpg" alt="user avatar" width="45"/>
                                <div className="d-flex flex-column flex-wrap ml-2"><span className="font-weight-bold">{userName}</span>
                                <span className="text-black-50 time">
                                    {
                                      "40 minutes ago"
                                    }
                                </span></div>
                            </div>
                            <div className="feed-icon px-2"><i className="fa fa-ellipsis-v text-black-50"></i></div>
                        </div>
                    </div>
                    <p class="text-justify">{body}</p>
                    <div className="feed-image p-2 px-3" style={{width:"10rem", height:"15rem"}}><img className="img-fluid img-responsive" src={imageUrl} alt = 'post image' /></div>
                    <div className="d-flex justify-content-end socials p-2 py-3"><i className="fa fa-thumbs-up"></i><i className="fa fa-comments-o"></i><i className="fa fa-share"></i></div>
        </div>
    );
}