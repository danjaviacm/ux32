import Reflux from 'reflux'
import Ux3Actions from '../actions/Ux3Actions'
import Ux3Services from '../services/Ux3Services'
import Ux3Func from '../services/Ux3Func'

let ModelsStore = Reflux.createStore({
    listenables: [Ux3Actions],
    modelsList: [],

    getValueModels() {
        let data = Ux3Func.loadData()
        Ux3Services.getModelsByBrand(data.vehicle_body, data.vehicle_brand)
            .then((data) => {
                //console.log(data)
                this.modelsList = data
                this.trigger(this.modelsList)
            }).catch((error) => {
                trackJs.track(JSON.stringify(error));
                console.log(error)
            })
    }
})

export default ModelsStore