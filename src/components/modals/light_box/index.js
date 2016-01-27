import React from 'react'
import InputCompletion from 'react-input-completion'
import {Modal, Button} from 'react-bootstrap'
import cities from '../../../services/Cities'
import $ from 'jquery'
import Ux3Services from '../../../services/Ux3Services'

let userData = {
    name: '',
    last_name: '',
    email: '',
    phone: '',
    vehicle_city: ''
}

let LightBox = React.createClass({
    getInitialState(){
        return {showModal: true}
    },

    componentWillMount() {
        if (localStorage.getItem('user-data-preliminar') == null) {
            this.setState({showModal: true})
        } else {
            this.setState({showModal: false})
        }
    },

    close() {
        this.setState({showModal: false})
        return false
    },

    open(){
        this.setState({showModal: true})
    },

    render() {
        return (
            <div>
                <Modal bsClass="modal" show={this.state.showModal} onHide={this.close}>
                    <Modal.Body bsClass="form-user">
                        <a className="close-ud" href="#" onClick={this.close}>×</a>
                        <h4 className='text-center white info'>Estamos aquí para ayudarte</h4>
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
})

export default LightBox