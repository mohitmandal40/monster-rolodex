import React, { Component } from "react";
// import logo from "./logo.svg";
import classes from "./App.module.css";
import axios from "axios";

import CardList from "./components/card-list/CardList";
import SearchBox from "./components/card-list/SearchBox/SearchBox";
import Spinner from "./components/card-list/SearchBox/Spinner/Spinner";

class App extends Component {
  state = {
    monster: [],
    searchField: "",
    loading: true,
  };
  async componentDidMount() {
    console.log("componenentdid");
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ monster: res.data, loading: false });
  }

  handleChange = e => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    const { monster, searchField } = this.state;
    const filteredMonster = monster.filter(monster =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );
    console.log(filteredMonster, "filter");
    return (
      <div className={classes.App}>
        <h1>Monster Rolodex</h1>
        <SearchBox
          placeholder="Search Monster"
          handleChange={this.handleChange}
        />

        {this.state.loading ? (
          <Spinner />
        ) : (
          <CardList monster={filteredMonster} />
        )}
      </div>
    );
  }
}

export default App;
