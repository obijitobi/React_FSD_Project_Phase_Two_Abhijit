import React, { Component, useState } from "react";
import axios from "axios";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

class MovieList extends Component {
        constructor(props) {
            super(props);
            this.state = {
                events: [],
            }
        };

        componentDidMount() {
            axios.get('http://localhost:8001/movies')
                .then(result => {
                    this.setState({ events: result.data })
                    console.log(this.state.events);
                })
                .catch(error => {
                    console.log("Error Caught : " + error)
                })
            }

    render(){
      return( 
      
        <div class="container-xl" style={{ backgroundColor: '#E0FFFF', width: '100%', height: '100%'}}>    
                
                <div className="image-container justify-content-start" style={{ backgroundColor: '#E0FFFF', width: '100%', height: '100%'}} >
                    <div className='overlay align-items-center justify-content-center'>  
                        <section className="py-5 text-center container"> 
                            <div className="">
                            <div className="col-lg-6 col-md-8 mx-auto">
                                <h2 className="fw-light" style={{color: "black"}}>Movie Events Page!</h2>
                                <p className="lead text-muted" style={{color: "black"}}>Please Scroll down to find the Movie Event</p>
                                <p className="lead text-muted" style={{color: "black"}}></p>
                            </div>
                            </div>
                        </section>
                
                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                        {this.state.events.map((event,index) =>{
                                        return(
                                                <div className="col">
                                                <div className="card shadow-sm">
                                                <img className="d-block w-100 " src={event.poster} alt="First slide" width="300px" height="300px" />
                        
                                <div className="card-body w-100">
                                    <p className="card-text" >{event.name}</p>
                                    <p className="card-text" >{event.date}</p>        
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className="btn-group"></div>
                                        <small className="text-muted">{event.region}</small>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            )
                        })}
                </div>
                </div>
                </div>
       </div>
    )
  }
}

export default MovieList;