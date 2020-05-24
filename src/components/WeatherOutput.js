import React, { Component } from 'react'
import { connect } from 'react-redux'

class WeatherOutput extends Component {
    
    render() {

        return (

            <div>
                <div className="row">
                    <div className="col-xs-4">
                        <div className="row">
                            {this.props.weatherData && this.props.weatherData.main.temp}
                        </div>
                    </div>
    
                </div>  
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        weatherData: state.weatherData
    }
}

export default connect(mapStateToProps)(WeatherOutput)

