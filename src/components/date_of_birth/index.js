import React from 'react/addons'
import ReactMixin from 'react-mixin'
import Router from 'react-router'
import Ux3Func from '../../services/Ux3Func'
import NavigationControl from '../navigation_control'
import ProgressBar from '../progress_bar'
import InputCompletion from 'react-input-completion'
import $ from 'jquery'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'

const date = new Date()

let DateOfBirth = React.createClass({
    mixins: [Router.Navigation, React.addons.LinkedStateMixin, EventTrackingMixin],
    contextTypes: {
        month: React.PropTypes.array,
        year: React.PropTypes.object
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
        let date_of_birth = Ux3Func.getValue('date_of_birth');
        let year = '';
        let month = '';
        let day = '';
        if (date_of_birth) {
            year = date_of_birth.split("-")[0];
            month = this.state.months[date_of_birth.split("-")[1]].label;
            day = date_of_birth.split("-")[2];
        }
        this.setState({
            first_name: Ux3Func.getValue('first_name'),
            last_name: Ux3Func.getValue('last_name'),
            contact_person_last_name: Ux3Func.getValue('contact_person_last_name'),
            contact_person_first_name: Ux3Func.getValue('contact_person_first_name'),
            occupation: Ux3Func.getValue('occupation'),
            sex: Ux3Func.getValue('sex'),
            year: year,
            month: month,
            day: day
        });
    },

    continue() {
        let name = $('#name').val()
        let last = $('#last').val()
        let sex = $('#sex').val()

        let year = $('#year').val()
        let month = $('#month').val()
        let day = $('#day').val()

        if (name.length == 0) {
            $('.block-error-name').show()
            setTimeout(function () {
                $('.block-error-name').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            $('.block-error-name').fadeOut("slow")
        }

        if (last.length == 0) {
            $('.block-error-last').show()
            setTimeout(function () {
                $('.block-error-last').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            $('.block-error-last').fadeOut("slow")
        }

        let ocup = $('#occupation').val()
        let errorOcu;

        if (ocup == 'Seleccionar') {
            errorOcu = true;
            $('.block-error-ocupation').show()
            setTimeout(function () {
                $('.block-error-ocupation').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            errorOcu = false;
            $('.block-error-ocupation').fadeOut("slow")
        }

        let errorFecha;
        if (year == 'Año' || month == 'Mes' || day == 'Dia') {
            errorFecha = true;
            $('.block-error-fecha').show()
            setTimeout(function () {
                $('.block-error-fecha').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            errorFecha = false;
            $('.block-error-fecha').fadeOut("slow")
        }

        if (sex.length > 1) {
            $('.block-error-sex').show()
            setTimeout(function () {
                $('.block-error-sex').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            $('.block-error-sex').fadeOut("slow")
        }

        if (name.length > 0 && last.length > 0 && sex.length == 1 && errorFecha == false && errorOcu == false) {
            Ux3Func.loadData()
            Ux3Func.saveValue('sex', this.state.sex);
            Ux3Func.saveValue('first_name', this.state.first_name);
            Ux3Func.saveValue('last_name', this.state.last_name);
            Ux3Func.saveValue('occupation', this.state.occupation);
            Ux3Func.saveValue('date_of_birth', this.state.year + "-" + this.getKeyMonth(this.state.month) + "-" + this.state.day);
            this.transitionTo('email_adress');
        } else {
            return false;
        }
    },

    continueNit() {
        let name = $('#name').val()
        let year = $('#year').val()
        let month = $('#month').val()
        let day = $('#day').val()

        if (name.length == 0) {
            $('.block-error-name').show()
            setTimeout(function () {
                $('.block-error-name').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            $('.block-error-name').fadeOut("slow")
        }

        let ocup = $('#occupation').val()
        let errorOcu;

        if (ocup == 'Seleccionar') {
            errorOcu = true;
            $('.block-error-ocupation').show()
            setTimeout(function () {
                $('.block-error-ocupation').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            errorOcu = false;
            $('.block-error-ocupation').fadeOut("slow")
        }

        let errorFecha;
        if (year == 'Año' || month == 'Mes' || day == 'Dia') {
            errorFecha = true;
            $('.block-error-fecha').show()
            setTimeout(function () {
                $('.block-error-fecha').fadeOut("slow")
            }, 3000)
            return false;
        } else {
            errorFecha = false;
            $('.block-error-fecha').fadeOut("slow")
        }

        if (name.length > 0 && errorFecha == false && errorOcu == false) {
            Ux3Func.loadData()
            Ux3Func.saveValue('first_name', this.state.first_name);
            Ux3Func.saveValue('contact_person_last_name', this.state.contact_person_last_name);
            Ux3Func.saveValue('contact_person_first_name', this.state.contact_person_first_name);
            Ux3Func.saveValue('occupation', this.state.occupation);
            Ux3Func.saveValue('sex', 'M');
            Ux3Func.saveValue('date_of_birth', this.state.year + "-" + this.getKeyMonth(this.state.month) + "-" + this.state.day);
            this.transitionTo('email_adress');
        } else {
            return false;
        }
    },

    getInitialState() {
        return {
            months: [
                {key: 0, label: 'Mes'},
                {key: 1, label: 'Enero'},
                {key: 2, label: 'Febrero'},
                {key: 3, label: 'Marzo'},
                {key: 4, label: 'Abril'},
                {key: 5, label: 'Mayo'},
                {key: 6, label: 'Junio'},
                {key: 7, label: 'Julio'},
                {key: 8, label: 'Agosto'},
                {key: 9, label: 'Septiembre'},
                {key: 10, label: 'Octubre'},
                {key: 11, label: 'Noviembre'},
                {key: 12, label: 'Diciembre'}
            ],

            options: [
                {value: 10, label: 'Ten'},
                {value: 11, label: 'Eleven'},
                {value: 12, label: 'Twelve'},
                {value: 23, label: 'Twenty-three'},
                {value: 24, label: 'Twenty-four'}
            ],

            year: '',
            month: '',
            day: '',
            years: [],
            days: []
        }
    },

    getKeyMonth(month) {
        let r = 0;
        this.state.months.map(function (obj, index) {
            if (month == obj.label) {
                r = obj.key;
            }
        });
        return r;
    },

    componentDidUpdate(prevProps, prevState){
        if (this.state.year != prevState.year || this.state.month != prevState.month) {
            let month = this.getKeyMonth(this.state.month);
            let year = this.state.year;

            let monthStart = new Date(year, month, 1);
            let monthEnd = new Date(year, month + 1, 1);
            let monthLength = (monthEnd - monthStart) / (1000 * 60 * 60 * 24)
            let days = [];
            for (var i = 1; i < monthLength + 1; i++) {
                days.push(i);
            }
            this.setState({days: days});
        }
    },

    componentWillMount() {

        let data = Ux3Func.loadData()
        let max_year
        let min_year

        if (data.identification_type == 'nit') {
            this.setState({nit: 'true'})
            max_year = date.getFullYear()
            min_year = date.getFullYear() - 40
        } else {
            this.setState({nit: 'false'})
            max_year = date.getFullYear() - 18
            min_year = max_year - 51
        }

        let all_values = []
        for (let i = min_year; i <= max_year; i++) {
            all_values.push(i)
        }
        //all_values.push('Año')
        this.setState({years: all_values})
    },

    reverse(a, b) {
        return b - a;
    },

    render() {
        return (
            <section className="container-step pbgw-2x">
                <NavigationControl/>

                <div id="step-date-of-birth" className="step">
                    <ProgressBar percentage="79%"></ProgressBar>
                    <header>
                        {(() => {
                            if (this.state.nit == 'true') {
                                return (
                                    <h1>Datos empresa</h1>
                                )
                            } else {
                                return (
                                    <h1>Datos personales</h1>
                                )
                            }
                        })()}
                    </header>
                    <div className="container">
                        <div className="row">
                            <div className="col-xs-12 col-sm-8 col-sm-offset-2 col-md-6 col-md-offset-3">
                                <table width="100%">
                                    <tr>
                                        <td className="label">
                                            {(() => {
                                                if (this.state.nit == 'true') {
                                                    return (
                                                        <span>Razón social</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span>Nombre </span>
                                                    )
                                                }
                                            })()}
                                        </td>
                                        <td>
                                            <input id="name" width="200px" className="form-control" type="text"
                                                   valueLink={this.linkState('first_name')}/>

                                            <div className="block-error block-error-name">Ingresa tu nombre <i
                                                className="fa fa-exclamation-circle"></i></div>
                                        </td>
                                    </tr>
                                    {(() => {
                                        if (this.state.nit == 'true') {
                                            return (
                                                <tr>
                                                    <td className="label">Nombre del contacto</td>
                                                    <td>
                                                        <input id="last" width="200px" className="form-control"
                                                               type="text"
                                                               valueLink={this.linkState('contact_person_first_name')}/>

                                                        <div
                                                            className="block-error block-error-last">Ingresa Nombre <i
                                                                className="fa fa-exclamation-circle"></i></div>
                                                    </td>
                                                </tr>
                                            )
                                        } else {
                                            return (
                                                <tr>
                                                    <td className="label">Apellido</td>
                                                    <td>
                                                        <input id="last" width="200px" className="form-control"
                                                               type="text"
                                                               valueLink={this.linkState('last_name')}/>

                                                        <div
                                                            className="block-error block-error-last">Ingresa tu
                                                            apellido <i
                                                                className="fa fa-exclamation-circle"></i></div>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })()}
                                    {(() => {
                                        if (this.state.nit == 'true') {
                                            return (
                                                <tr>
                                                    <td className="label">Apellido del contacto</td>
                                                    <td>
                                                        <input id="last" width="200px" className="form-control"
                                                               type="text"
                                                               valueLink={this.linkState('contact_person_last_name')}/>

                                                        <div
                                                            className="block-error block-error-last">Ingresa Apellido <i
                                                            className="fa fa-exclamation-circle"></i></div>
                                                    </td>
                                                </tr>
                                            )
                                        } else {
                                            return (
                                                null
                                            )
                                        }
                                    })()}
                                    <tr>
                                        <td className="label">Ocupación</td>
                                        <td className="text-left">
                                            <span className="mar select-wrapper">
                                                <select name="occupation" id="occupation" valueLink={this.linkState('occupation')}>
                                                    <option value="Seleccionar">Seleccionar</option>
                                                    <option value="Empleado">Empleado(a)</option>
                                                    <option value="Pensionado">Pensionado(a)</option>
                                                    <option value="Estudiante">Estudiante</option>
                                                    <option value="Independiente">Independiente</option>
                                                    <option value="Persona Juridica">Persona Juridica</option>
                                                </select>
                                            </span>

                                            <div className="block-error block-error-ocupation">Ingresa tu ocupacion
                                                <i
                                                    className="fa fa-exclamation-circle"></i></div>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td className="label">Fecha de <br/>
                                            {(() => {
                                                if (this.state.nit == 'true') {
                                                    return (
                                                        <span>creación</span>
                                                    )
                                                } else {
                                                    return (
                                                        <span>nacimiento</span>
                                                    )
                                                }
                                            })()}
                                        </td>
                                        <td className="text-left">
                                    <span className="mar select-wrapper">
                                        <select name="years" id="year" valueLink={this.linkState('year')}>
                                            <option>Año</option>
                                            {
                                                this.state.years.sort(this.reverse).map((year) => {
                                                    return (
                                                        <option>{year}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </span>
                                    <span className="mar select-wrapper">
                                        <select name="months" id="month" valueLink={this.linkState('month')}>
                                            {
                                                this.state.months.map((month) => {
                                                    return (
                                                        <option>{month.label}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </span>
                                    <span className="mar select-wrapper">
                                        <select name="days" id="day"
                                                valueLink={this.linkState('day')}>
                                            <option>Dia</option>
                                            {
                                                this.state.days.map((day) => {
                                                    return (
                                                        <option>{day}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </span><br/><br/>
                                                <span
                                                    className="block-error block-error-fecha">Ingresa una fecha válida <i
                                                    className="fa fa-exclamation-circle"></i></span>
                                        </td>
                                    </tr>
                                    {(() => {
                                        if (this.state.nit != 'true') {
                                            return (
                                                <tr>
                                                    <td className="label">Sexo</td>
                                                    <td className="text-left">
                                                    <span className="select-wrapper">
                                                        <select name="sexo" id="sex" ref="sexo"
                                                                valueLink={this.linkState('sex')}>
                                                            <option>Seleccionar</option>
                                                            <option value="M">Masculino</option>
                                                            <option value="F">Femenino</option>
                                                        </select>
                                                    </span><br/><br/>
                                                            <span className="block-error block-error-sex">Ingresa tu sexo <i
                                                                className="fa fa-exclamation-circle"></i></span>
                                                    </td>
                                                </tr>
                                            )
                                        }
                                    })()}
                                </table>
                            </div>
                        </div>
                        {(() => {
                            if (this.state.nit == 'true') {
                                return (
                                    <div className="text-center" style={{marginTop: '15px'}}>
                                        <button className="btn btn-continue lg" onClick={this.continueNit}>
                                            ¡Continuar!
                                            <i className="fa fa-chevron-right"></i></button>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="text-center">
                                        <br/>
                                        <button className="btn btn-continue lg" onClick={this.continue}>
                                            ¡Continuar!
                                            <i className="fa fa-chevron-right"></i></button>
                                    </div>
                                )
                            }
                        })()}
                    </div>
                </div>
            </section>
        )
    }
});

export default DateOfBirth