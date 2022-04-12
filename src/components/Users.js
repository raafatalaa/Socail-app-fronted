import React,{useState,useEffect} from "react";
import UserCard from "./UserCard";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Users ({users,posts}) {
    

    const usersComponent=users.map((user , i)=>{
        return <UserCard key ={users[i].id} name={users[i].name} email={users[i].email} createdAt={users[i].createdAt} id={users[i].id}/>
      })
    return(
        <div class="d-md-flex h-md-100 align-items-center">

            {/* <!-- First Half --> */}
            <div class="col-md-4 p-0 bg-secondary h-md-100">
                <div class="text-white d-md-flex align-items-center h-100 p-5 text-center justify-content-center">
                    <div class="logoarea pt-5 pb-5">
                        {usersComponent}
                    </div>
                </div>
            </div>

            {/* <!-- Second Half --> */}
            <div class="col-md-6 p-0 bg-white h-md-100 loginarea">
                <div class="d-md-flex align-items-center h-md-100 p-5 justify-content-center">
                    Second half content here
                </div>
            </div>
                
        </div>
    );
} 