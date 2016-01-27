import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let ClaimHistory = React.createClass ({
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
            insurance_claim_history: Ux3Func.getValue('insurance_claim_history')
        });
    },
    componentWillMount() {
        document.querySelector('.rastreator').style.display = 'block';
        document.querySelector('.uj-express').style.display = 'block';
    },

    continue(option) {
        Ux3Func.loadData()
        Ux3Func.saveValue('insurance_claim_history', option)
        this.transitionTo('when_need_policy')
    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>
                <div id="step-claim-history" className="step">
                    <ProgressBar percentage="90%"></ProgressBar>
                    <header>
                        <h1>¿Cuántos años tienes sin reclamaciones de seguro?</h1>
                    </header>
                    <ul className="unstyled-list v-list">

                        <li>
                <span className={this.isActive('insurance_claim_history', 0, {'btnuj': true})}  onClick={this.continue.bind(null, 0)}>
                    <span className="text">Menos de 1 año</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('insurance_claim_history', 1, {'btnuj': true})}  onClick={this.continue.bind(null, 1)}>
                    <span className="text">1 año</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('insurance_claim_history', 2, {'btnuj': true})}  onClick={this.continue.bind(null, 2)}>
                    <span className="text">2 años</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('insurance_claim_history', 3, {'btnuj': true})}  onClick={this.continue.bind(null, 3)}>
                    <span className="text">3 años o más</span>
                </span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
})

export default ClaimHistory
