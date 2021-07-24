import React, { Component } from 'react';
import backGroundImage from './bg.jpg';
import bmusImage from './bmuse_logo.png';
import searchImage from './search.png';
import slideArrow from './slider_arrow.png';
import slideArrowBackward from './slider_arrow_backward.png';
import closeIcon from './close.png';
import logo from './logo.svg';
import './App.css';
import './bootstrap.min.css';
import { render } from '@testing-library/react';

export default class App extends React.Component {
  constructor(props) {
    super(props);
      this.state = {
            filteredIndex: "",
            imageBorder: "",
            cardWidth: "",
            selectedBookSource: "",
            limit: 4,
            results: {
                    "books": [{
                        "publisher": "Putnam",
                        "description": "In a quiet town on the North Carolina coast in 1969, a young woman who survived alone in the marsh becomes a murder suspect.",
                        "title": "WHERE THE CRAWDADS SING",
                        "author": "Delia Owens",
                        "book_image": "assets/books/9780735219090.jpg",
                        "rating": "3.5",
                        "id": 0,
                        "selected": false
                    }, {
                        "publisher": "Riverhead",
                        "description": "The lives of twin sisters who run away from a Southern Black community at age 16 diverge as one returns and the other takes on a different racial identity but their fates intertwine.",
                        "title": "THE VANISHING HALF",
                        "author": "Brit Bennett",
                        "book_image": "assets/books/9780525536291.jpg",
                        "rating": "3.0",
                        "id": 1,
                        "selected": false
                    }, {
                        "publisher": "Simon & Schuster",
                        "description": "The 23rd book in the Dave Robicheaux series. Rival Louisiana crime families and a time-traveling superhuman assassin bring up Robicheaux’s personal demons.",
                        "title": "A PRIVATE CATHEDRAL",
                        "author": "James Lee Burke",
                        "book_image": "assets/books/9781982151683.jpg",
                        "rating": "4.0",
                        "id": 2,
                        "selected": false
                    }, {
                        "publisher": "Little, Brown",
                        "description": "After getting kicked out of M.I.T., Angela Hoot interns with the F.B.I. and tracks the murderous siblings known as the Poet and the Engineer.",
                        "title": "1ST CASE",
                        "author": "James Patterson and Chris Tebbetts",
                        "book_image": "assets/books/9780316418188.jpg",
                        "rating": "4.2",
                        "id": 3,
                        "selected": false
                    }, {
                        "publisher": "Harper",
                        "description": "The 20th book in the Gabriel Allon series. The art restorer and spy cuts his family’s vacation short to investigate whether Pope Paul VII was murdered.",
                        "title": "THE ORDER",
                        "author": "Daniel Silva",
                        "book_image": "assets/books/9780062834843.jpg",
                        "rating": "3.2",
                        "selected": false
                    }, {
                        "publisher": "Putnam",
                        "description": "The 54th book in the Stone Barrington series. Things get rough for Stone as he goes after criminals in New York City and Key West.",
                        "title": "CHOPPY WATER",
                        "author": "Stuart Woods",
                        "book_image": "assets/books/9780593188293.jpg",
                        "rating": "3.8",
                        "id": 4,
                        "selected": false
                    }, {
                        "publisher": "Little, Brown",
                        "description": "A relationship that started in 1993 between Mallory Blessing and Jake McCloud comes to light while she is on her deathbed and his wife runs for president.",
                        "title": "28 SUMMERS",
                        "author": "Elin Hilderbrand",
                        "book_image": "assets/books/9780316420044.jpg",
                        "rating": "4.6",
                        "id": 5,
                        "selected": false
                    }, {
                        "publisher": "Morrow",
                        "description": "A wedding between a TV star and a magazine publisher on an island off the coast of Ireland turns deadly.",
                        "title": "THE GUEST LIST",
                        "author": "Lucy Foley",
                        "book_image": "assets/books/9780062868930.jpg",
                        "rating": "3.5",
                        "id": 6,
                        "selected": false
                    }, {
                        "publisher": "Emily Bestler/Atria",
                        "description": "The 19th book in the Scot Harvath series. With a bounty on his head, Harvath makes an alliance with a Norwegian intelligence operative.",
                        "title": "NEAR DARK",
                        "author": "Brad Thor",
                        "book_image": "assets/books/9781982104061.jpg",
                        "rating": "3.3",
                        "id": 7,
                        "selected": false
                    }, {
                        "publisher": "Flatiron",
                        "description": "A bookseller flees Mexico for the United States with her son while pursued by the head of a drug cartel.",
                        "title": "AMERICAN DIRT",
                        "author": "Jeanine Cummins",
                        "book_image": "assets/books/9781250209764.jpg",
                        "rating": "4.0",
                        "id": 8,
                        "selected": false
                    }, {
                        "publisher": "Del Rey",
                        "description": "In 1950s Mexico, a debutante travels to a distant mansion where family secrets of a faded mining empire have been kept hidden.",
                        "title": "MEXICAN GOTHIC",
                        "author": "Silvia Moreno-Garcia",
                        "book_image": "assets/books/9780525620785.jpg",
                        "rating": "3.6",
                        "id": 9,
                        "selected": false
                    }, {
                        "publisher": "Doubleday",
                        "description": "The line between fact and fiction becomes blurred when an author of thrillers is found dead after a hurricane hits Camino Island.",
                        "title": "CAMINO WINDS",
                        "author": "John Grisham",
                        "book_image": "assets/books/9780385545938.jpg",
                        "rating": "4.5",
                        "id": 10,
                        "selected": false
                    }]
            }
        }
    }

    render() {
      return(
        <div className="container-fluid p-0">
          <img className="home-image" style={{height: "100%", width: "100%"}} src={backGroundImage} alt="..." />
          <img className="bmus-image" src={bmusImage}/>
          <img className="search-image" src={searchImage}/>
          <div className="heading">Bookshelf & </div>
          <div className="heading1">Book Racks</div>
          <div className="paragraph">Lorem Ipsum is simply dummmy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy text ofthe printing and typesetting industry</div>
          <div className="slider-div">
              <div className="booklist-heading">
              LOREM IPSUM
              </div>
              <div className="card-group card-position">
                <div className="row"> 
                    {(this.state.limit > 4) ?
                    <img className="slide-backward-arrow" src={slideArrowBackward} 
                        onClick={(event) => { 
                            this.state.limit = this.state.limit - 4; 
                            this.setState({limit: this.state.limit}); 
                            this.setState({selectedBookSource: ""});
                          }}
                      /> 
                      : "" }            
                    {this.state.results.books.filter( (bookDetails) => bookDetails.id >= this.state.limit - 4 && bookDetails.id < this.state.limit).map((filteredBookDetails, filteredBookIndex) => {
                      return(
                      <div className="card col-md-3"> 
                        <img className={`card-img-top book-image rounded ${ (this.state.results.books[filteredBookIndex].selected) ? "border" : "" }`} style={{cursor: "pointer"}} src={filteredBookDetails.book_image} 
                              onClick={(event) => {this.setState({selectedBookSource: filteredBookDetails});
                              this.state.results.books.map((details, index) => 
                                  { (details.id === filteredBookDetails.id) ? this.state.results.books[index].selected = true : this.state.results.books[index].selected = false
                              })}}/>
                        <div className="book-rating" style={{left: (this.state.limit <= 8) ? "216px" : "173px"}}>4.4 out of 5</div>
                      </div>
                    )})}
                    {(this.state.limit < 12) ?
                    <img className="slide-arrow" src={slideArrow} 
                        onClick={(event) => { 
                              this.state.limit = this.state.limit + 4; 
                              this.setState({limit: this.state.limit});
                              this.setState({selectedBookSource: ""});
                            } 
                        }
                    />
                    : "" }
                </div>
              </div>
          </div>
          {(this.state.selectedBookSource !== "") ?
          <div className="row w-100 nopadding book-detail-div" style={{backgroundColor: "#131214"}}>
            <div className="col-md-4 mt-5">
              <div className="d-flex flex-column">
                    <div className="selected-book-name ml-5">
                        {this.state.selectedBookSource.title}
                    </div>
                    <div className="ml-5 mb-5">
                      <img className="selected-book-image" src={this.state.selectedBookSource.book_image} />
                    </div>
                    <div className="ml-5">
                      <button type="button" class="btn btn-secondary">Add to favourites  +</button>
                    </div>
              </div>
            </div>
            <div className="col-md-8 mt-5">
              <img className="close-icon" src={closeIcon}  
                    onClick={(event) => {
                      this.state.results.books.map((details, resetIndex) => { this.state.results.books[resetIndex].selected = false})
                      this.setState({selectedBookSource: "", results: this.state.results});
              }}/>
              <div className="d-flex flex-column">
                  <div className="selected-book-author">
                      {this.state.selectedBookSource.author}
                  </div>
                  <div className="selected-book-publisher mb-5">
                      {this.state.selectedBookSource.publisher}
                  </div>
                  <div className="selected-book-description">
                      {this.state.selectedBookSource.description}
                  </div>
              </div>
          </div>
        </div>
        : "" }
      </div>
      )
    }
  }
