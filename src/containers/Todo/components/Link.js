import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import styles from './index.styl';
import CSSModules from 'react-css-modules';

class Link extends React.Component {
	static propTypes = {
		active: PropTypes.bool.isRequired,
		children: PropTypes.node.isRequired,
		setFilter: PropTypes.func.isRequired
	}

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		const {active, children, setFilter} = this.props;
		return(
			// eslint-disable-next-line jsx-a11y/anchor-is-valid
			<a styleName={classnames({ selected: active })} style={{ cursor: 'pointer' }} onClick={setFilter}>{children}</a>
		)
	}
}

export default CSSModules(Link, styles, {
	allowMultiple: true
});