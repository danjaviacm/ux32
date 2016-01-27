import React from 'react'
import Router from 'react-router'
import Reflux from 'reflux'
import ModelsStore from '../../stores/ModelsStore'
import Ux3Actions from '../../actions/Ux3Actions'
import Ux3Func from '../../services/Ux3Func'
import Proccess from '../loading/proccess'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let VehicleLine = React.createClass({
    mixins: [Reflux.connect(ModelsStore, 'modelstore'), Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],

    componentWillMount() {
        Ux3Actions.getValueModels()
    },
    componentDidMount() {
        this.setState({
            vehicle_model: Ux3Func.getValue('vehicle_model')
        });
    },

    continue() {
        let model = document.querySelector('#models').value
        Ux3Func.saveValue('vehicle_model', model)
        this.transitionTo('vehicle_line')
    },

    render() {
        if (this.state.modelstore) {
            return (
                <section className="container-step pbgw-2x">
                    <NavigationControl/>
                    <div id="step-vehicle-model" className="step">
                        <ProgressBar percentage="22%"></ProgressBar>
                        <div className="container">
                            <header>
                                <h1>¿Cuál es el modelo de tu vehículo?</h1>
                            </header>
                            <br/>
                            <span className="select-wrapper">
                                <select id="models" style={{width: 300 + 'px'}} name="_model" valueLink={this.linkState('vehicle_model')}>
                                    {
                                        this.state.modelstore.reverse().map((model) => {
                                            return (
                                                <option>{model}</option>
                                            )
                                        })
                                    }
                                </select>
                            </span>
                            <br/><br/>
                        <span className="btn btn-continue lg" onClick={this.continue}>Continuar <i
                            className="fa fa-chevron-right"></i></span>
                        </div>
                    </div>
                </section>
            )
        } else {
            return (
                <Proccess />
            )
        }
    }
})

export default VehicleLine
