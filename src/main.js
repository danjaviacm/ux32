import React from 'react'
import { default  as Router, Route, NotFoundRoute, Redirect, RouteHandler, Link} from 'react-router'
import Resize from './components/resize'


let ga = require('react-google-analytics')
let GAInitiailizer = ga.Initializer

/*
 * Static Components
 * */
import Navbar from './components/navbar'
import MenuSteps from './components/menu_steps'
import LogosInsurances from './components/logos_insurances'
import Footer from './components/footer'

/*
 * Dinamic Components
 * */
import QueryRegistration from './components/query_registration'
import VerifyVehicle from './components/verify_vehicle'
import SearchPolicies from './components/loading'
import VehicleBody from './components/vehicle_body'
import VehicleBrand from './components/vehicle_brand'
import VehicleModel from './components/vehicle_model'
import VehicleLine from './components/vehicle_line'
import VehicleReference from './components/vehicle_reference'
import VehicleReferenceComplete from './components/vehicle_reference_complete'
import VehicleZeroKm from './components/vehicle_zero_km'
import VehicleServiceType from './components/vehicle_service_type'
import VehicleCity from './components/vehicle_city'
import IdentificationType from './components/identification_type'
import DateOfBirth from './components/date_of_birth'
import EmailAdress from './components/email_adress'
import PromoCode from './components/promocode'
import ClaimHistory from './components/claim_history'
import WhenNeedPolicy from './components/when_need_policy'
import NotFound from './components/notfound'

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
    React.render(<Handler/>, document.getElementById('content'))
})
