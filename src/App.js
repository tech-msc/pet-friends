import React, {Component}  from 'react';
import CardList from './CardList';
import { animals as animalListImport } from './animals';
import Searchbox from './Searchbox';


class App extends Component {
    
    constructor() {
        super()
        this.state = {
            animals : animalListImport,
            searchField: ''
        }
    }

    onSearchChange = (event) => 
    {        

        this.setState({ searchField: event.target.value});


        
        

        // console.log(word === 'nome');
    }


    render() {

        const filteredwords = this.state.animals.filter ( a => {
            return a.name.toLocaleLowerCase()
                .includes(this.state.searchField.toLocaleLowerCase())
        })


        return (



            <div className="tc">
                <h1 className="f2">Pet friends</h1>
                
                <Searchbox searchChange={this.onSearchChange}  />
                
    
                <hr/>
                <CardList 
                animalList={filteredwords}/>
            </div>
        );
    }
    
    
};

export default App;