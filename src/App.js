import React from 'react';
import Movie from "./Movie";
import ModalExample from "./ModalExample";
import Recherche from "./Recherche";
const films = [
  {image:"https://upload.wikimedia.org/wikipedia/en/3/3a/Aquaman_poster.jpg" , description:"Date de sortie 20 mars 2019 (1h 35min)" , rating:5},
  {image:"https://upload.wikimedia.org/wikipedia/en/thumb/c/cf/2.0_film_poster.jpg/220px-2.0_film_poster.jpg" , description:"2.0 film poster.jpg" , rating:3},
]
class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      movies: films ,
      searchedValue:''
    }
  }
  handleChange = (event) => {
    this.setState({
      searchedValue: event.target.value
    })
  }
     addMovie = (image, description, rating) => {
   this.setState ({
    movies : this.state.movies.concat({image, description, rating})
   })
  console.log({image, description, rating})
   }
  render(){
  return (
    <div className="App">
      <input type='text' value={this.state.searchedValue} onChange={this.handleChange}/>
      {this.state.movieList
        .filter(el => el.description.includes(this.state.searchedValue))
        .map(el => <Movie movies={el}/>)}
     <Movie movies={this.state.movies} />
     <ModalExample buttonLabel="ADD" addMovie={this.addMovie}/>
    </div>
  );
}
}
export default App;
