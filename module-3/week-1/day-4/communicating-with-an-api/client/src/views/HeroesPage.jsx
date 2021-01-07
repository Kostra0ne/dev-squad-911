import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class HeroesPage extends React.Component {
  state = {
    heroes: [],
  };

  componentDidMount() {
    axios.get("http://localhost:4000/heroes").then((responseFromApi) => {
      console.log(responseFromApi);
      this.setState({
        heroes: responseFromApi.data,
      });
    });
  }

  render() {
    return (
      <div>
        <h2>Heroes page</h2>
        <pre>{JSON.stringify(this.props, null, 2)}</pre>
        {this.state.heroes.map((hero) => {
          return (
            <div key={hero._id}>
              <img
                style={{
                  width: 30,
                  height: 30,
                }}
                src={hero.image}
                alt={hero.name}
              />
              <Link to={`/heroes/${hero._id}`}>
                <h3>{hero.name}</h3>
              </Link>
            </div>
          );
        })}
      </div>
    );
  }
}

export default HeroesPage;
