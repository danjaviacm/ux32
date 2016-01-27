import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'
import store from 'store2'

let VehicleServiceType = React.createClass ({
    mixins: [Router.Navigation, EventTrackingMixin],
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
            vehicle_service_type: Ux3Func.getValue('vehicle_service_type')
        });
    },

    continue(service_type) {
        Ux3Func.loadData()
        Ux3Func.saveValue('vehicle_service_type', service_type)
        this.transitionTo('vehicle_city')
    },

    render() {
        
        let vehicle_body_validation = JSON.parse( store( 'data-express' ) ).vehicle_body
        
        return(
            <section className="container-step pbgw-2x">
                <NavigationControl/>
                <div id="step-vehicle-body" className="step">
                    <ProgressBar percentage="57%"></ProgressBar>
                    <header>
                        <h1>¿Qué tipo de vehículo tienes?</h1>
                    </header>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div className={this.isActive('vehicle_service_type', 'particular', {'btn-icon-content': true})} onClick={this.continue.bind(null, 'particular')}>
                                <span ng-if="vehicle_body != 'MOTO'" className="icon"><i className="cmuj-car"></i></span>
                                <span className="text">Particular</span>
                            </div>
                        </li>

                        { vehicle_body_validation != 'MOTO' ? <li ng-if="vehicle_body != 'MOTO'">
                            <div className={this.isActive('vehicle_service_type', 'publico', {'btn-icon-content': true})} onClick={this.continue.bind(null, 'publico')}>
                                <span className="icon"><i className="cmuj-taxi"></i></span>
                                <span className="text">Público</span>
                            </div>
                        </li> : null }

                        { vehicle_body_validation != 'MOTO' ? <li ng-if="vehicle_body != 'MOTO'">
                            <div className={this.isActive('vehicle_service_type', 'publico-especial', {'btn-icon-content': true})} onClick={this.continue.bind(null, 'publico-especial')}>
                                <span className="icon"><i className="cmuj-taxi"></i></span>
                                <span className="text">Público especial</span>
                            </div>
                        </li> : null }
                    </ul>
                </div>
            </section>
        )
    }
})

export default VehicleServiceType