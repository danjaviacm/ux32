import React from 'react'
import { default as Router, Link } from 'react-router'
import NavigationControl from '../navigation_control'
import Ux3Func from '../../services/Ux3Func'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'
import store from 'store2'

let VerifyVehicle = React.createClass({
    mixins: [Router.Navigation, EventTrackingMixin],

    style: {
        fontFamily: 'Helvetica',
        fontSize: '25px',
        fontWeight: 700,
        display: 'block',
        marginTop: '20px',
        marginBottom: '20px'
    },

    componentWillMount() {
        let data = JSON.parse(store.get('data-car'))
        this.setState({data: data})
    },

    isMyVehicle() {
        store.set('dates-vehicle', JSON.stringify({one: 'true'}))
        let data = JSON.parse(store.get('data-car'))
        Ux3Func.saveValue('code', data.code)
        this.transitionTo('vehicle_zero_km')
    },

    render() {
        return (
            <div className="container-step pbgw-2x">
                <NavigationControl/>
                <div id="step-vehicle-body" className="step">
                    <header>
                        <h1>¿Es este tu vehículo?</h1>
                    </header>
                    <span style={this.style}>{this.state.data.brand} - {this.state.data.line} {this.state.data.reference}/{this.state.data.year}</span>
                    <Link to="vehicle_body" className="btn btn-orange">Ese no es mi vehículo</Link>
                    <div className="visible-xs" style={{ marginTop: '10px' }}></div>
                    <span className="hidden-xs">&nbsp;&nbsp;</span>
                    <button className="btn btn-success" onClick={this.isMyVehicle}>Sí, ese es mi vehículo</button>
                </div>
            </div>
        )
    }
})

export default VerifyVehicle