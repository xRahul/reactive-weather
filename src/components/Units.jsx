var React = require('react');
var UNITS = require('../constants').UNITS;

var backgroundUnit = {
	background: '#2E6FA6',
	color: '#ffffff',
}

var paddingUnit = {
	paddingRight: '10px'
}

var Units = React.createClass({
	setImperial: function() {
		this.props.changeUnits('imperial');
	},

	setMetric: function() {
		this.props.changeUnits('metric');
	},

	render: function() {
        var cClass = 'btn btn-default unit-c';
        var fClass = 'btn btn-default unit-f';

        if(this.props.unit == 'metric')
            cClass += ' selected';
        if(this.props.unit == 'imperial')
            fClass += ' selected';

		return (
            <div className="btn-group pull-right" role="group">
                <button className={cClass} onClick={this.setMetric}>{UNITS['metric']}</button>
                <button className={fClass} onClick={this.setImperial}>{UNITS['imperial']}</button>
            </div>
		);
	}
});

module.exports = Units;
