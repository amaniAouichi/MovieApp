import React from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

class ModalExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      image: "" ,
      description: "" ,
      rating: 0 ,
    };

  }
    handleChange = (e) => {
   this.setState ({
   [e.target.name] : e.target.value
   })
  }

    
  toggle=()=> {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    return (
      <div>
        <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel}</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
          <ModalHeader toggle={this.toggle}>{this.props.buttonLabel} Movie</ModalHeader>
          <ModalBody>
            <input type="text" placeholder="image" onChange={this.handleChange} name="image"/>
            <input type="text" placeholder="description" onChange={this.handleChange} name="description"/>
            <input type="text" placeholder="rating" onChange={this.handleChange} name="rating"/>
          </ModalBody>
          <ModalFooter>
         
            <Button color="primary" onClick={(e)=>{this.toggle();this.props.addMovie(this.state.image ,this.state.description ,this.state.rating)} }> Add Film </Button>{' '}
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default ModalExample;