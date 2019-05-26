import React, { Component } from "react";
import CardList from "./CardList";
import Searchbox from "./Searchbox";
// import { animals as animalS } from "./animals";

class App extends Component {
  constructor() {
    super();
    this.state = {
      animals: [],
      searchField: ""
      //   animalsApi: []
    };

    console.log("CTOR");
  }

  //   componentDidMount() {
  //     let users = [] ;

  //     var res = fetch('https://jsonplaceholder.typicode.com/users');
  //     console.log("res");
  //     console.log(res);

  //    fetch('https://jsonplaceholder.typicode.com/users')
  //       .then(response => {
  //         response.json();
  //         console.log(response);
  //       })
  //       .then( () => {
  //         this.setState({ animals: users });

  //       })
  //       .catch((error) => {
  //         console.error(error);
  //       });

  //       console.log( "Diiid" )
  //   }

  //   componentWillMount () {
  //       console.log('wiiiiil')
  //   }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(response => response.json())
      .then(data => this.setState({ animals: data }));
    console.log("Did animals");
    console.log(this.state.animals);
  }

  onSearchChange = event => {
    this.setState({ searchField: event.target.value });
  };

  render() {
    // debugger;

    // if(this.state.animals === null || this.state.animals === undefined ) {
    //     // debugger;
    //     this.state.animals = [];
    // }

    // const filteredwords = this.state.animals.filter(a => {

    //     console.log( "FILTER" )

    //     return a.name
    //     .toLocaleLowerCase()
    //     .includes(this.state.searchField.toLocaleLowerCase());
    // });

    //     const ress = ()=>
    //     {
    //         let animals1 = this.state.animals;
    //         // if(animals1 === undefined) return animals1=[];
    // debugger;
    //             var res = animals1.filter(a=> {
    //                 a.name.toLocaleLowerCase()
    //                 .includes(this.state.searchField
    //                     .toLocaleLowerCase())
    //             });

    //             return res;

    //     }
    //     const filteredwords = ress();

    // const animalsIdNUll = () => {

    //     let _animals = this.state.animals ;
    //   if(_animals.length > 0){
    //       debugger;
    //       this.setState({ 'animals' : this.state.animals });
    //       console.log('state -===-> ') ;
    //       console.log(this.state.animals);
    //       console.log('private -===-> ') ;
    //       console.log(_animals);
    //       return _animals;
    //   }
    // }

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
