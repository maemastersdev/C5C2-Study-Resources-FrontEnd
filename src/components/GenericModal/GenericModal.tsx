import './GenericModal.scss';

const GenericModal = () : JSX.Element => {

    return (
    <>
    <button className="trigger">Open the modal</button>
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