var React = require('react');

var CityField = React.createClass({

	getInitialState: function() {
		return {cityName: ""};
	},

	render: function() {

		return (
				<input
				className="form-control rw-city-field"
				placeholder="City,Country"
				value={this.state.cityName} />
			);
	}
});

module.exports = CityField;
