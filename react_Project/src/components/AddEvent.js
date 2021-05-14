import React, { Component } from "react";
import {BrowserRouter as Router, Link, NavLink, Redirect, Route } from "react-router-dom";
import axios from "axios";

class AddEvent extends Component {
  
  
    constructor(props) {
        super(props);
            this.state = {
             name: "default",
             date: "Jan 1st 1990",
             region: "Bangalore",
             poster: "https://wallpaper-house.com/data/out/12/wallpaper2you_489879.jpg",
                        };
            }
  
   handleSubmit = (event) => {
        event.preventDefault();
            const details = {
                name: this.state.name,
                date: this.state.date,
                region: this.state.region,
                poster: this.state.poster,
             };
    
    console.log(details);
    
    axios.post("http://localhost:8001/movies", details)
      .then((result) => {
            console.log("Event Added Successfully..!!" + result.data);
            })
      .catch((error) => {
        console.log(error);
         });
    };

    handleChange = (event) => {
        event.preventDefault();
            const { name, value } = event.target;
            this.setState({ [name]: value });
            console.log(this.state);
    };

  

  render() {
    return (
               
        <div class="container" 
        style={{ backgroundColor: '#00FF7F', width: '100%', height: '100%'}}  >
                <div class="row">
                        <div class="col-sm"></div>
                           
                <div class="col-sm">    
                <br /><br />
                        <h2 className="display-5 fw-bold">Add New Event</h2>
                        <br />
                        
                        <form onSubmit={this.handleSubmit}>
                                <div className="form-group">
                                    <label>Please enter Event Name</label>
                                    <input type="text" className="form-control" name="name" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Please enter Event Date</label>
                                    <input type="text" className="form-control" name="date" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Please enter Event Region</label>
                                    <input type="text" className="form-control" name="region" required onChange={this.handleChange} />
                                </div>
                                <div className="form-group">
                                    <label>Please enter Event Poster Link</label>
                                    <input type="text" className="form-control" name="poster" required onChange={this.handleChange} />
                                </div>
                        <br />
                        <br />
                        <input type="submit" className="btn btn-warning" value="Add Event"  />
                        <NavLink className="btn btn-info" to="/MovieList"> Back to Events Page </NavLink>
                        </form>



                    </div>
                    <div class="col-sm"></div>
                </div>
            </div>           
    );
  }
}
export default AddEvent;