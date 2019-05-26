import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
// import { animals as animalS } from "./animals";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      searchField: "",
      isLoading: false
    };

    console.log("CTOR");
  }

  componentDidMount() {
    this.setState ({ isLoading : true });

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ animals: data, isLoading: false }));
    
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    const { isLoading } = this.state;
    if(isLoading) {
      return (
        <div className="tc">        
          <h1 className="f2 site-title">Pet friends</h1>
          <p className="f2 tc">Loading</p>
        </div>
      )
    }

    const filteredwords = this.state.animals.filter(a => {
      console.log("FILTER");
      return a.name
        .toLocaleLowerCase()
        .includes(this.state.searchField.toLocaleLowerCase());
    });

    // };

    return (
      <div className="tc">
        {/* Title */}
        <h1 className="f2 site-title">Pet friends</h1>

        <Searchbox searchChange={this.onSearchChange} />

        <hr />
        <CardList animalList={filteredwords} />
      </div>
    );
  }
}

export default App;
