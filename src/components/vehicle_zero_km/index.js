import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import ValidationMixin from 'react-validation-mixin'
import Joi from 'joi'
import $ from 'jquery'
import { Overlay, Tooltip } from 'react-bootstrap'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

const tooltip = {
    error: <Tooltip>Límite asegurado del amparo de RCE (Resposabilidad Civil Extracontractual)</Tooltip>
}

let VehicleZeroKm = React.createClass({
    mixins: [ValidationMixin, Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],

    validatorTypes: {
        vehicle_commercial_value: Joi.string().alphanum().min(7).max(30).required()
    },

    isActive(key, valueOf, classes) {

        var cx = React.addons.classSet;

        if (Ux3Func.getValue(key) == valueOf) {
            classes['active'] = true;
        }
        var classes = cx(classes);
        return classes
    },

    componentDidMount() {
        this.setState({
            vehicle_is_zero_km: Ux3Func.getValue('vehicle_is_zero_km'),
            vehicle_commercial_value: Ux3Func.getValue('vehicle_commercial_value')
        });
    },

    getInitialState() {
        return {
            vehicle_zero_km: 0,
            show: false
        }
    },

    continue() {
        let onValidate = function (error, validationErrors) {
            if (error) {
                let obj = Object.keys(this.validatorTypes).map(function (k) {
                    if (validationErrors.hasOwnProperty(k)) {
                        return validationErrors[k]
                    }

                });

                $('.block-error').show()
                this.setState({show: !this.state.show})

            } else {
                let vehiclecm = document.querySelector('#vehicle_commercial_value').value
                Ux3Func.loadData()
                Ux3Func.saveValue('vehicle_is_zero_km', 1)
                Ux3Func.saveValue('vehicle_commercial_value', parseInt(vehiclecm.replace(/[^\d]/g, '')))
                this.transitionTo('vehicle_service_type')
            }
        }.bind(this);
        this.validate(onValidate);
    },

    yes() {
        Ux3Func.loadData()
        Ux3Func.saveValue('vehicle_is_zero_km', 0)
        this.transitionTo('vehicle_service_type')
    },

    not(){
        this.setState({vehicle_zero_km: 1})
    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div id="step-vehicle-zero-km" className="step">
                    <ProgressBar percentage="50%"></ProgressBar>
                    <header>
                        <h1>¿Cuál es la ubicación de tu vehículo?</h1>
                    </header>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div className={this.isActive('vehicle_is_zero_km', 1, {'btn-icon-content': true})}
                                 onClick={this.not}>
                                <span className="icon"><i className="cmuj-local"></i></span>
                                <span className="text">En concesionario</span>
                            </div>
                        </li>
                        <li>
                            <div className={this.isActive('vehicle_is_zero_km', 0, {'btn-icon-content': true})}
                                 onClick={this.yes}>
                                <span className="icon"><i className="cmuj-path"></i></span>
                                <span className="text">En circulación</span>
                            </div>
                        </li>
                    </ul>
                    <br/>
                    {(() => {
                        if (this.state.vehicle_zero_km == 1) {
                            return (
                                <div className="form-group">
                                    <div className="row">
                                        <div
                                            className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-4 col-md-offset-4">
                                            <div className="input-group">
                                                <div className="input-group-addon">$</div>
                                                <input id="vehicle_commercial_value" maxLength="15"
                                                       valueLink={this.linkState('vehicle_commercial_value')}
                                                       className="text-center form-control" type="text"
                                                       placeholder="Valor del vehículo en factura de compra..."
                                                       ref="vehicle_commercial_value"
                                                       required/>
                                            </div>
                                            <div className="block-error">Debes ingresar un valor (Minimo 7 dígitos) <i
                                                className="fa fa-exclamation-circle"></i><br/></div>
                                            <span className="helpBlock small">Escribe el valor del vehículo que aparece en tu factura de compra.</span>
                                            <br/><br/>
                                            <button className="btn btn-continue lg pull-right" onClick={this.continue}>
                                                Continuar
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                    })()}
                </div>
            </section>
        )
    }
})

export default VehicleZeroKm
