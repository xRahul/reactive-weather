var React = require('react');

var Units = require('./Units.jsx');

var weatherToday = {
	color: '#FFFFFF',
	marginTop: '10px',
}

var cityStyle = {
	paddingLeft: '10px',
}

var weatherInfoStyle = {
	padding: '0px'
}

var tempInfo = {
	padding: '0px',
	marginTop: '0px',
	marginBottom: '0px',
	fontSize: '4em',
}

var descriptionInfo = {
	color: '',
}

var tempEval = function(unit) {
	if(unit == 'metric') {
		return '°c';
	} else if(unit == 'imperial') {
		return '°f';
	}
}

var showIcon = function(icon) {
	return 'http://openweathermap.org/img/w/'+ icon + '.png';
}

var WeatherToday = React.createClass({
	changeTemp: function(unit) {
		this.props.changeUnits(unit);
	},

	render: function() {

		return (
			<div className="row">
                <div className="col-xs-12 rw-today-info">
                    <div className="col-xs-6 text-right">
                        <h1>{Math.round(this.props.temperature)}{tempEval(this.props.units)}</h1>
                    </div>
                    <div className="col-xs-6 text-left">
                        <img src={showIcon(this.props.icon)} />
                        <p style={descriptionInfo}>{this.props.description}</p>
                    </div>
                </div>
                <div style={weatherToday} className="col-xs-12 rw-today">
                    <div className="col-sm-6 rw-today-city">
                        <h5>{this.props.cityName}, {this.props.countryCode}</h5>
                        <small>Today at {this.props.date.substring(11, 16)}</small>
                    </div>
                    <div className="col-sm-6">
                        <Units changeTemp={this.changeTemp} unit={this.props.units} />
                    </div>
                </div>
			</div>
			)

	}
});

module.exports = WeatherToday;
