import UserClass from "./UserClass";
import User from "./User";
import { Component } from "react";
import UserContext from "../utils/UserContext";

class About extends Component {
    constructor(props) {
        super(props);

        // console.log(" Parent Constructor")
    }

    render() {
        // console.log("Parent Render")
        return (
            <div>
                <h1>About</h1>
                <div>
                    LoggedIn user
                    <UserContext.Consumer>
                        {({ loggedInUser }) => (
                            <h1 className="font-bold">{loggedInUser}</h1>
                        )}
                    </UserContext.Consumer>
                </div>
                <h2>This is Namaste Web Series</h2>
                <User name={"Kritika verma Classes"} location="Lucknow" />
            </div>
        );
    }
}

export default About;
