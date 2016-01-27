import React, { PropTypes, Component } from 'react'

class Footer extends Component {
    
    render() {
        return (
            <footer id="comparamejor-main-footer">
                <div className="top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-10 col-lg-offset-1">
                                <div className="row footer-links">
                                    <div className="col-sm-4 col-md-4 links-group">
                                        <header>
                                            <span className="icon"><i className="cm cm-cdt"></i></span>

                                            <h3 className="upper light">Seguros</h3>
                                        </header>
                                        <ul className="links">
                                            <li><a href="comparamejor.com/co/seguros-para-vehiculos/">Seguro para
                                                Vehículos</a></li>
                                            <li><a href="comparamejor.com/co/asociados/">Asociados</a></li>
                                            <li><a href="comparamejor.com/co/seguros-accidentes-personales/">Seguro de
                                                Accidentes Personales</a></li>
                                            <li><a href="comparamejor.com/co/comprar-soat/">SOAT</a></li>
                                            <li><a href="#" data-toggle="modal" data-target="#coming-soon-modal">Seguro
                                                para PYME</a></li>
                                            <li><a href="comparamejor.com/co/seguros-para-vehiculos/por-marcas/">Cotiza
                                                por Marca de Auto</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-md-4 links-group">
                                        <header>
                                            <span className="icon"><i className="cm cm-banks"></i></span>

                                            <h3 className="upper light">Bancos</h3>
                                        </header>
                                        <ul className="links">
                                            <li><a href="{% get_comparamejor_app_url %}/co/productos/tarjeta-credito/">Tarjetas
                                                de crédito</a></li>
                                            <li><a
                                                href="{% get_comparamejor_app_url %}/co/productos/cuenta-de-ahorros/">Cuentas
                                                de ahorro</a></li>
                                            <li><a href="{% get_comparamejor_app_url %}/co/productos/cdt/">CDT</a></li>
                                            <li><a href="#" data-toggle="modal" data-target="#coming-soon-modal">Hipotecas</a>
                                            </li>
                                            <li><a href="#" data-toggle="modal" data-target="#coming-soon-modal">Prestamos
                                                personales</a></li>
                                            <li><a href="#" data-toggle="modal" data-target="#coming-soon-modal">Cuentas
                                                corrientes</a></li>
                                        </ul>
                                    </div>
                                    <div className="col-sm-4 col-md-4 links-group">
                                        <header>
                                            <span className="icon"><i className="cm cm-question"></i></span>

                                            <h3 className="upper light">Ayuda</h3>
                                        </header>
                                        <ul className="links">
                                            <li><a href="comparamejor.com/co/ayuda/">Ayuda y Contacto</a></li>
                                            <li><a href="comparamejor.com/co/blog/">Blog</a></li>
                                            <li><a href="comparamejor.com/co/quienes-somos/">Quienes somos</a></li>
                                            <li><a href="comparamejor.com/co/estamos-contratando/">Estamos
                                                contratando</a></li>
                                            <li><a href="/direcciones/mapa/todas/todas/centros-inspeccion/">Mapa de
                                                centros de inspección</a></li>
                                            <li><a href="{% url 'directions:router' %}">Mapa de centros de
                                                servientrega</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div id="footer-trunk"></div>
                    </div>
                </div>
                <div className="bottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-12 col-md-5 col-lg-6 left-col">
                                <div className="social-buttons-wrapper clearfix mtgw-05x mbgw-05x">
                                    <nav id="footer-social-buttons">
                                        <a href="http://facebook.com/comparamejor" target="_blank"><i
                                            className="fa fa-facebook"></i></a>
                                        <a href="http://twitter.com/comparamejor" target="_blank"><i
                                            className="fa fa-twitter"></i></a>
                                        <a href="https://www.linkedin.com/company/comparamejor" target="_blank"><i
                                            className="fa fa-linkedin"></i></a>
                                        <a href="http://google.com/+comparamejor" target="_blank"><i
                                            className="fa fa-google-plus"></i></a>
                                    </nav>
                                </div>
                                <p>
                                    <small>&copy; Marca registrada Iniciativas Digitales SAS.
                                        Carrera 15 No. 80 - 90 Bogotá, Colombia
                                    </small>
                                </p>
                                <div className="links">
                                    <p className="nmb"><a href="mailto:info@comparamejor.com">info@comparamejor.com</a>
                                    </p>

                                    <p className="nmb"><a href="comparamejor.com/co/politica-de-privacidad/">Política
                                        de privacidad</a> / <a href="comparamejor.com/co/terminos-y-condiciones/" target="_blank">Términos
                                        de uso</a> / <a href="comparamejor.com/co/ayuda/">Contacto y Ayuda</a></p>
                                </div>
                            </div>
                            <div className="col-sm-12 col-md-7 col-lg-6 right-col">
                                <div className="footer-logos clearfix">
                                    <div className="col superfinanciera">
                                        <p>Productos<br/>vigilados por:</p>

                                        <div className="logo">
                                            <a href="https://www.superfinanciera.gov.co" rel="nofollow"
                                               target="_blank" className="superfinanciera"></a>
                                        </div>
                                    </div>
                                    <div className="col founder-institute">
                                        <p>Empresa<br/>patrocinada por:</p>

                                        <div className="logo">
                                            <a href="http://fi.co/" rel="nofollow" target="_blank"
                                               className="founder-institute"></a>
                                        </div>
                                    </div>
                                    <div className="col place-to-pay">
                                        <p>Pagos<br/>procesados por:</p>

                                        <div className="logo">
                                            <a href="https://www.placetopay.com/" rel="nofollow"
                                               target="_blank" className="place-to-pay"></a>
                                        </div>
                                    </div>
                                    <div className="col norton">
                                        <p>Seguridad<br/>vigilada por:</p>

                                        <div className="logo">
                                            <a href="https://www.symantec.com/es/es/verisign/ssl-certificates"
                                               rel="nofollow" target="_blank" className="norton"></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        )
    }
}

export default Footer