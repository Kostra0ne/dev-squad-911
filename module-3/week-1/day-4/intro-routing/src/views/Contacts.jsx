import React from "react";
import { withRouter } from "react-router-dom";

const Contacts = (props) => {
  const redirectMeToHomePage = () => {
    //Do an API call that does something, and then when its success ful ,
    // redirect the user somewhere...
    props.history.push("/");
  };

  return (
    <div>
      Contact page ! Hello {props.user}
      <pre>{JSON.stringify(props, null, 2)}</pre>
      <button onClick={redirectMeToHomePage}>Hello</button>
    </div>
  );
};

export default withRouter(Contacts);
// export default Contacts;
