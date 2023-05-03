import PropTypes from 'prop-types';
import { ImgList } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ item, onImgClick }) => {
  const { largeImageURL, tags, webformatURL } = item;

  return (
    <li
      onClick={e => {
        e.preventDefault();
        onImgClick({ largeImageURL, tags });
      }}
    >
      <div>
        <ImgList
          src={webformatURL}
          alt={tags}
          width="320"
          height="200px"
          loading="lazy"
        />
      </div>
    </li>
  );
};

ImageGalleryItem.propTypes = {
  item: PropTypes.shape({
    tags: PropTypes.string.isRequired,
    webformatURL: PropTypes.string.isRequired,
    largeImageURL: PropTypes.string.isRequired,
  }).isRequired,
};
