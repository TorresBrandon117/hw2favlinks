import React,{useState} from 'react'
 import Table from './Table';
 import Form from './Form';

class LinkContainer extends React.Component {
  constructor(props) {
    super(props)
    /* TODO - Create state object for storing favLinks */
    this.state ={favLinks:[],}
  }

  handleRemove = (index) => {
   
   function removeLink(){

    const [link, setLink] = useState

   }
   
    /*
            TODO - Create logic for setting the state to filter array and remove favLink at index
        */
  }



  handleSubmit = (favLink) => {
    


    this.setState({
      
      favLinks: [this.state.favLinks, favLink]
    });
    
    /*
            TODO - Create logic to setState and add new favLink to favLinks array in state
        */
  }

  render() {
    return (
      <div className="container">
        <h1>My Favorite Links</h1>
        <p>Add a new url with a name and link to the table.</p>
        <Table linkData= {this.state.favLinks} removeLink= {(index)=> this.handleRemove(index)} /> 

        <br />

        <h3>Add New</h3>
        <Form addNew = {(favLink) => this.handleSubmit(favLink)}/>
      </div>
    )
  }
}

export default LinkContainer
