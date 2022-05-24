import React, { Component } from 'react'

class Form extends Component {
  constructor(props) {
    super(props)

    this.state = {

      linkName: "", url:""





          /*
            TODO - set initial state for link name and URL 
        */
    }
  }

  handleChange = (event) => {
  
    if(event.target.id === "link")
    this.setState({
      linkName: event.target.value
    });

    else

    this.setState({
      url: event.target.value
    });
  }
  
    /*
            TODO - Logic for changing state based on form changes
        */
  

  onFormSubmit = (event) => {
    // to prevent page reload on form submit
    event.preventDefault()

    let newFavLink = {linkName: this.state.linkName, url: this.state.url};

    this.props.addNew(newFavLink);

    this.setState({linkName: "", url: ""});

  }




    /*
            TODO - Logic for calling props to handle submission and setting state changes
        */


  render() {

    return (
      <form>
        <label htmlFor="link">  Name: </label>
        <input type="text" id = "link" value= {this.state.linkName} onChange= {(event) => this.handleChange(event)}/>
        <label htmlFor="url">URL:</label>
        <input type="text" id = "url" value = {this.state.url} onChange={(event) => this.handleChange(event)}/>
        <button type="submit" onClick={(e) => this.onFormSubmit(e)} >Submit</button>  
      </form>
      /* TODO - Logic for returning a form element with labels and inputs for link name and URL 
      */
    )
  }
}

export default Form
