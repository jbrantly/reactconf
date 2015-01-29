/* @flow */

var ImageViewer = require('./imageViewer');
var React = require('react/addons');

type State = {
    photoIndex: number;
    inputText: string;
}

var App = React.createClass({
	mixins: [React.addons.LinkedStateMixin],

	getInitialState: function(): State {
		return {
			photoIndex: 0,
			inputText: '1'
		}
	},

	handleChange: function(addend) {
		var newIndex = this.state.photoIndex+addend,
		               maxPhotos = 3;
		// clamp [0 thru maxPhotos-1]
		newIndex = Math.max(0, Math.min(maxPhotos-1, newIndex)); 
		
		this.setState({
			photoIndex: newIndex,
			inputText: newIndex+1
		})
	},

	handleKeyPress: function(e) {
		if (e.key == 'Enter') {
			this.setState({
				photoIndex: parseInt(this.state.inputText, 10)-1
			})
		}
	},

	render: function () {
		return <div className="app">
			<div className="title">Picture Purrfect</div>
			<ImageViewer index={this.state.photoIndex} />
			<div>
				<button 
					disabled={this.state.photoIndex == 0} 
					onClick={this.handleChange.bind(this, -1)}>Previous</button>

				<input type="text" valueLink={this.linkState('inputText')} 
					onKeyPress={this.handleKeyPress} />

				<button 
					disabled={this.state.photoIndex == 2} 
					onClick={this.handleChange.bind(this, 1)}>Next</button>
			</div>
		</div>
	}
})

React.render(<App />, document.body);