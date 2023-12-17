import { useMemo } from "react";

const Pagination = (props) => {
  const { onPageChange, totalCount, siblingCount = 1, currentPage, pageSize } = props;

  const range = (start, end) => {
    let length = end - start + 1;

    return Array.from({ length }, (_, idx) => idx + start);
  };

  const paginationRange = useMemo(() => {
    const totalPageCount = Math.ceil(totalCount / pageSize);

    const totalPageNumbers = siblingCount + 5;

    if (totalPageNumbers >= totalPageCount) {
      return range(1, totalPageCount);
    }

    const leftSiblingIndex = Math.max(currentPage - siblingCount, 1);
    const rightSiblingIndex = Math.min(currentPage + siblingCount, totalPageCount);

    const shouldShowLeftDots = leftSiblingIndex > 2;
    const shouldShowRightDots = rightSiblingIndex < totalPageCount - 2;

    const firstPageIndex = 1;
    const lastPageIndex = totalPageCount;

    if (!shouldShowLeftDots && shouldShowRightDots) {
      let leftItemCount = 3 + 2 * siblingCount;
      let leftRange = range(1, leftItemCount);

      return [...leftRange, "DOTS", totalPageCount];
    }

    if (shouldShowLeftDots && !shouldShowRightDots) {
      let rightItemCount = 3 + 2 * siblingCount;
      let rightRange = range(totalPageCount - rightItemCount + 1, totalPageCount);
      return [firstPageIndex, "DOTS", ...rightRange];
    }

    if (shouldShowLeftDots && shouldShowRightDots) {
      let middleRange = range(leftSiblingIndex, rightSiblingIndex);
      return [firstPageIndex, "DOTS", ...middleRange, "DOTS", lastPageIndex];
    }
  }, [totalCount, pageSize, siblingCount, currentPage]);

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };
  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul className="pagination-container d-flex justify-content-center">
      <li
        className={`${currentPage === 1 ? "disabled " : ""}pagination-item  d-flex align-items-center custom-fs-6`}
        onClick={onPrevious}
      >
        <div className="arrow left" />
      </li>
      {paginationRange.map((pageNumber, i) => {
        if (pageNumber === "DOTS") {
          i++;
          return (
            <li key={i} className="pagination-item d-flex align-items-center custom-fs-6 dots">
              &#8230;
            </li>
          );
        }
        i++;
        return (
          <li
            key={i}
            className={`${currentPage === pageNumber ? "selected " : ""}
            pagination-item d-flex align-items-center custom-fs-6`}
            onClick={() => onPageChange(pageNumber)}
            style={pageNumber >= 10 ? { padding: "0 7.5px" } : {}}
          >
            {pageNumber}
          </li>
        );
      })}

      <li
        className={`${
          currentPage === lastPage ? "disabled " : ""
        }pagination-item  d-flex align-items-center custom-fs-6`}
        onClick={onNext}
      >
        <div className="arrow right" />
      </li>
    </ul>
  );
};
export default Pagination;
