import React, { Component } from "react";

class Navbar extends Component {
  render() {
    return (
      <nav>
        <i class="fa-solid fa-leaf"></i>
        <span>Habit Tracker</span>
        <span className="navbar-count"></span>
      </nav>
    );
  }
}

export default Navbar;
