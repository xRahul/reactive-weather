var React = require('react');

var backgroundUnit = {
	background: '#2E6FA6',
	color: '#ffffff',
}

var paddingUnit = {
	paddingRight: '10px'
}

var Units = React.createClass({

	tempClick: function(e) {
		this.props.changeTemp(e.target.innerHTML);
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
                <button className={cClass} onClick={this.tempClick}>°C</button>
                <button className={fClass} onClick={this.tempClick}>°F</button>
            </div>
			);
	}

});

module.exports = Units;
