import React, {Component} from 'react'; //need for anything using jsx

// THIS IS A PLAIN FUNCTION
// const SearchBar = () => {
//   return <input />;
// };

//We would rather have a class components, something with more 'intelligence'
//ES6 class
class SearchBar extends Component { //define class, and give it react.component functionalities
  constructor(props){ //initialize the state
    super(props); // parent method on parent class (component)

    this.state = { term: ''}; //term is like the search term, just a property name
  }

  render() { //will call this render function (all classes have render function)
    return (
      <div className="search-bar">
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)} />
      </div>
    );
  } //always change state with this.setState

  //old code
  //   return <input onChange={(event) => console.log(event.target.value) }/>;
  // }

//Don't need this because of the pointer  above
  // onInputChange (event) { // this is an event, whenever the input changes
  //   console.log(event.target.value);
  // }

  onInputChange(term){
    this.setState({term});
    this.props.onSearchTermChange(term);
  }


}

//Handling User Events
export default SearchBar;
