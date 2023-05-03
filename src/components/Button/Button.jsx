import PropTypes from 'prop-types';
import { ButtonLoadMore } from './Button.styled';

export const Button = ({ onClick = null }) => {
  return (
    <ButtonLoadMore type="button" onClick={onClick}>
      Load More
    </ButtonLoadMore>
  );
};

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.any,
};
