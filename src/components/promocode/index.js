import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import Ux3Services from '../../services/Ux3Services'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'
import store from 'store2'


let PromoCode = React.createClass({
    mixins: [React.addons.LinkedStateMixin, Router.Navigation, EventTrackingMixin],

    getInitialState() {
        return {
            has_code: 0,
            promocode: ''
        }
    },

    promocode_flag() {
        this.setState({has_code: 1})
    },

    validatePromocode() {
        Ux3Services.validatePromocode(this.state.promocode)
            .then((data) => {
                if (!data.error) {
                    this.setState({
                        load: false,
                        description: data.description,
                        conditions: data.conditions
                    })
                } else {
                    this.setState({load: true})
                }
            })
    },

    continueClick() {
        Ux3Func.loadData()
        Ux3Func.saveValue('promocode', this.state.promocode)
        Ux3Func.saveValue('userjourney_id', 'ux31')
        Ux3Func.saveValue('table', 'final')
        store.set('flag_not_dupplicate', JSON.stringify({value: false}))
        this.transitionTo('loading')
    },

    continue() {
        Ux3Func.loadData()
        Ux3Func.saveValue('userjourney_id', 'ux31')
        Ux3Func.saveValue('table', 'final')
        store.set('flag_not_dupplicate', JSON.stringify({value: false}))
        this.transitionTo('loading')
    },

    render () {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div id="step-promocode" className="step">
                    <ProgressBar percentage="90%"></ProgressBar>
                    <header>
                        <h1>¿Tienes un código promocional?</h1>
                    </header>
                    <ul className="unstyled-list h-list centered-v-list">
                        <li>
                            <div className="btnuj" onClick={this.promocode_flag}>
                                <span className="text">Si</span>
                            </div>
                        </li>
                        <li>
                            <div className="btnuj" onClick={this.continue}>
                                <span className="text">No</span>
                            </div>
                        </li>
                    </ul>
                    <br/>
                    {(() => {
                        if (this.state.has_code == 1) {
                            return (
                                <div className="form form-inline" style={{padding: '0', margin: '0'}}>
                                    <div className="form-group">
                                        <div className="row">
                                            <div className="col-xs-6">
                                                <input style={{textAlign: 'center'}}
                                                       className="form-control" type="text"
                                                       valueLink={this.linkState('promocode')}
                                                       placeholder="Código promocional"/>
                                            </div>
                                            <div className="col-xs-2">
                                                <a className="btn btn-info" onClick={this.validatePromocode}>
                                                    Consultar
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <br/>
                                    {(() => {
                                        if (this.state.load == true) {
                                            return (
                                                <div className="info-promocode">
                                                    <h1>Código promocial inválido</h1>
                                                </div>
                                            )
                                        } else if (this.state.load == false) {
                                            return (
                                                <div className="info-promocode">
                                                    <h1>¡Código promocional válido!</h1>

                                                    <p className="description"> {this.state.description}</p>

                                                    <p className="conditions"> {this.state.conditions}</p>
                                                </div>
                                            )
                                        }
                                    })()}
                                    <br/>
                                    <a className="btn btn-continue lg"
                                       onClick={this.continueClick}>Cotizar <i
                                        className="fa fa-chevron-right"></i></a>
                                </div>
                            )
                        }
                    })()}
                </div>
            </section>
        )
    }
})

export default PromoCode