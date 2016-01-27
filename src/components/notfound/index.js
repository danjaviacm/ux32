import React from 'react'

class NotFound extends React.Component {
    render() {
        return (
            <main className="page-404" style={{minHeight: '283px'}}>
                <div id="page-404">
                    <div id="sun"><img
                        src="https://segdig1.s3.amazonaws.com/static/bower_components/frontendquillo/images/sections/404/sun.png"
                        alt="sun"/></div>
                    <div id="octopus"><img
                        src="https://segdig1.s3.amazonaws.com/static/bower_components/frontendquillo/images/sections/404/octopus.svg"
                        alt="ComparaMejor.com" className="img-responsive"/></div>
                    <div className="container">
                        <div className="row">
                            <div id="message" className="col-sm-6 col-sm-offset-3 text-center ptgw-2x">
                                <div className="block text-center mbgw">
                                    <h3 className="open-sans bold">¡Oops, estamos perdidos!</h3>
                                </div>
                                <p className="bold">Odiamos decirlo pero no pudimos encontrar la página que estás
                                    buscando.</p>

                                <p className="bold mbgw">Pero no hay de que preocuparse, navega a nuestra página de
                                    Inicio para
                                    encontrarla rápidamente</p>
                                <a href="#" className="btn btn-default">Haz click aquí</a>

                                <p className="bold">O vuelve a nuestros cotizadores</p>
                                <a href="#" className="btn btn-default" style={{marginBottom: 10 + 'px'}}>Cotiza seguro
                                    de
                                    autos</a><br/>
                                <a href="#" className="btn btn-default">Cotiza soat</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default NotFound
