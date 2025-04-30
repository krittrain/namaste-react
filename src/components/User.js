import { useState, useEffect } from "react";

const User = ({ name }) => {
    const [count] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("Namste React OP")
        }, 1000);
        console.log("useeffect called");

        return () => {
            clearInterval(timer);
            console.log("useEffct return")
        };

    }, []);
    console.log("render")
    return (
        <div className="user-card">
            <h1>Count:{count}</h1>
            <h2>Name: {name}</h2>
            <h3>Location: Lucknow</h3>
            <h4>Contact: krittrain</h4>
        </div>
    );
};

export default User;
