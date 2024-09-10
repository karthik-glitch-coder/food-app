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
    const { name, location, node_id, avatar_url, id } = this.state.userInfo;

    return (
      <div className="flex m-2 pl-4 pb-6 border border-dotted border-orange-500  rounded-[50px] w-[30%]">
        <div>
          <img
            className="w-44 m-2 mt-4 p-2  pt-5 rounded-[30%]"
            src={avatar_url}
          />
        </div>
        <div className="pt-[70px]">
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
