import React from "react"
class Movie extends React.Component {

    stars=(n) => {
        //HTML collection
        let tab = [];
            for (let i=0 ; i<n ; i++) {
               tab =tab.concat(<svg color="black"  key={i} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>)
            }
            for (let i=n ; i<5 ; i++) {
                tab.push(<svg color="gray" border="2px solid black"  key={i} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="star" className="svg-inline--fa fa-star fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M259.3 17.8L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0z"></path></svg>)
            }
      
        return tab  
    }
    
    render() {
        return (
            <div >
            {this.props.movies.map(el=> 
                <div className="picture-text"> 
                    <img src={el.image} alt="alt" className="image" />
                    <span className="text">{el.description}</span>
                    <div className="stars">
                        {this.stars(el.rating)}           
                    </div>
            </div>
            
     
                 ) }
            </div>
        );
    }
}
export default Movie