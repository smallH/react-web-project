import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class UndoRedo extends React.Component {
	static propTypes = {
		onUndo: PropTypes.func.isRequired,
		onRedo: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {onUndo,onRedo} = this.props;
		
		return(
			<div styleName={classnames({ "undoredu": true })}>
			    <div onClick={onUndo} styleName={classnames({ "undoredu-btn": true })}>
			     	撤销
			    </div>
			    <div onClick={onRedo} styleName={classnames({ "undoredu-btn": true })}>
			      	重做
			    </div>
			 </div>
		);
	}
}

export default CSSModules(UndoRedo, styles, {
	allowMultiple: true
});