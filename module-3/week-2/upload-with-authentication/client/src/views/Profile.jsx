import React from "react";
import Avatar from "../Components/Avatar";

const Profile = () => {
  return (
    <div className="Profile">
      <div>
        <h2>Hello User</h2>
        <Avatar src="https://images2.minutemediacdn.com/image/upload/c_crop,h_1345,w_2000,x_0,y_0/v1593528823/shape/mentalfloss/626137-arx0nt-istock-859216986.jpg?itok=RockS-bH" />
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

export default Profile;
