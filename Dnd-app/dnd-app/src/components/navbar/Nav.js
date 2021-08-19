import React, { Component } from 'react';

class Nav extends Component {
    render() { 
        const navstyle = {
            backgroundColor: "red",
            margin: "10px",
            textDecoration: "none",
            padding: "10px",
            
        }
        return (
                <nav style={navstyle}>
                    <a style={navstyle} href="https://github.com/ahsanahmedkhan">Home</a>
                    <a style={navstyle} href="https://github.com/ahsanahmedkhan">Skills</a>
                    <a style={navstyle} href="https://github.com/ahsanahmedkhan">Portfolio</a>
                    <a style={navstyle} href="https://github.com/ahsanahmedkhan">Contacts</a>
                </nav>
          );
    }
}
export default Nav;