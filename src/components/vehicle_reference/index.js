import React from 'react'
import Router from 'react-router'
import Reflux from 'reflux'
import ReferencesStore from '../../stores/ReferencesStore'
import Ux3Actions from '../../actions/Ux3Actions'
import Ux3Func from '../../services/Ux3Func'
import Proccess from '../loading/proccess'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let VehicleReference = React.createClass({
    mixins: [Reflux.connect(ReferencesStore, 'referencestore'), Router.Navigation, EventTrackingMixin],

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
            vehicle_reference: Ux3Func.getValue('vehicle_reference')
        });
    },

    componentWillMount() {
        Ux3Actions.getValueReferences()
    },

    continue(reference_type) {
        Ux3Func.saveValue('vehicle_reference', reference_type)
        this.transitionTo('vehicle_reference_complete')
    },

    render() {
        if (this.state.referencestore) {
            return (
                <section className="container-step pbgw-2x">
                    <NavigationControl/>
                    <div className="container">
                        <ProgressBar percentage="37%"></ProgressBar>
                        <div id="step-vehicle-reference" className="step">
                            <header>
                                <h1>¿Cuál es la referencia de tu vehículo?</h1>
                            </header>
                            <ul className="unstyled-list h-list">
                                {
                                    this.state.referencestore.map((reference) => {
                                        return (
                                            <li onClick={this.continue.bind(null, `${reference.name}`)}>
                                                <span className={this.isActive('vehicle_reference', `${reference.name}`, {'btnuj': true})}>
                                                    <span className="text">{reference.name}</span>
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

export default VehicleReference