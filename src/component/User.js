import React from "react";
import { Card } from "react-bootstrap";
import '../styles/User.css'
import loaadgif from '../loading.gif'
export const User = ({load,userdata}) => {
  console.log(userdata)
  console.log(load);
  return load ? (
    <div className="loadgif">
      <img src={loaadgif}  alt="Loaading.." />
    </div>
  ):(
    <div className="usercard">
    {
      userdata.map((users)=>(
        <div key={users.id}  className="userdiv">
          <Card className='userprofile'>
        <Card.Img variant="top" src={users.avatar} />
        <Card.Body>
          <Card.Title>{users.first_name} {users.last_name}</Card.Title>
          <Card.Text>
           Email : {users.email}
          </Card.Text>
        </Card.Body>
      </Card>
        </div>
      ))
    }
    </div>
  );
};

export default User;
