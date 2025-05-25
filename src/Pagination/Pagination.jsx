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
        Left Arrow
      </button>
      {[...Array(noOfPages).keys()].map((n) => (
        <button
          className={"pagination-btn" + (n === currentPage ? " active" : "")}
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
        Right Arrow
      </button>
    </div>
  );
};

export default Pagination;
