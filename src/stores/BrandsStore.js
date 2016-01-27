import Reflux from 'reflux'
import Ux3Func from '../services/Ux3Func'
import Ux3Services from '../services/Ux3Services'
import Ux3Actions from '../actions/Ux3Actions'

let BrandsStore = Reflux.createStore({
    listenables: [Ux3Actions],
    brandsList: [],

    getValueBrands() {
        let data = Ux3Func.loadData()
        Ux3Services.getBrandsByBody(data.vehicle_body)
            .then((data) => {
                //console.log(data)
                this.brandsList = data
                this.trigger(this.brandsList)
            }).catch((error) => {
                trackJs.track(JSON.stringify(error));
                console.log(error)
            })
    }
})

export default BrandsStore