import React from 'react'
import $ from 'jquery'
import {Modal, Button} from 'react-bootstrap'
import Ux3Services from '../../../services/Ux3Services'

let CallmeNow = React.createClass({
    getInitialState(){
        return {
            showModal: false,
            now: false
        }
    },

    close(){
        this.setState({showModal: false})
        return false
    },

    open(){
        this.setState({showModal: true})
    },

    showFormNow() {
        this.setState({now: true})
    },

    sendNow() {
        data = {
            phone_number: $('#phone_number').val(),
            activity_type: 'now'
        }

        if (data.phone_number.length < 10) {
            $('#phone_number').next().show();
            return;
        }

        let uuid = localStorage.getItem('uuid')
        uuid = JSON.parse(uuid)

        Ux3Services.sendCallmeNow(uuid)
            .then((data) => {
                console.log(data)
            })
    },

    showFormLater() {
        console.log('later')
    },

    render() {
        return (
            <div>
                <Modal bsClass="modal" show={this.open} onHide={this.close}>
                    <Modal.Body>
                        <a className="close-ud" onClick={this.close}>×</a>

                        <div className="buttons">
                            <a onClick={this.showFormNow} className="call-me-now">¡Llámame ahora!</a>
                            <a onClick={this.showFormLater} className="call-me-later">¡Llámame más
                                tarde!</a>
                        </div>

                        {(() => {
                            if (this.state.now == true) {
                                return (
                                    <div className="form" id="form-now">
                                        <div className="form-group">
                                            <label htmlFor="phone_number">Tu número celular:</label>
                                            <input type="text" id="phone_number" name="phone_number" maxLength="10"
                                                   placeholder="Tu número celular" className="r-numeric"/>

                                            <div className="block-error">Ingresa un número de celular. Debe tener 10
                                                dígitos.
                                            </div>
                                        </div>
                                        <a onClick={this.sendNow} className="btn btn-continue">Confirmar tu número</a>
                                    </div>
                                )
                            }
                        })()}
                    </Modal.Body>
                </Modal>
            </div>
        )
    }
})

export default CallmeNow