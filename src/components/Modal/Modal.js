import './Modal.css'
import { useDispatch } from 'react-redux'
import Close from '../../asset/close.png'
import { Close_Modal } from '../../actions/Actions'

const Modal = ({h1,text,bgModal,styleModal,styleH1,styleText,styleButton}) => {

	const dispatch = useDispatch()

	const styles = {
		bgModal: bgModal,
		modal: styleModal,
		styleH1: styleH1,
		styleText: styleText,
		styleButton: styleButton
	}

	const closeModal = () =>{
		dispatch( Close_Modal() )
	}

	return(
		<div id='modal' style={styles.bgModal} >
			<div id="modal-content" style={styles.modal}>
				{ h1 ? <h1 style={styles.styleH1}>{h1}</h1> : ""}
				{ text ? <p style={styles.styleText}>{text}</p> : ""}
				<button id="close" style={styles.styleButton} onClick={() => closeModal()}>X</button>
			</div>
		</div>
	)
}

export default Modal;