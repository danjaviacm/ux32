import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let VehicleBody = React.createClass({
    mixins: [Router.Navigation, EventTrackingMixin],

    //statics: {
    //    willTransitionTo: (transition) => {
    //        dataLayer.push({
    //            event:'pasovistoux31',
    //            eventLabel: "clickencontinuar",
    //            eventAction: transition.path,
    //            value: 1
    //        });
    //    }
    //},

    isActive(key, valueOf, classes) {
        var cx = React.addons.classSet;

        if(Ux3Func.getValue(key) == valueOf){
            classes['active'] = true;
        }
        var classes = cx(classes);
        return classes
    },

    componentDidMount() {
        this.setState({
            vehicle_has_registration: Ux3Func.getValue('vehicle_has_registration'),
            vehicle_registration: Ux3Func.getValue('vehicle_registration'),
            vehicle_body: Ux3Func.getValue('vehicle_body'),
            vehicle_brand: Ux3Func.getValue('vehicle_brand')
        });
    },

    continue(vehicle_type) {
        let data = Ux3Func.loadData()
        let vehicle_registration = 'SINPLA';

        if(data.vehicle_registration){
            vehicle_registration = data.vehicle_registration;
        }

        Ux3Func.saveValue('vehicle_has_registration', false)
        Ux3Func.saveValue('vehicle_registration', vehicle_registration)
        Ux3Func.saveValue('vehicle_body', vehicle_type)
        this.transitionTo('vehicle_brand')
    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>
                <div id="step-vehicle-body" className="step">
                    <ProgressBar percentage="7%"></ProgressBar>
                    <header>
                        <h1>¿Cuál es el tipo de tu vehículo?</h1>
                    </header>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div id="vehicle-ping" className={this.isActive('vehicle_body', 'AUTOMOVIL', {'btn-icon-content': true})}
                                 onClick={this.continue.bind(null, 'AUTOMOVIL')}>
                                <span className="icon"><i className="cmuj-car"></i></span>
                                <span className="text">Automóvil</span>
                            </div>
                        </li>
                        <li>
                            <div className={this.isActive('vehicle_body', 'CAMIONETA', {'btn-icon-content': true})}
                                 onClick={this.continue.bind(null, 'CAMIONETA')}>
                                <span className="icon"><i className="cmuj-van"></i></span>
                                <span className="text">Camioneta</span>
                            </div>
                        </li>
                    </ul>
                    <br/>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div className={this.isActive('vehicle_body', 'MOTO', {'btn-icon-content': true})} onClick={this.continue.bind(null, 'MOTO')}>
                                <span className="icon"><i className="cmuj-motorcycle"></i></span>
                                <span className="text">Moto</span>
                            </div>
                        </li>
                        <li>
                            <div className={this.isActive('vehicle_body', 'PESADO', {'btn-icon-content': true})}
                                 onClick={this.continue.bind(null, 'PESADO')}>
                                <span className="icon"><i className="cmuj-truck"></i></span>
                                <span className="text">Pesado</span>
                            </div>
                        </li>
                        <li>
                            <div className={this.isActive('vehicle_body', 'BUS', {'btn-icon-content': true})}
                                 onClick={this.continue.bind(null, 'BUS')}>
                                <span className="icon"><i className="cmuj-bus"></i></span>
                                <span className="text">Bus</span>
                            </div>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
})

export default VehicleBody