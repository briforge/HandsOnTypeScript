import React from "react";

const Main = () => {
    const test = false;
    if (test) throw new Error("Main fail");
    else {
        return <main className="content">Main Component</main>;
    }
}

export default Main;