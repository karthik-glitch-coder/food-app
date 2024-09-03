import { Component } from "react";
import UserClass from "./UserClass";

class About extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {}

  render() {
    return (
      <div style={{ fontFamily: "system-ui, Roboto" }}>
        <h1>About Class Component</h1>
        <UserClass name={"Karthik Class"} location={"Madurai"} />
      </div>
    );
  }
}

export default About;
