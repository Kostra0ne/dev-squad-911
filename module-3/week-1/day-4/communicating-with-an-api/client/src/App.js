import "./App.css";
import Home from "./views/Home";
import HeroesPage from "./views/HeroesPage";
import OneHeroPage from "./views/OneHeroPage";
import AdminFormsPage from "./views/AdminForms";
import NavMain from "./components/NavMain";

import { Switch, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <NavMain />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/heroes" component={HeroesPage} />
        <Route exact path="/heroes/create" component={AdminFormsPage} />
        <Route exact path="/heroes/:id" component={OneHeroPage} />
      </Switch>
    </div>
  );
}

export default App;
