import React from "react";
import axios from "axios";

class OneHeroPage extends React.Component {
  state = {
    hero: null,
  };

  componentDidMount() {
    // console.log(this.props.match.params.id);
    const heroId = this.props.match.params.id;

    axios.get("http://localhost:4000/heroes/" + heroId).then((apiResponse) => {
      console.log(apiResponse);
      setTimeout(() => {
        this.setState({
          hero: apiResponse.data,
        });
      }, 1000);
    });
  }

  render() {
    if (!this.state.hero) {
      return <div>Loading.....</div>;
    }

    return (
      <div>
        <h2>Welcome to the hero page</h2>
        <div>
          <h2>{this.state.hero.name}</h2>
          <img src={this.state.hero.image} />
        </div>
        {/* <pre>{JSON.stringify(this.props, null, 2)}</pre> */}
      </div>
    );
  }
}

export default OneHeroPage;
