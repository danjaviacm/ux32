import React from 'react'

class Loading extends React.Component {
    render() {
        return(
            <section className="container-step pbgw-2x">
                <div id="step-loading" className="step">
                    <div className="background">
                        <div className="container">
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-10 col-md-offset-1">
                                    <div className="loading-octopus">
                                        <div className="octopus">
                                            <img
                                                src="https://segdig1.s3.amazonaws.com/static/core-app/img/sections/cars/quote-table/octopus.svg"
                                                width="300px" alt="El pulpo Lukas está buscando..."/>

                                            <div className="loaders">
                                                <i className="fa fa-spinner fa-spin"></i>&nbsp;<i
                                                className="fa fa-spinner fa-spin"></i>&nbsp;<i
                                                className="fa fa-spinner fa-spin"></i>&nbsp;<i
                                                className="fa fa-spinner fa-spin"></i>
                                            </div>
                                        </div>
                                        <div className="globe">
                                            <img
                                                src="https://segdig1.s3.amazonaws.com/static/core-app/img/sections/cars/quote-table/globe.svg"
                                                width="350px" alt=""/>

                                            <div className="text">
                                                <header>
                                                    <h1>¿Sabías qué?</h1>
                                                </header>
                                                <p>
                                                    ComparaMejor.com ha cotizado más de <strong>1.000.000</strong>
                                                    de pólizas y nuestros clientes han ahorrado en total
                                                </p>
                                                <span className="total-saved">COP$340.000.000</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default Loading