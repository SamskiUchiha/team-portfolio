import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { DropdownButton, Dropdown, Button, ButtonGroup, Form } from 'react-bootstrap';


export default class ProjectModal extends React.Component {

    constructor(props) {
        super(props);
    }

    render(){
        return(
          <Modal.Dialog>
            <Modal.Header closeButton>
              <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <Button variant="secondary">Close</Button>
              <Button variant="primary">Save changes</Button>
            </Modal.Footer>
          </Modal.Dialog>
        );
    }
    
}