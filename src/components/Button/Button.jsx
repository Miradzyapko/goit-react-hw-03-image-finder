import PropTypes from 'prop-types';
import { LoadMoreBtn } from './Button.Styled';

export const Button = ({ loadMore }) => {
  return (
    <LoadMoreBtn type="button" onClick={loadMore}>
      Load More
    </LoadMoreBtn>
  );
};

Button.propTypes = {
  loadMore: PropTypes.func,
};

