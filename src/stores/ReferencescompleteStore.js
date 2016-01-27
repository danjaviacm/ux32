import Reflux from 'reflux'
import Ux3Func from '../services/Ux3Func'
import Ux3Services from '../services/Ux3Services'
import Ux3Actions from '../actions/Ux3Actions'

let ReferencesCompleteStore = Reflux.createStore({
    listenables: [Ux3Actions],
    referencescompleteList: [],

    getValueReferencesComplete() {
        let data = Ux3Func.loadData()
        Ux3Services.getCompleteReferences(data.vehicle_body, data.vehicle_brand, data.vehicle_model, data.vehicle_line, encodeURIComponent(data.vehicle_reference), encodeURIComponent(data.vehicle_reference_complete))
            .then((data) => {
                //console.log(data)
                this.referencescompleteList = data
                this.trigger(this.referencescompleteList)
            }).catch((error) => {
                trackJs.track(JSON.stringify(error));
                console.log(error)
            })
    }
})

export default ReferencesCompleteStore