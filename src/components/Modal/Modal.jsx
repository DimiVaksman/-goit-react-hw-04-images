import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Overlay, Tags } from './Modal.styled';
import { ImgList } from '../ImageGalleryItem/ImageGalleryItem.styled';

const modalRoot = document.querySelector('#modal-root');

export const Modal = ({ modalData, closeModal }) => {

  useEffect(() => {
    const onKeyDown = event => {
      if (event.code === 'Escape') {
        closeModal();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [closeModal]);

  const handleBackdropeClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropeClick}>
      <div>
        <ImgList
          src={modalData.largeImageURL}
          alt={modalData.tags}
          width="900"
        />
        <Tags>{modalData.tags}</Tags>
      </div>
    </Overlay>,
    modalRoot
  );
};


Modal.propTypes = {
  modalData: PropTypes.object.isRequired,
  closeModal: PropTypes.func.isRequired,
};


// import PropTypes from 'prop-types';
// import React, { Component } from 'react';
// import { createPortal } from 'react-dom';
// import { Overlay, Tags } from './Modal.styled';
// import { ImgList } from '../ImageGalleryItem/ImageGalleryItem.styled';

// const modalRoot = document.querySelector('#modal-root');

// export class Modal extends Component {
//   static propTypes = {
//     modalData: PropTypes.shape({
//       largeImageURL: PropTypes.string.isRequired,
//       tags: PropTypes.string.isRequired,
//     }),
//     closeModal: PropTypes.func,
//   };

//   componentDidMount() {
//     window.addEventListener('keydown', this.handleKeyDown);
//   }

//   componentWillUnmount() {
//     window.removeEventListener('keydown', this.handleBackdropeClick);
//   }

//   handleKeyDown = e => {
//     if (e.code === 'Escape') {
//       this.props.closeModal();
//     }
//   };

//   handleBackdropeClick = e => {
//     if (e.target === e.currentTarget) {
//       this.props.closeModal();
//     }
//   };

//   render() {
//     const { largeImageURL, tags } = this.props.modalData;

//     return createPortal(
//       <Overlay onClick={this.handleBackdropeClick}>
//         <div>
//           <ImgList src={largeImageURL} alt={tags} width="900" />
//           <Tags>{tags}</Tags>
//         </div>
//       </Overlay>,
//       modalRoot
//     );
//   }
// }