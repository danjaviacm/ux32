import React from 'react'
import Router from 'react-router'
import Reflux from 'reflux'
import Proccess from '../loading/proccess'
import BrandsStore from '../../stores/BrandsStore'
import Ux3Func from '../../services/Ux3Func'
import Ux3Actions from '../../actions/Ux3Actions'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import {IMG} from '../../constants/AppConstants'
import $ from 'jquery'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

let VehicleBrand = React.createClass({
    //COMENT
    mixins: [Reflux.connect(BrandsStore, 'brandstore'), Router.Navigation, EventTrackingMixin],

    getInitialState() {
        return {
            more: false,
            mobil: false
        }
    },

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

    componentWillMount() {

        Ux3Actions.getValueBrands()

        $(window).resize(function(){
            if($(window).width() <= 768) {
                this.setState({mobil: true})
            } else {
                this.setState({mobil: false})
            }
        }.bind(this));

        if($(window).width() <= 768) {
            this.setState({mobil: true})
        }
    },
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
            vehicle_brand: Ux3Func.getValue('vehicle_brand')
        });
    },

    continue(brand_type) {
        Ux3Func.saveValue('vehicle_brand', brand_type)
        this.transitionTo('vehicle_model')
    },

    order(a, b) {
        return b.opportunities_count - a.opportunities_count;
    },

    showMore() {
        this.setState({more: true})
    },

    render() {
        if (this.state.brandstore) {
            return (
                <section className="container-step pbgw-2x">
                    <NavigationControl/>

                    <div id="step-vehicle-brand" className="step">
                        <ProgressBar percentage="14%"></ProgressBar>
                        <header>
                            <h1>¿Cuál es la marca de tu vehículo?</h1>
                        </header>
                        <div className="container">
                            {(() => {
                                if (this.state.more == false && this.state.mobil == false) {
                                    return (
                                        <div className="brands">
                                            {this.state.brandstore.sort(this.order).slice(0, 14).map((brand) => {
                                                let img = `${IMG}${brand.image}`
                                                return (
                                                    <div
                                                        className={this.isActive('vehicle_brand', `${brand.name}`, {'brand': true})}
                                                        onClick={this.continue.bind(null,`${brand.name}`)}>
                                                        <div className="container-img">
                                                            <img src={img} className="img-responsive"/>
                                                        </div>
                                                    </div>
                                                )
                                            })}
                                            <div className="more hidden-xs" onClick={this.showMore}>
                                                Más <br/>
                                                marcas <br/>
                                                <span className="span">+</span>
                                            </div>
                                        </div>
                                    )
                                } else {
                                    return (
                                        <div className="list-brands">
                                            <div className="letter">
                                                <ul className="unstyled-list v-list">
                                                    {this.state.brandstore.map((brand) => {
                                                        return (
                                                            <li className={this.isActive('vehicle_brand', `${brand.name}`, {'brand': true})} onClick={this.continue.bind(null,`${brand.name}`)}>
                                                            <span className="btnuj">
                                                                <span className="text">{brand.name }</span>
                                                            </span>
                                                            </li>

                                                        )
                                                    })}
                                                </ul>
                                            </div>
                                        </div>
                                    )
                                }
                            })()}
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

export default VehicleBrand