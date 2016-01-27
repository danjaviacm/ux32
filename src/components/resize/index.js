import React, { PropTypes, Component } from 'react'
import $ from 'jquery'

class Resize extends Component {
    constructor( props ) {

        super( props )

        this.state = {
            width: window.innerWidth,
            height: window.innerHeight,
            color: '#007ea6'
        }

        this.handleResize = this.handleResize.bind( this );
    }

    handleResize() {
        this.setState({
            width: window.innerWidth,
            height: window.innerHeight
        });
    }

    componentDidMount() {
        window.addEventListener( 'resize', this.handleResize );
    }

    componentWillUnmount() {
        window.removeEventListener( 'resize', this.handleResize );
    }

    render() {
        let children = React.Children.map(
            this.props.children,
            function(child) {
                return {child};
            }
        );

        if(window.innerHeight > 490) {
            this.state.height = window.innerHeight - 150
            return <div style={{minHeight: this.state.height, backgroundColor: this.state.color}}>{children}</div>;
        } else {
            this.state.height = 500;
            return <div style={{minHeight: this.state.height, backgroundColor: this.state.color}}>{children}</div>;
        }

    }

}

export default Resize