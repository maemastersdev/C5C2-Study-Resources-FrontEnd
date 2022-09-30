import { useState } from 'react';
import './GenericModal.scss';

const GenericModal = () : JSX.Element => {

    const [showModal, setShowModal] = useState('hidden');

    const handleClick = () => {
        showModal ==='hidden' ? setShowModal('visible') : setShowModal('hidden')
    }
    


    return (
    <>
    <button 
    className="trigger" 
    onClick={() => handleClick()}
    style={{visibility : `${showModal}`}}
    >Open the modal</button>
    <div className="modal">
        <div className="modal-content">
            <div className="close-button">&times;</div>
            <h1>This is a generic modal</h1>
        </div>
    </div>
    </>
    )
}

export default GenericModal