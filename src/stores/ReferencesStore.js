import Reflux from 'reflux'
import Ux3Func from '../services/Ux3Func'
import Ux3Services from '../services/Ux3Services'
import Ux3Actions from '../actions/Ux3Actions'

let ReferencesStore = Reflux.createStore({
    listenables: [Ux3Actions],
    referencesList: [],

    getValueReferences() {
        let data = Ux3Func.loadData()
        Ux3Services.getReferencesByLine(data.vehicle_body, data.vehicle_brand, data.vehicle_model, encodeURIComponent(data.vehicle_line))
            .then((data) => {
                //console.log(data)
                this.referencesList = data
                this.trigger(this.referencesList)
            }).catch((error) => {
                trackJs.track(JSON.stringify(error));
                console.log(error)

            })
    }
})

export default ReferencesStore