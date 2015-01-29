import React = require('react/addons');

interface Props {
	index: number;
}

class ImageViewer extends React.Component<Props, any, any> {
	static defaultProps = { index: 0 }
	
	render() {
		return React.jsx(`<div className="photos">
			<React.addons.CSSTransitionGroup transitionName="photo">
				<img key={this.props.index} 
				     src={"photos/"+this.props.index+'.jpg'} />
			</React.addons.CSSTransitionGroup>
		</div>`)
	}
}

ImageViewer.propTypes = { index: React.PropTypes.number.isRequired }

export = ImageViewer;