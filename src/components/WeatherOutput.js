import React, { Component } from 'react'
import { connect } from 'react-redux'
// import { setCurrentLocation } from '../redux/actions'

class WeatherOutput extends Component {
    
    render() {

        return (

            <div>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="row">
                            {}
                        </div>
                    </div>
    
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        currentLocation: state.location
    }
}

export default connect(mapStateToProps)(WeatherOutput)

