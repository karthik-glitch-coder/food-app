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
    const { name, location, node_id,avatar_url,id } = this.state.userInfo;

    return (
      <div className="user-card">
        <div><img className="avatar-img" src={avatar_url}/></div>
        <div>
          <h5>Name : {name}</h5>
          <h6>Location : {location} </h6>
          <h6>nodeId : {node_id}</h6>
          <h6>Id : {id}</h6>
        </div>
      </div>
    );
  }
}

export default UserClass;
