var React = require('react');
var UNITS = require('../constants').UNITS;

var fieldWrapper = {
	padding: '0px',
}

var searchSection = {
	borderRadius: 0,
}

var searchButton = {
	borderRadius: 0,
	padding: '6.5px 12px'
}

var SearchField = React.createClass({
	getInitialState: function() {
		return ({
			city: '',
		});
	},

	componentDidMount: function() {
		this.refs.searchInput.focus();
	},

	handleSubmit: function(event) {
		event.preventDefault();

		if (this.state.city && this.props.onNewSearch) {
			this.props.onNewSearch(this.state.city);
	    this.setState({
				city: ''
			});
		}
	},

	handleCityChange: function(event) {
    this.setState({
			city: event.target.value.trim()
		});
	},

	render: function() {
		return (
			<div className="row">
				<div className="col-md-12">
					<form onSubmit={this.handleSubmit} className="rw-search-form clearfix">
						<div style={fieldWrapper} className="col-xs-10">
							<input
								style={searchSection}
								className="form-control input-lg rw-search-field"
								ref="searchInput"
								placeholder="Search City (No Spaces Please)"
								value={this.state.city}
								onChange={this.handleCityChange}
							/>
						</div>
						<div style={fieldWrapper} className="col-xs-2 text-right">
							<button className="btn btn-default btn-lg rw-search-btn">Go</button>
						</div>
					</form>
				</div>
			</div>
		);
	}
});

SearchField.propTypes = {
  onNewSearch: React.PropTypes.func.isRequired
};

module.exports = SearchField;
