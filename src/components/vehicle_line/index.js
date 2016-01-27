import React from 'react'
import Router from 'react-router'
import Reflux from 'reflux'
import LinesStore from '../../stores/LinesStore'
import Ux3Actions from '../../actions/Ux3Actions'
import Ux3Func from '../../services/Ux3Func'
import Proccess from '../loading/proccess'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let VehicleLine = React.createClass({
    mixins: [Reflux.connect(LinesStore, 'linestore'), Router.Navigation, EventTrackingMixin],

    componentWillMount() {
        Ux3Actions.getValueLines()
    },

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
            vehicle_line: Ux3Func.getValue('vehicle_line')
        });
    },

    continue(line_type){
        Ux3Func.saveValue('vehicle_line', line_type)
        this.transitionTo('vehicle_reference')
    },

    render() {
        if (this.state.linestore) {
            return (
                <section className="container-step pbgw-2x">
                    <NavigationControl/>
                    <div className="container">
                        <ProgressBar percentage="29%"></ProgressBar>
                        <div id="step-vehicle-line" className="step">
                            <header>
                                <h1>¿Cuál es la línea de tu vehículo?</h1>
                            </header>
                            <ul className="unstyled-list h-list">
                                {
                                    this.state.linestore.map((line) => {
                                        return (
                                            <li className="id-line" onClick={this.continue.bind(null, `${line.name}`)}>
                                                <span className={this.isActive('vehicle_line', `${line.name}`, {'btnuj': true})}>
                                                    <span className="text">{line.name}</span>
                                                </span>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
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