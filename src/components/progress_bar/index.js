import React from 'react/addons'
import ReactMixin from 'react-mixin'
import Router from 'react-router'


let ProgressBar = React.createClass({
    mixins: [Router.Navigation],
    contextTypes: {
        router: React.PropTypes.func
    },

    render() {
        return (
            <div className="container">
                <div className="progress-loading-bar">
                    <div className="loader" ng-style="progress.loader" style={{width: this.props.percentage}}></div>
                    <div className="indicator ng-binding" ng-style="progress.indicator" style={{left: this.props.percentage}}>{this.props.percentage}</div>
                </div>
            </div>
        )
    }
});


export default ProgressBar