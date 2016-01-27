import React from 'react'
import Router from 'react-router'
import InputCompletion from 'react-input-completion'
import Ux3Func from '../../services/Ux3Func'
import cities from '../../services/Cities'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import $ from 'jquery'
import {OverlayTrigger, Tooltip} from 'react-bootstrap'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

const tooltip = {
    lm: <Tooltip>Las aseguradoras necesitan saber cual es la ciudad en donde generalmente usas el vehículo. Sin embargo,
        tu vehículo estará asegurado en todo el territorio nacional en caso de que realices viajes a otras
        ciudades.</Tooltip>,
}

let VehicleCity = React.createClass({
    mixins: [Router.Navigation, EventTrackingMixin, React.addons.LinkedStateMixin],

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
            vehicle_city: Ux3Func.getValue('vehicle_city'),
        });
    },

    continue(city_type) {
        Ux3Func.loadData()
        Ux3Func.saveValue('vehicle_city', city_type)
        this.transitionTo('identification_type')
    },

    continueWithCity() {
        let city = document.querySelector('#city').value
        let cities_2 = cities
        let city_temp = cities_2.indexOf(city)

        if (city.length == 0) {
            $('.block-error-0').show()
            setTimeout(function () {
                $('.block-error-0').fadeOut( "slow")
            }, 3000)
            return false;
        } else if(city_temp == -1) {
            $('.block-error-valid').show()
            setTimeout(function () {
                $('.block-error-valid').fadeOut( "slow")
            }, 3000)
            return false;
        } else {
            Ux3Func.loadData()
            Ux3Func.saveValue('vehicle_city', city)
            this.transitionTo('identification_type')
        }
    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div className="container">
                    <ProgressBar percentage="64%"></ProgressBar>

                    <OverlayTrigger placement='top' overlay={tooltip.lm}>

                        <div id="step-vehicle-city" className="step">
                            <header>
                                <h1>¿En qué ciudad circula tu vehículo?</h1>
                            </header>
                            <ul className="unstyled-list h-list">
                                <li>
                    <span className={this.isActive('vehicle_city', 'Bogotá, Bogota D.C., Colombia', {'btnuj': true})}
                          onClick={this.continue.bind(null, 'Bogotá, Bogota D.C., Colombia')}>
                        <span className="text">Bogotá</span>
                    </span>
                                </li>
                                <li>
                    <span onClick={this.continue.bind(null, 'Medellín, Antioquia, Colombia')}
                          className={this.isActive('vehicle_city', 'Medellín, Antioquia, Colombia', {'btnuj': true})}>
                        <span className="text">Medellín</span>
                    </span>
                                </li>
                            </ul>
                            <ul className="unstyled-list h-list">
                                <li>
                    <span onClick={this.continue.bind(null, 'Cali, Valle del Cauca, Colombia')}
                          className={this.isActive('vehicle_city', 'Cali, Valle del Cauca, Colombia', {'btnuj': true})}>
                        <span className="text">Cali</span>
                    </span>
                                </li>
                                <li>
                    <span onClick={this.continue.bind(null, 'Barranquilla, Atlántico, Colombia')}
                          className={this.isActive('vehicle_city', 'Barranquilla, Atlántico, Colombia', {'btnuj': true})}>
                        <span className="text">Barranquilla</span>
                    </span>
                                </li>
                            </ul>
                            <h2>¿Otra?</h2>

                            <div className="form-group">
                                <div className="row">
                                    <div className="col-xs-6 col-xs-offset-3">
                                        <InputCompletion options={cities} name="cities_2" useNative="false">
                                            <input id="city" type="text" placeholder="Escribe el nombre de la ciudad..."
                                                   className="form-control form-control-small"/>
                                        </InputCompletion>
                                        <div className="block-error block-error-0">Debes ingresar la ciudad de circulación del vehiculo. <i
                                            className="fa fa-exclamation-circle"></i><br/></div>
                                        <div className="block-error block-error-valid">Debes ingresar una ciudad valida, por ejemplo (Bogotá, Bogota D.C., Colombia). <i
                                            className="fa fa-exclamation-circle"></i><br/></div>
                                    </div>
                                </div>
                                <span className="small help-block">Escribe las tres primeras letras donde circula tu auto y elige la opción.</span>
                                <button className="btn btn-continue lg" onClick={this.continueWithCity}>
                                    ¡Continuar! <i className="fa fa-chevron-right"></i></button>
                            </div>
                        </div>
                    </OverlayTrigger>
                </div>
            </section>
        )
    }
})

export default VehicleCity