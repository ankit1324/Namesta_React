import React from "react";

class InfoClass extends React.Component {
  constructor(props) {
    super(props);

    //?state variables
    this.state = {
      userInfo: {
        name: "XYZ",
        location: "xyz",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/ankit1324");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
    console.log(json);
  }

  render() {
    const { name, public_repos, avatar_url } = this.state.userInfo;
    return (
      <div className="infoCard">
        <h1>Name - {name}</h1>
        <img src={avatar_url} alt="" className="res-image" />
        <h2>REPO - {public_repos}</h2>
        <h2>contact - @ankit1324</h2>
      </div>
    );
  }
}

export default InfoClass;
