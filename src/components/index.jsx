import React from 'react'
import { default  as Router, Route, NotFoundRoute, Redirect, RouteHandler, Link} from 'react-router'
import Resize from './resize'


let ga = require('react-google-analytics')
let GAInitiailizer = ga.Initializer

/*
 * Components Statics
 * */
import Navbar from './navbar'
import MenuSteps from './menu_steps'
import LogosInsurances from './logos_insurances'
import Footer from './footer'

/*
 * Components Dinamics
 * */
import QueryRegistration from './query_registration'
import VerifyVehicle from './verify_vehicle'
import SearchPolicies from './loading'
import VehicleBody from './vehicle_body'
import VehicleBrand from './vehicle_brand'
import VehicleModel from './vehicle_model'
import VehicleLine from './vehicle_line'
import VehicleReference from './vehicle_reference'
import VehicleReferenceComplete from './vehicle_reference_complete'
import VehicleZeroKm from './vehicle_zero_km'
import VehicleServiceType from './vehicle_service_type'
import VehicleCity from './vehicle_city'
import IdentificationType from './identification_type'
import DateOfBirth from './date_of_birth'
import EmailAdress from './email_adress'
import PromoCode from './promocode'
import ClaimHistory from './claim_history'
import WhenNeedPolicy from './when_need_policy'
import NotFound from './notfound'

/*
 * Base UJ UX3.1 ReactJS <3 :3
 * */
let App = React.createClass({
    mixins: [Router.State],

    render() {
        return (
            <div>
                <Navbar state="funnel"/>
                <Resize>
                    <MenuSteps />

                    <RouteHandler/>
                </Resize>
                <LogosInsurances />

            </div>
        )
    }
})

let routes = (
    <Route>
        <Redirect from="/" to="query"/>
        <Route handler={App}>
            <Route name="query" path="/consultar-placa" handler={QueryRegistration}/>
            <Route name="query_vehicle_registration" path="/consultar-placa/?vehicle_registration=:vehicle_registration" handler={QueryRegistration}/>
            <Route name="verify_vehicle" path="/verificar-vehiculo" handler={VerifyVehicle}/>
            <Route name="loading" path="/buscando-polizas" handler={SearchPolicies}/>
            <Route name="vehicle_body" path="/tipo-vehiculo" handler={VehicleBody}/>
            <Route name="vehicle_brand" path="/marca-vehiculo" handler={VehicleBrand}/>
            <Route name="vehicle_model" path="/modelo-vehiculo" handler={VehicleModel}/>
            <Route name="vehicle_line" path="/line-vehiculo" handler={VehicleLine}/>
            <Route name="vehicle_reference" path="/referencia-vehiculo" handler={VehicleReference}/>
            <Route name="vehicle_reference_complete" path="/referencia-completa-vehiculo"
                   handler={VehicleReferenceComplete}/>
            <Route name="vehicle_zero_km" path="/ubicacion-vehiculo" handler={VehicleZeroKm}/>
            <Route name="vehicle_service_type" path="/tipo-servicio-vehiculo" handler={VehicleServiceType}/>
            <Route name="vehicle_city" path="/ciudad-vehiculo" handler={VehicleCity}/>
            <Route name="identification_type" path="/tipo-identificacion" handler={IdentificationType}/>
            <Route name="date_of_birth" path="/datos-personales" handler={DateOfBirth}/>
            <Route name="email_adress" path="/datos-de-contacto" handler={EmailAdress}/>
            <Route name="promocode" path="/codigo-promocional" handler={PromoCode}/>
            <Route name="claim_history" path="/tiempo-sin-reclamaciones" handler={ClaimHistory}/>
            <Route name="when_need_policy" path="/cuando-necesitas-tu-poliza" handler={WhenNeedPolicy}/>
        </Route>
        <Redirect from="*" to="query" />
    </Route>
);

Router.run(routes, (Handler) => {
    React.render(<Handler/>, document.getElementById('app'))
})
