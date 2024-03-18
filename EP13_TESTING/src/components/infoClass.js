import React from "react";
import UserContext from "../../utils/UserContext";

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
    // console.log(json);
  }

  render() {
    const { name, public_repos, avatar_url } = this.state.userInfo;
    return (
      <div className="infoCard">
        LoggedIn User:
        <UserContext.Consumer>
          {(data) => <h2 className="text-xl font-bold">{data.loggedInUser}</h2>}
        </UserContext.Consumer>
        <h1>Name - {name}</h1>
        <img src={avatar_url} alt="" className="res-image" />
        <h2>REPO - {public_repos}</h2>
        <h2>contact - @ankit1324</h2>
      </div>
    );
  }
}

export default InfoClass;
