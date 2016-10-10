var React = require('react');

var tempEval = function(unit) {
	if(unit == 'metric') {
		return '°C';
	} else if(unit == 'imperial') {
		return '°F';
	}
}

var showIcon = function(icon) {
	return 'http://openweathermap.org/img/w/'+ icon + '.png';
}

var WeatherFutureItem = React.createClass({

	render: function() {
		return (
			<tr className="rw-future-item">
                <td className="rw-fi-date text-left">{this.props.date}</td>
                <td className="rw-fi-temperature text-center">{this.props.temp} {tempEval(this.props.units)} <img height='30px' src={showIcon(this.props.icon)} /></td>
                <td className="rw-fi-description text-right">{this.props.description}</td>
			</tr>
			);
	}
});

module.exports = WeatherFutureItem;
