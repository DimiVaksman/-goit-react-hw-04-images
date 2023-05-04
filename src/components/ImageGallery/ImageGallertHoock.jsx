import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import { API } from '../../services/API';
import { ImageGalleryItem } from '../ImageGalleryItem/ImageGalleryItem';
import { Modal } from '../Modal/Modal';
import { Button } from 'components/Button/Button';
import { GalleryList, BtnBackground, Text, Oops } from './ImageGallery.styled';
import { Spinner } from '../Spinner/Spinner';

const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

export const ImageGallery = ({value}) => {


  const [images, setImages] = useState([])
  const [error, setError] = useState(null)
  const [status, setStatus] = useState(Status.IDLE)

  const [page, setPage] = useState(1)
  const [totalPage, setTotalPage] = useState(0)

  const [isShowModal, setIsShowModal] = useState(false)
  const [modalData, setModalData] = useState({img: '', tags: ''})
  
  


//   const setModData = modalData => {
//     setModalData(modalData)
//     setIsShowModal(true)
//   };

//   const handleModalClose = () => {
//     setIsShowModal(false);
//   };

    getDerivedStateFromProps = (nextProps, prevState) => {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }

    return null;
  }

  useEffect(()=>{
    const prevValue = prevProps.value;
    const nextValue = value;

    if (prevValue !== nextValue || prevState.page !== page) {
      setStatus(Status.PENDING);

      if (error) {
        setError(null);
      }

      API.getPictures(nextValue, page)
        .then(images => {
          setImages(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => setError(error), setStatus(Status.REJECTED))
    }
  })


  const handleLoadMore = e => {
    e.preventDefault();
    setPage(prevState => prevState + 1);
  };

 


    if (status === 'idle') {
      return <Text> Let's find the pictures </Text>;
    }

    if (status === 'pending') {
      return <Spinner />;
    }

    if (status === 'rejected') {
      return <div>{error}</div>;
    }

    if (images.length === 0) {
      return <Oops>Try again, nothing found </Oops>;
    }

    if (status === 'resolved') {
      return (
        <>
          <GalleryList>
            {images.map(image => (
              <ImageGalleryItem
                key={image.id}
                item={image}
                onImgClick={setModData}
              />
            ))}
          </GalleryList>
          <BtnBackground>
            {images.length > 0 &&
              status !== 'pending' &&
              page <= totalPages && <Button onClick={handleLoadMore} />}
          </BtnBackground>
          {isShowModal && (
            <Modal modalData={modalData} closeModal={handleModalClose} />
          )}
        </>
      );
    }

}


// static propTypes = {
//     value: PropTypes.string.isRequired,
//   };