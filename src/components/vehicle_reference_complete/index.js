import React from 'react'
import Router from 'react-router'
import Reflux from 'reflux'
import ReferencesCompleteStore from '../../stores/ReferencesCompleteStore'
import Ux3Actions from '../../actions/Ux3Actions'
import Ux3Func from '../../services/Ux3Func'
import Proccess from '../loading/proccess'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'


let VehicleReferenceComplete = React.createClass({
    mixins: [Reflux.connect(ReferencesCompleteStore, 'referencecompletestore'), Router.Navigation, EventTrackingMixin],

    componentWillMount() {
        Ux3Actions.getValueReferencesComplete()
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
            fasecolda_code: Ux3Func.getValue('fasecolda_code'),
            table: Ux3Func.getValue('table')
        });
    },

    continue(reference_type) {
        Ux3Func.saveValue('fasecolda_code', reference_type)
        Ux3Func.saveValue('table', `model_preliminar`)
        this.transitionTo('vehicle_zero_km')
    },

    render() {
        if (this.state.referencecompletestore) {
            return (
                <section className="container-step pbgw-2x">
                    <NavigationControl/>
                    <div className="container">
                        <ProgressBar percentage="43%"></ProgressBar>
                        <div id="step-vehicle-reference" className="step">
                            <header>
                                <h1>Referencia completa</h1>
                            </header>
                            <ul className="unstyled-list h-list">
                                {
                                    this.state.referencecompletestore.map((referencecomplete) => {
                                        return (
                                            <li onClick={this.continue.bind(null, `${referencecomplete.code}`)}>
                                                <span className={this.isActive('fasecolda_code', `${referencecomplete.code}`, {'btnuj': true})}>
                                                    <span className="text">{referencecomplete.name}</span>
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

export default VehicleReferenceComplete