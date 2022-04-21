import './Modal.css'
import { useDispatch } from 'react-redux'
import Close from '../../asset/close.png'
import { Close_Modal } from '../../actions/Actions'

const Modal = (props) => {

	const dispatch = useDispatch()

	const styles = {
		modal: props.styleModal,
		styleH1: props.styleH1,
		styleText: props.styleText
	}

	const closeModal = () =>{
		dispatch( Close_Modal() )
	}

	return(
		<div id='modal' >
			<div id="modal-content" style={styles.modal}>
				{ props.h1 ? <h1 style={styles.styleH1}>{props.h1}</h1> : ""}
				{ props.text ? <p style={styles.styleText}>{props.text}</p> : ""}
				<button id="close" onClick={() => closeModal()} ><img src={Close} alt="X" /></button>
			</div>
		</div>
	)
}

export default Modal;