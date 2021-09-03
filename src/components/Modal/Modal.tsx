import React from 'react';
import Modal from 'react-modal';

const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)',
    },
};

export interface IProps {
    btnName: string
    title: string
    children?: any[]
}

const ModalComponent = (props:IProps) => {

    const {
        btnName,
        title,
        children
    } = props;

    let subtitle: any;
    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => {
        setIsOpen(true);
    }

    const afterOpenModal = () => {
        // references are now sync'd and can be accessed.
        subtitle.style.color = '#f00';
    }

    const closeModal = () => {
        setIsOpen(false);
    }

    return (
        <div>
            <button style={{ width: '150px'}} onClick={openModal}>{btnName}</button>
            <Modal
                isOpen={modalIsOpen}
                onAfterOpen={afterOpenModal}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel={title}
                ariaHideApp={false}
            >
                <h2 ref={(_subtitle) => (subtitle = _subtitle)}>{title}</h2>
                {/* <button onClick={closeModal}>close</button> */}
                <div>
                    {children ? children.map((child) => {
                        return (
                            <p style={{textAlign: 'center'}} key={child.code}>{child.name}</p>
                        );
                    }): null}
                </div>
            </Modal>
        </div>
    );
}

export default ModalComponent;