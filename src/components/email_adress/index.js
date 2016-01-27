import React from 'react'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import $ from 'jquery'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'


let EmailAdress = React.createClass({
    mixins: [Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],
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
            current_situation: Ux3Func.getValue('current_situation'),
            email: Ux3Func.getValue('email_address'),
            mobile_phone: Ux3Func.getValue('mobile_phone'),
            phone: Ux3Func.getValue('phone'),
            office_phone: Ux3Func.getValue('office_phone')
        });

        $("#mobile_phone").keypress(function(key) {
            if(key.charCode < 48 || key.charCode > 57) return false;
        });

        $("#phone").keypress(function(key) {
            if(key.charCode < 48 || key.charCode > 57) return false;
        });

        $("#office_phone").keypress(function(key) {
            if(key.charCode < 48 || key.charCode > 57) return false;
        });

    },

    getInitialState() {
        return {
            email: '',
            phone: '',
            mobile_phone: '',
            office_phone: ''
        }
    },

    continue(situation_type) {
        let email = this.state.email
        let expr = /^([a-zA-Z0-9+_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (email == undefined || !expr.test(email)) {
            $('.error-email').show()
            setTimeout(function() {
                $('.error-email').fadeOut( "slow")
            }, 3000)
            return false;
        }

        let errorMobile
        let errorPhone
        let errorOffice
        let errorEmpty

        let mobile_phone = $('#mobile_phone').val()
        let phone = $('#phone').val()
        let office_phone = $('#office_phone').val()

        if (mobile_phone == ""  && phone == "" && office_phone == "") {
            errorEmpty = true;
            $('.error_empty').show()
            setTimeout(function() {
                $('.error_empty').fadeOut( "slow")
            }, 3000)
        } else {
            errorEmpty = false;
            $('.error_empty').hide()
        }

        if (mobile_phone.length > 0 && mobile_phone.length < 10) {
            errorMobile = true;
            $('.error-mobile').show()
            setTimeout(function() {
                $('.error-mobile').fadeOut( "slow")
            }, 3000)
            return false;
        } else {
            errorMobile = false;
            $('.error-mobile').hide()
        }

        if (phone.length > 0 && phone.length < 7) {
            errorPhone = true;
            $('.error-phone').show()
            setTimeout(function() {
                $('.error-phone').fadeOut( "slow")
            }, 3000)
            return false;
        } else {
            errorPhone = false;
            $('.error-phone').hide()
        }

        if (office_phone.length > 0 && office_phone.length < 7) {
            errorOffice = true;
            $('.error-office').show()
            setTimeout(function() {
                $('.error-office').fadeOut( "slow")
            }, 3000)
            return false;
        } else {
            errorOffice = false;
            $('.error-office').hide()
        }

        if (email.length > 0 && errorEmpty == false && (errorMobile == false || errorPhone == false || errorOffice == false)) {
            //dummy
            Ux3Func.loadData()
            Ux3Func.saveValue('current_situation', situation_type)
            Ux3Func.saveValue('email_address', this.state.email)
            Ux3Func.saveValue('mobile_phone', this.state.mobile_phone)

            /*
             * Alternatives
             * */
            Ux3Func.saveValue('phone', this.state.phone)
            Ux3Func.saveValue('office_phone', this.state.office_phone)

            if (situation_type === 'insurance_expired_expire_soon') {
                this.transitionTo('claim_history')
            } else if (situation_type === 'curiosity_quote') {
                this.transitionTo('promocode')
            } else {
                this.transitionTo('when_need_policy')
            }
        } else {
            return false;
        }

    },
    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div id="step-email-address" className="step">
                    <ProgressBar percentage="85%"></ProgressBar>
                    <header>
                        <h1>Detalles de contacto</h1>
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <table width="100%">
                                    <tr>
                                        <td className="label">E-mail*</td>
                                        <td>
                                            <input id="email" className="form-control" name="email" type="text"
                                                   valueLink={this.linkState('email')}/>

                                            <div className="block-error error-email">
                                                Debes ingresar un email válido
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Celular*</td>
                                        <td>
                                            <input id="mobile_phone" className="form-control" type="text" maxLength="10"
                                                   valueLink={this.linkState('mobile_phone')}/>
                                            <div className="block-error error-mobile">
                                                Debes ingresar un número de 10 digitos para celular.
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Casa</td>
                                        <td>
                                            <input id="phone" className="form-control" type="text" maxLength="7"
                                                   valueLink={this.linkState('phone')}/>
                                            <div className="block-error error-phone">
                                                Debes ingresar un número de 7 digitos para celular.
                                            </div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Oficina</td>
                                        <td>
                                            <input id="office_phone" className="form-control" type="text" maxLength="7"
                                                   valueLink={this.linkState('office_phone')}/>
                                            <div className="block-error error-office">
                                                Debes ingresar un número de 7 digitos para celular.
                                            </div>

                                            <div className="block-error error_empty">
                                                *Recuerda que debes ingresar al menos un número de contacto.
                                            </div>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <h2>¿Cuál describe mejor tu situación actual?</h2>
                        <ul className="unstyled-list block-list h-list">
                            <li>
                        <span
                            className={this.isActive('current_situation', 'insurance_expired_expire_soon', {'btnuj': true})}
                            onClick={this.continue.bind(null, 'insurance_expired_expire_soon')}>
                            <span className="text">Mi seguro venció <br/> o <br/> vencerá pronto</span>
                        </span>
                            </li>
                            <li>
                        <span className={this.isActive('current_situation', 'curiosity_quote', {'btnuj': true})}
                              onClick={this.continue.bind(null, 'curiosity_quote')}>
                            <span className="text">Sólo cotizo <br/> por <br/> curiosidad</span>
                        </span>
                            </li>
                            <li>
                        <span className={this.isActive('current_situation', 'buying_car_loan', {'btnuj': true})}
                              onClick={this.continue.bind(null, 'buying_car_loan')}>
                            <span className="text">Estoy comprando <br/> vehículo con un <br/> préstamo</span>
                        </span>
                            </li>
                        </ul>
                        <br/>
                        <ul className="unstyled-list block-list h-list">
                            <li>
                        <span className={this.isActive('current_situation', 'buying_car_without_loan', {'btnuj': true})}
                              onClick={this.continue.bind(null, 'buying_car_without_loan')}>
                            <span className="text">Estoy comprando <br/> vehículo <br/> sin préstamo</span>
                        </span>
                            </li>
                            <li>
                        <span
                            className={this.isActive('current_situation', 'my_vehicle_is_not_insured', {'btnuj': true})}
                            onClick={this.continue.bind(null, 'my_vehicle_is_not_insured')}>
                            <span
                                className="text">Mi vehículo no está <br/>asegurado y deseo <br/>conocer opciones</span>
                        </span>
                            </li>

                        </ul>
                    </div>
                </div>
            </section>
        )
    }
})

export default EmailAdress