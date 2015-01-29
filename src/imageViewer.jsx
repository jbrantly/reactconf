var React = require('react/addons');

var ImageViewer = React.createClass({

	propTypes: {
		index: React.PropTypes.number.isRequired
	},

	getDefaultProps: function() {
		return {
			index: 0   
		}
	},

	render: function () {
		return <div className="photos">
			<React.addons.CSSTransitionGroup transitionName="photo">
				<img key={this.props.index} 
				     src={"photos/"+this.props.index+'.jpg'} />
			</React.addons.CSSTransitionGroup>
		</div>
	}
})

module.exports = ImageViewer;