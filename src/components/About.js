import { Component } from "react";
import UserClass from "./UserClass";
import UserContext from "../utils/UserContext";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div className="font-roboto pt-[130px]">
        <h1>About Class Component</h1>
        <UserContext.Consumer>
          {({ loggedInUser }) => (
            <h6>
              <span className="pl-4 font-semibold underline">User</span> :{" "}
              {loggedInUser}
            </h6>
          )}
        </UserContext.Consumer>
        <UserClass name={"Karthik Class"} location={"Madurai"} />
      </div>
    );
  }
}

export default About;
