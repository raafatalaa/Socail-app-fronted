import React from "react";
import './UserCard.css';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function UserCard({name,email,createdAt,id}) {
    return(
            <div className="card">
                <div className="card-body">
                  <div className="avatar">
                    <img
                      src="https://i.imgur.com/aoKusnD.jpg"
                      className="card-img-top"
                      alt=""
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
    );
}