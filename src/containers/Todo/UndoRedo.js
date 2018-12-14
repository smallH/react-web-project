import { ActionCreators as UndoActionCreators } from 'redux-undo'
import { connect } from 'react-redux'
import UndoRedo from '@/components/Todo/UndoRedo'

//let UndoRedo = ({
//	onUndo,
//	onRedo
//}) => (
//	<div className={classnames({ "undoredu": true })}>
//	    <div onClick={onUndo} className={classnames({ "undoredu-btn": true })}>
//	     	撤销
//	    </div>
//	    <div onClick={onRedo} className={classnames({ "undoredu-btn": true })}>
//	      	重做
//	    </div>
//	 </div>
//)

const mapDispatchToProps = ({
	onUndo: UndoActionCreators.undo,
	onRedo: UndoActionCreators.redo
})

export default connect(
	null,
	mapDispatchToProps
)(UndoRedo)