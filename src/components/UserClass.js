import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
      },
    };
  }

  async componentDidMount() {
    const data = await fetch(
      "https://api.github.com/users/karthik-glitch-coder"
    );
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

  }

  render() {
    const { name, location, node_id,avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <div><img className="avatar-img" src={avatar_url}/></div>
        <div>
          <h3>Name : {name}</h3>
          <h4>Location : {location} </h4>
          <h5>nodeId : {node_id}</h5>
        </div>
      </div>
    );
  }
}

export default UserClass;
