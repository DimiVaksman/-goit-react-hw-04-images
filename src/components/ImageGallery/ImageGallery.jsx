import PropTypes from 'prop-types';
import { Component } from 'react';
import { API } from '../services/API';
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

export class ImageGallery extends Component {
  static propTypes = {
    value: PropTypes.string.isRequired,
  };

  state = {
    value: '',
    images: [],
    error: null,
    status: Status.IDLE,

    page: 1,
    totalPages: 0,

    isShowModal: false,
    modalData: { img: '', tags: '' },
  };

  setModalData = modalData => {
    this.setState({ modalData, isShowModal: true });
  };

  handleModalClose = () => {
    this.setState({ isShowModal: false });
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (prevState.value !== nextProps.value) {
      return { page: 1, value: nextProps.value };
    }

    return null;
  }

  componentDidUpdate(prevProps, prevState) {
    const { page } = this.state;
    const prevValue = prevProps.value;
    const nextValue = this.props.value;

    if (prevValue !== nextValue || prevState.page !== page) {
      this.setState({ status: Status.PENDING });

      if (this.state.error) {
        this.setState({ error: null });
      }

      API.getPictures(nextValue, page)
        .then(images => {
          this.setState(prevState => ({
            images:
              page === 1 ? images.hits : [...prevState.images, ...images.hits],
            status: Status.RESOLVED,
            totalPages: Math.floor(images.totalHits / 12),
          }));
        })
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }

  handleLoadMore = e => {
    e.preventDefault();
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  render() {
    const { images, error, status, page, totalPages, isShowModal, modalData } =
      this.state;

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
                onImgClick={this.setModalData}
              />
            ))}
          </GalleryList>
          <BtnBackground>
            {images.length > 0 &&
              status !== 'pending' &&
              page <= totalPages && <Button onClick={this.handleLoadMore} />}
          </BtnBackground>
          {isShowModal && (
            <Modal modalData={modalData} closeModal={this.handleModalClose} />
          )}
        </>
      );
    }
  }
}



