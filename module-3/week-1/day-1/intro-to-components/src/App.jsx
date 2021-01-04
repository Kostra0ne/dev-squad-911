import React from "react";
import Card from "./components/Card";
import UserCard from "./components/UserCard";
import ComponentWithChildren from "./components/ComponentWithChildren";
import ClassComponent from "./components/ClassComponent";
import "./App.css";

function App() {
  return (
    <div>
      {/* <> */}

      {/* <React.Fragment> */}
      <div className="App">
        <h1 className="App__title">This is my super Application.</h1>
        {/* You can access the name and age values inside
        the UserCard component by props.name and props.age
      */}
        <UserCard name="Jane" age={28} />
        <UserCard name="John" age={30} />

        <Card borderRadius={20} isDark={true}>
          <ComponentWithChildren>
            <h2>Hello i'm Grogu</h2>
          </ComponentWithChildren>
        </Card>

        <ClassComponent thisIsAProp={"Hello world"}>
          <div className="d-flex">
            <h2 className="title">Hello i'm the title</h2>
            <h5 className="subtitle">Hello i'm the subtitle</h5>
          </div>
        </ClassComponent>
      </div>

      <div></div>
    </div>
    //* </React.Fragment>
    // </>
  );
}

export default App;
