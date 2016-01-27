import React from 'react'

let Proccess = React.createClass({
    render() {
        return (
            <div className="container">
                <div className="text-center loading-uj hidden-xs">
                    <i className="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Procesando...
                </div>
                <div className="text-center loading-uj-xs visible-xs">
                    <i className="fa fa-spinner fa-spin"></i>&nbsp;&nbsp;Procesando...
                </div>
            </div>
        )
    }
})

export default Proccess