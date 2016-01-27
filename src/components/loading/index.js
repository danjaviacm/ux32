import React from 'react'
import Router from 'react-router'
import Proccess from './proccess'
import Ux3Func from '../../services/Ux3Func'
import Ux3Services from '../../services/Ux3Services'
import $ from 'jquery'
import EventTrackingMixin from '../../mixins/EventTrackingMixin'
import store from 'store2'


let SearchPolicies = React.createClass({
    mixins: [Router.Navigation, EventTrackingMixin],

    getInitialState() {
        return {
            code: [],
            final: [],
        }
    },

    componentWillMount() {
        let data = Ux3Func.loadData()

        if (data.table == 'preliminar') {
            Ux3Services.getInfoHidden(data.vehicle_registration)
                .then((data) => {
                    store.set('data-car', JSON.stringify({
                        code: data.code,
                        brand: data.brand,
                        reference: data.reference,
                        line: data.line,
                        year: data.year
                    }))
                    this.setState({code: data})
                }).catch((error) => {
                    trackJs.console.info(JSON.stringify(error));
                })
        } else if (data.table == 'final') {
            let flag_dupplicate = JSON.parse(store.get('flag_not_dupplicate'))
            if (flag_dupplicate.value == true) {
                setTimeout(() => {
                    let url = JSON.parse(store.get('url_flag'))
                    window.location.href = url.url
                }, 4000)
            } else {
                Ux3Services.createOppFinal(data)
                    .then((data) => {

                        dataLayer.push({
                            event:'opportunity',
                            eventLabel: "opportunitycreated",
                            eventAction: this.context.router.getCurrentPath(),
                            value: 1
                        });

                        store.set('opp_id', JSON.stringify({opp_id: data.opportunity_id}))
                        store.set('url_flag', JSON.stringify({url: data.comparison_table_url}))
                        store.set('flag_not_dupplicate', JSON.stringify({value: true}))
                        this.setState({final: data})
                    }).catch((error) => {
                        trackJs.track(JSON.stringify(error));
                        console.log(error)
                    })
            }
        }
    },

    render() {
        if (this.state.code.error == false) {
            // Redirect when the hack function
            this.transitionTo('verify_vehicle')
        } else if (this.state.code.error == true) {
            // Redirect when the hack not function
            this.transitionTo('vehicle_body')
        } else if (this.state.final.error == false) {
            setTimeout(() => {
                window.location.href = this.state.final.comparison_table_url
            }, 4000)
        }
        return (
            <div>
                <Proccess />
            </div>
        )
    }
})

export default SearchPolicies