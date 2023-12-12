import { LoadMoreButton } from './LoadMore.styled';

const LoadMoreBtn = ({ onClick }) => {
  return (
    <LoadMoreButton type="button" onClick={onClick}>
      Load more
    </LoadMoreButton>
  );
};

export default LoadMoreBtn;
