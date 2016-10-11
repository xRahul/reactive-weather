var React = require('react');

var Units = require('./Units.jsx');
var UNITS = require('../constants').UNITS;

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

var showIcon = function(icon) {
	return 'http://openweathermap.org/img/w/'+ icon + '.png';
}

var WeatherToday = React.createClass({
	changeUnits: function(unit) {
		this.props.changeUnits(unit);
	},

	render: function() {
		var units = UNITS[this.props.units];

		return (
			<div className="row">
				<div className="col-xs-12 rw-today-info">
					<div className="col-xs-6 text-right">
						<h1>{Math.round(this.props.temperature)}{units}</h1>
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
						<Units changeUnits={this.changeUnits} unit={this.props.units} />
					</div>
				</div>
			</div>
		)

	}
});

module.exports = WeatherToday;
