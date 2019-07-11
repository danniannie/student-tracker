import React from 'react';
import { Link } from "@reach/router";

const Nav = () => {
    return (
<nav>
    <Link to="/">Home</Link>
    <Link to="/students">Students</Link>
    <Link to="/students/add-student">Add Student</Link>
</nav>
    );
};

export default Nav;