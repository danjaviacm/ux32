import React from 'react/addons'
import ReactMixin from 'react-mixin'
import Router from 'react-router'


let NavigationControl = React.createClass({
    mixins: [Router.Navigation],
    contextTypes: {
        router: React.PropTypes.func
    },

    _onGoBack(e){
        this.context.router.goBack()
    },

    render() {
        return (
            <div className="container">
                <div className="navigation-control hidden-xs" onClick={this._onGoBack}>
                    <a className="arrow-left">
                        <span><i className="fa fa-chevron-left"></i><i className="fa fa-chevron-left"></i></span>
                    </a>
                </div>
                <a style={{ cursor: 'pointer' }} id="back-step" className="ta-left ptgw-05x visible-xs" onClick={this._onGoBack}>
                    <i className="fa fa-chevron-left"></i><i className="fa fa-chevron-left"></i> Paso anterior
                </a>
            </div>
        )
    }
});


export default NavigationControl