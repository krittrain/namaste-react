import React from "react";

class UserClass extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInfo: {
                login: "Dummy",
                location: "Deafult",
                avatar_url: "htp://dummy-photo.com"
            },
        }
        console.log(this.props.name, "Child Constructor")
    }

    async componentDidMount() {
        console.log(this.props.name, "Child Compoent Did Mount")
        this.timer = setInterval(() => {
            console.log("Namaste react");
        }, 1000);
        const data = await fetch("https://api.github.com/users/krittrain");
        const json = await data.json();


        this.setState({
            userInfo: json,
        })

        console.log(json);
    }

    componentDidUpdate() {
        console.log("Child Compoent Did Update")

    }

    componentWillUnmount() {
        console.log("Child Compoent Will Unmount")
        clearInterval(this.timer);

    }

    render() {
        const { login, location, avatar_url } = this.state.userInfo;

        // const { count } = this.state;
        console.log(this.props.name, "Child Render")
        return (
            <div className="user-card">
                {/* <h1>Count: {count}</h1> */}
                {/* <button
                    onClick={() => {
                        this.setState({
                            count: this.state.count + 1,
                        });
                    }}
                >
                    CountIncrease
                </button> */}
                <img src={avatar_url} />
                <h2>Name: {login}</h2>
                <h3>Location: {location}</h3>
                <h4>Contact: krittrain</h4>
            </div>
        );
    }
}

export default UserClass;
