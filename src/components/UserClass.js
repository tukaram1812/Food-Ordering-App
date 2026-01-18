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
    // console.log(this.props.name + "Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + "Child Compoenent Did Mount");
    //API Call

    const data = await fetch("https://api.github.com/users/tukaram1812");
    const json = await data.json();

    this.setState({
      userInfo: json,
    });

    console.log(json);
  }

  componentDidUpdate() {
    console.log("Component did Update");
  }

  componentWillUnmount() {
    console.log("Component will Unmount");
  }

  render() {
    const { name, location, avatar_url } = this.state.userInfo;

    // console.log(this.props.name + "Child Render");

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h2>Name: {name}</h2>
        <h3>Location : {location}</h3>
        <h4>Contact:@akshaymarch7</h4>
      </div>
    );
  }
}

export default UserClass;
