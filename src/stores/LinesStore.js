import Reflux from 'reflux'
import Ux3Func from '../services/Ux3Func'
import Ux3Services from '../services/Ux3Services'
import Ux3Actions from '../actions/Ux3Actions'

let LinesStore = Reflux.createStore({
    listenables: [Ux3Actions],
    linesList: [],

    getValueLines() {
        let data = Ux3Func.loadData()
        Ux3Services.getLinesByModel(data.vehicle_body, data.vehicle_brand, data.vehicle_model)
            .then((data) => {
                //console.log(data)
                this.linesList = data
                this.trigger(this.linesList)
            }).catch((error) => {
                trackJs.track(JSON.stringify(error));
                console.log(error)
            })
    }
})

export default LinesStore

