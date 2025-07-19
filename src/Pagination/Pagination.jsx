import { PAGINATION_BUTTONS_TEXT } from "../lib/Constants";

const Pagination = ({
  noOfPages,
  currentPage,
  handlePrev,
  handlePageChange,
  handleNext,
}) => {
  return (
    <div className="pagination-container">
      <button
        className="pagination-btn"
        onClick={handlePrev}
        disabled={currentPage === 0}
      >
        {PAGINATION_BUTTONS_TEXT.PREV_BUTTON}
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={
            "pagination-btn" +
            (n === currentPage ? " pagination-btn--active" : "")
          }
          key={n}
          onClick={() => {
            handlePageChange(n);
          }}
        >
          {n + 1}
        </button>
      ))}
      <button
        className="pagination-btn"
        onClick={handleNext}
        disabled={currentPage === noOfPages - 1}
      >
        {PAGINATION_BUTTONS_TEXT.NEXT_BUTTON}
      </button>
    </div>
  );
};

export default Pagination;
