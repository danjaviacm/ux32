import React from 'react/addons'
import Reflux from 'reflux'
import Ux3Func from '../../services/Ux3Func'
import { default as Router, Link } from 'react-router'
import ValidationMixin from 'react-validation-mixin'
import Joi from 'joi'
import Notification from 'react-notification'
import Footer from '../footer'
import LogosInsurances from '../logos_insurances'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'
import $ from 'jquery'
import Raven from 'raven-js'

let QueryRegistration = React.createClass({
    contextTypes: {
        router: React.PropTypes.func
    },
    mixins: [ValidationMixin, Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],
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

    /*componentWillMount() {
     Raven.config('https://a9c5bab656554a52b0808d84cb482a56@app.getsentry.com/20142', {
     // we highly recommend restricting exceptions to a domain in order to filter out clutter
     whitelistUrls: ['seguros.comparamejor.com/'],
     }).install();
     Raven.captureMessage(new Error('Whoops!'))
     },*/

    validatorTypes: {
        vehicle_registration: Joi.string().alphanum().min(6).max(6).required()
        // vehicle_registration: Joi.string().regex(/^[A-Za-z]{3}[\d]{2,3}$/).min(5).max(6).required()
    },

    handleButtonClick(notification) {
        this.setState({
            error: {
                isActive: false
            }
        });
    },
    componentWillMount(){
        let query = window.location.search.match(/[\w]{3}[0-9]{2,3}[\w]{0,1}/);
        Ux3Func.clear()
        if(query){
            Ux3Func.saveValue('vehicle_registration', query[0])
            Ux3Func.saveValue('vehicle_has_registration', true)
            Ux3Func.saveValue('table', `preliminar`)
            this.transitionTo('loading')
        }else{
            trackJs.console.warn("vehicle_registration no found: " + window.location.search);
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

    continue() {
        let onValidate = function (error, validationErrors) {
            if (error) {
                let obj = Object.keys(this.validatorTypes).map(function (k) {
                    if (validationErrors.hasOwnProperty(k)) {
                        return validationErrors[k]
                    }

                });
                this.setState({
                    error: {
                        isActive: true,
                        message: "Debes ingresar una placa valida",
                        action: 'close',
                        dismissAfter: 2000
                    }
                });
            } else {
                let vehicle_registration = document.querySelector('#vehicle_registration').value

                Ux3Func.saveValue('vehicle_registration', vehicle_registration)
                Ux3Func.saveValue('vehicle_has_registration', true)
                Ux3Func.saveValue('table', `preliminar`)
                this.transitionTo('loading')
            }
        }.bind(this);
        this.validate(onValidate);
    },

    continueKey(event) {
        if (event.keyCode == 13) {
            this.continue()
        }
    },

    render() {
        return (
            <div id="query-registration">
                <section className="container-step">
                    <div id="step-query-registration" className="step">

                        <div className="ptgw-2x nmr">
                            <div className="col-xs-12 col-md-6 message text-right">
                                <span className="bebas upper">Cotiza gratis</span><br/>
                                <span className="bebas upper palid-yellow">tu seguro todo riesgo</span><br/>
                                <span className="bebas upper palid-yellow">en segundos</span>
                            </div>
                            <div className="col-xs-12 col-md-4 form-registration text-left">
                                <span className="quote">Ingresa tu placa</span> <br/>
                                <input id="vehicle_registration"
                                       autofocus
                                       valueLink={this.linkState('vehicle_registration')}
                                       className="vehicle_registration" type="text"
                                       placeholder="XXX000" pattern="[A-Z]{3}[0-9]{3}" minLength="6" maxLength="6" required="true"
                                       onBlur={this.handleValidation('vehicle_registration')}
                                       onKeyDown={this.continueKey}/>
                                <br/>
                                <button id="button-quote" className="btn btn-lg btn-orange"
                                        onClick={this.continue}>
                                    Continuar
                                </button>
                            </div>
                            <div className="col-xs-12">
                                <br/>
                                <Link className="btn btn-success" to="vehicle_body">Cotizar vehículo sin placa</Link><br/>
                            </div>
                            <br/>
                            <div className="col-xs-12">
                                <br/>
                                <span className="small">Al continuar aceptas nuestros <a
                                    href="https://comparamejor.com/co/terminos-y-condiciones/" target="_blank">términos
                                    y
                                    condiciones</a></span>
                                <br/>
                            </div>

                        </div>
                    </div>
                </section>
                <Notification
                    isActive={this.state.error.isActive}
                    message={this.state.error.message}
                    action={this.state.error.action}
                    dismissAfter={this.state.error.dismissAfter}
                    style={this.getNotificationStyles()}
                    onClick={this.handleButtonClick}
                    />
            </div>
        )
    }
})

export default QueryRegistration