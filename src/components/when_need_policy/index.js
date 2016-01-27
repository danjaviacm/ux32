import React from 'react'
import Router from 'react-router'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import Ux3Func from '../../services/Ux3Func'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'


let WhenNeedPolicy = React.createClass ({
    mixins: [Router.Navigation, EventTrackingMixin],
    isActive(key, valueOf, classes) {
        var cx = React.addons.classSet;

        if(Ux3Func.getValue(key) == valueOf){
            classes['active'] = true;
        }
        var classes = cx(classes);
        return classes
    },
    getInitalState() {
        return {
            vehicle_brand: '',
            vehicle_line: '',
            vehicel_model: ''
        }
    },
    componentWillMount() {
        let data = Ux3Func.loadData()
        this.setState({
            vehicle_brand: data.vehicle_brand,
            vehicle_line: data.vehicle_line,
            vehicel_model: data.vehicel_model
        })
    },
    componentDidMount() {
        this.setState({
            promocode: Ux3Func.getValue('promocode')
        });
    },
    continue(when_need_policy) {
        Ux3Func.saveValue('when_need_policy', when_need_policy)
        this.transitionTo('promocode')
    },
    render() {
        let tittle = "¿Cuándo necesitarías la póliza?";
        if (this.state.vehicle_line){
            tittle = "¿Cuándo necesitarías la póliza para tu  " + this.state.vehicle_brand + " - " + this.state.vehicle_line +"  / " + this.state.vehicle_model + " ?"
        }
        return(
            <section className="container-step pbgw-2x">
                <NavigationControl/>
                <div id="step-when-need-policy" className="step">
                    <ProgressBar percentage="95%"></ProgressBar>
                    <header>
                        <h1>{tittle}</h1>
                    </header>
                    <ul className="unstyled-list v-list">
                        <li>
                <span className={this.isActive('when_need_policy', 'inmediately', {'btnuj': true})} onClick={this.continue.bind(null, 'inmediately')} ng-class="{'active':sameValue(when_need_policy, 'inmediately')}" ng-click="selectOption('inmediately')">
                    <span className="text">Inmediatamente</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('when_need_policy', 'in_a_week_or_less', {'btnuj': true})} onClick={this.continue.bind(null, 'in_a_week_or_less')} ng-class="{'active':sameValue(when_need_policy, 'in_a_week_or_less')}" ng-click="selectOption('in_a_week_or_less')">
                    <span className="text">En una semana o menos</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('when_need_policy', 'between_one_and_two_weeks', {'btnuj': true})} onClick={this.continue.bind(null, 'between_one_and_two_weeks')} ng-class="{'active':sameValue(when_need_policy, 'between_one_and_two_weeks')}" ng-click="selectOption('between_one_and_two_weeks')">
                    <span className="text">Entre 1 y 2 semanas</span>
                </span>
                        </li>
                        <li>
                <span className={this.isActive('when_need_policy', 'in_a_month_or_more', {'btnuj': true})} onClick={this.continue.bind(null, 'in_a_month_or_more')} ng-class="{'active':sameValue(when_need_policy, 'in_a_month_or_more')}" ng-click="selectOption('in_a_month_or_more')">
                    <span className="text">En un mes o más</span>
                </span>
                        </li>
                    </ul>
                </div>
            </section>
        )
    }
})

export default WhenNeedPolicy