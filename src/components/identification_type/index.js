import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ValidationMixin from 'react-validation-mixin'
import Joi from 'joi'
import is from 'is_js'
import Notification from 'react-notification'
import ProgressBar from '../progress_bar'
import $ from 'jquery'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

const IdentificationType = React.createClass({
    mixins: [ValidationMixin, Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],
    isActive(key, valueOf, classes) {
        //
        var cx = React.addons.classSet;

        if (Ux3Func.getValue(key) == valueOf) {
            classes['active'] = true;
        }
        var classes = cx(classes);
        return classes
    },
    componentDidMount() {
        this.setState({
            identification_type: Ux3Func.getValue('identification_type'),
            identification: Ux3Func.getValue('identification')
        });

    },
    validatorTypes: {
        identification: Joi.string().alphanum().min(6).max(12).required(),
        //identification_type: Joi.string().required()
    },
    handleButtonClick(notification) {
        this.setState({
            error: {
                isActive: false
            }
        });
    },
    getInitialState() {
        return {
            error: {
                isActive: false,
                message: 'Error',
                dismissAfter: 2000,
                action: 'close'
            }
        }
    },
    getNotificationStyles() {
        let bar = {
            background: '#000'
        };

        let active = {
            left: 'auto',
            right: '5%',
            top: '5%',
            bottom: 'auto'
        };

        return {bar, active};
    },

    selectOption( identification_type ) {

        let identification_type_list = [ 'cedula', 'nit' ]

        if ( identification_type_list.indexOf( identification_type ) != -1 ) {

            this.setState({ nitLabel: null })

            if ( /[a-zA-Z]/.test( this.state.identification ) )
                this.setState({ identification: null })

            $( "#identification" ).keydown( function( key ) {
                if ( key.keyCode != 8 && ( key.keyCode < 48 || key.keyCode > 57 ) ) return false;
            });

            if ( identification_type == 'nit' )
                this.setState({ nitLabel: '¿Cuál es tu número de identificación? Escribelo sin código de verificación.' })

        }

        else {
            this.setState({ nitLabel: null })
            
            $( "#identification" ).unbind( 'keydown' );
        }
        

        Ux3Func.loadData()
        Ux3Func.saveValue('identification_type', identification_type)
        Ux3Func.saveValue('vehicle_accessories_value', 0)
        document.querySelector('#identification').focus()
        this.setState({
            isActive: true
        })
    },

    continue() {
        var onValidate = function (error, validationErrors) {
            if (error) {
                let obj = Object.keys(this.validatorTypes).map(function (k) {
                    if (validationErrors.hasOwnProperty(k)) {
                        return validationErrors[k]
                    }
                });

                /*if(validationErrors.identification_type.length != 0) {
                 $('.block-error-type').show()
                 setTimeout(function() {
                 $('.block-error-type').fadeOut( "slow")
                 }, 3000)
                 }*/

                if(validationErrors.identification.length != 0) {
                    $('.block-error-num').show()
                    setTimeout(function() {
                        $('.block-error-num').fadeOut( "slow")
                    }, 3000)
                }

            } else {
                let id = document.querySelector('#identification').value
                let data = Ux3Func.loadData()
                if(!data.identification_type){
                    $('.block-error-type').show()
                    setTimeout(function() {
                        $('.block-error-type').fadeOut( "slow")
                    }, 3000)
                }else{
                    if (data.identification_type == 'nit') {
                        Ux3Func.saveValue('identification', id)
                        Ux3Func.saveValue('client_type', 'juridica')
                    } else {
                        Ux3Func.saveValue('identification', id)
                        Ux3Func.saveValue('client_type', 'natural')
                    }
                    this.transitionTo('date_of_birth')
                }
            }
        }.bind(this);
        this.validate(onValidate);

    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div id="step-identification-type" className="step">
                    <ProgressBar percentage="57%"></ProgressBar>
                    <header>
                        <h1>¿Qué tipo de identificación tienes?</h1>

                        <h3>Esta información nos permitirá conocer si eres elegible para descuentos especiales.</h3>
                    </header>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div className={this.isActive('identification_type', 'cedula', {'btn-icon-content': true})}
                                 onClick={this.selectOption.bind(null, 'cedula')}>
                                <span className="icon"><i className="cmuj-identification1"></i></span>
                                <span className="text">Cédula de ciudadanía</span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={this.isActive('identification_type', 'cedula_extranjeria', {'btn-icon-content': true})}
                                onClick={this.selectOption.bind(null, 'cedula_extranjeria')}>
                                <span className="icon"><i className="cmuj-identification2"></i></span>
                                <span className="text">Cédula de extranjería</span>
                            </div>
                        </li>
                        <li>
                            <div
                                className={this.isActive('identification_type', 'pasaporte', {'btn-icon-content': true})}
                                onClick={this.selectOption.bind(null, 'pasaporte')}>
                                <span className="icon"><i className="cmuj-passport"></i></span>
                                <span className="text">Pasaporte</span>
                            </div>
                        </li>
                        <li>
                            <div className={this.isActive('identification_type', 'nit', {'btn-icon-content': true})}
                                onClick={this.selectOption.bind(null, 'nit')}>
                                <span className="icon"><i className="cmuj-sheet"></i></span>
                                <span className="text">NIT</span>
                            </div>
                        </li>
                        <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                            <div className="block-error block-error-type">Debes ingresar el tipo de identificación válida <br/></div>
                        </div>
                    </ul>
                    <br/>

                    <div id="#identification">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-8 col-md-offset-2">
                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-8 form-group">
                                            <label htmlFor="identification" className="label identification_label">{ this.state.nitLabel || '¿Cuál es tu número de identificación?' }</label>
                                            <input id="identification" maxLength="12" type="text"
                                                   className="form-control" placeholder="Escríbelo aquí..."
                                                   valueLink={this.linkState('identification')}
                                                   ref="identification" />
                                            <div className="block-error block-error-num">Debes ingresar una identificación válida</div>
                                        </div>
                                        <div className="col-xs-12 col-sm-12 col-md-4"><br/>
                                            <button className="btn btn-continue lg padd-2" onClick={this.continue}>¡Continuar!
                                                <i className="fa fa-chevron-right"></i></button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
})

export default IdentificationType