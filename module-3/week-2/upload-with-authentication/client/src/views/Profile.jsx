import React from "react";
import Avatar from "../Components/Avatar";
import { withUser } from "../Auth/withUser";
const Profile = (props) => {
  return (
    <div className="Profile">
      <div>
        <h2>Hello User</h2>
        <Avatar src={props.context.user.profileImage} />
      </div>
      <div>
        <h2>Your pictures !</h2>
        <img
          src="https://img-9gag-fun.9cache.com/photo/a1Wb33v_460s.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default withUser(Profile);
