///<reference path="lib/_references.d.ts"/>

import ImageViewer = require('./imageViewer');
import React = require('react/addons');

interface State {
  photoIndex?: number;
  inputText?: string;
}

class App extends React.Component<any, State, any> {
  
  state = {
			photoIndex: 0,
			inputText: '1'
  }

	handleChange(addend) {
		var newIndex = this.state.photoIndex+addend,
		               maxPhotos = 3;
		// clamp [0 thru maxPhotos-1]
		newIndex = Math.max(0, Math.min(maxPhotos-1, newIndex)); 
		
		this.setState({
			photoIndex: newIndex,
			inputText: newIndex+1
		})
	}

	handleKeyPress(e) {
		if (e.key == 'Enter') {
			this.setState({
				photoIndex: parseInt(this.state.inputText, 10)-1
			})
		}
	}

	render() {
		return React.jsx(`<div className="app">
			<div className="title">Picture Purrfect</div>
			<ImageViewer index={this.state.photoIndex+''} />
			<div>
				<button 
					disabled={this.state.photoIndex == 0} 
					onClick={this.handleChange.bind(this, -1)}>Previous</button>

				<input type="text"
          value={this.state.inputText}
          onChange={e => this.setState({inputText: e.target.value})}
					onKeyPress={this.handleKeyPress.bind(this)} />

				<button 
					disabled={this.state.photoIndex == 2} 
					onClick={this.handleChange.bind(this, 1)}>Next</button>
			</div>
		</div>`)
	}
}

React.render(React.jsx(`<App />`), document.body);