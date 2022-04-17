import React from "react";
import './UserCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCard({name,email,createdAt,id,test,tmp}) {
   console.log("user card", name, email, createdAt, id,tmp);
    return(
        <div>
            <div className="card" onClick={() =>test(id)}>
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src="https://i.imgur.com/aoKusnD.jpg"
                      className="card-img-top"
                      alt="user avatar"
                    />
                  </div>
                  <div> 
                    <h5 className="card-title">
                        {name}
                    </h5>
                    <p className="card-text">
                        {email}
                        <br/>
                        <span className="phone">{createdAt}</span>
                    </p>
                  </div>
                </div>
            </div>
          </div>
    );
}