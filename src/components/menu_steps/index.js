import React, { PropTypes, Component } from 'react'

class MenuSteps extends Component {
    
    render() {
        return (
            <div className="uj-express hidden-xs">
                <header id="steps-form" className="row">
                    <nav>
                        <ul className="col-sm-12">
                            <li className="col-sm-4"><a>1. Datos del vehículo</a></li>
                            <li className="col-sm-4"><a>2. Datos específicos</a></li>
                            <li className="col-sm-4"><a>3. Datos personales</a></li>
                        </ul>
                    </nav>
                </header>
                <br/>
            </div>
        )
    }
}

export default MenuSteps