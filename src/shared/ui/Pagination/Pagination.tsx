import styles from './Pagination.module.css';
interface QuestionPaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  totalItems?: number;
  pageSize?: number;
}

const Pagination = ({ currentPage, totalPages, onPageChange }: QuestionPaginationProps) => {
  const getPageNumbers = () => {
    const pages: (number | string)[] = [];
    const delta = 2;

    pages.push(1);

    for (
      let i = Math.max(2, currentPage - delta);
      i <= Math.min(totalPages - 1, currentPage + delta);
      i++
    ) {
      if (pages[pages.length - 1] !== i - 1 && pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
      pages.push(i);
    }

    if (totalPages > 1) {
      if (pages[pages.length - 1] !== totalPages - 1 && pages[pages.length - 1] !== '...') {
        pages.push('...');
      }
      pages.push(totalPages);
    }

    return pages.filter((page, index, arr) => page !== '...' || arr[index - 1] !== '...');
  };

  if (totalPages <= 1) return null;

  return (
    <div>
      <div className={styles.pagination}>
        <button onClick={() => onPageChange(currentPage - 1)} disabled={currentPage === 1}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect x="0.5" y="0.5" width="27" height="27" rx="13.5" stroke="#6A0BFF" />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M12.7749 8.55806C13.019 8.80214 13.019 9.19786 12.7749 9.44194L8.84189 13.375H20.6663C21.0115 13.375 21.2913 13.6548 21.2913 14C21.2913 14.3452 21.0115 14.625 20.6663 14.625H8.84189L12.7749 18.5581C13.019 18.8021 13.019 19.1979 12.7749 19.4419C12.5309 19.686 12.1351 19.686 11.8911 19.4419L6.89107 14.4419C6.64699 14.1979 6.64699 13.8021 6.89107 13.5581L11.8911 8.55806C12.1351 8.31398 12.5309 8.31398 12.7749 8.55806Z"
              fill="#6A0BFF"
            />
          </svg>
        </button>

        <div className={styles.pageNumbers}>
          {getPageNumbers().map((page, index) => (
            <button
              key={index}
              onClick={() => page !== '...' && onPageChange(page as number)}
              disabled={page === '...'}
              className={`${styles.pageButton} ${page === currentPage ? styles.active : ''}`}
            >
              {page}
            </button>
          ))}
        </div>

        <button onClick={() => onPageChange(currentPage + 1)} disabled={currentPage === totalPages}>
          <svg
            width="28"
            height="28"
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="-0.5"
              width="27"
              height="27"
              rx="13.5"
              transform="matrix(1 1.74846e-07 1.74846e-07 -1 8.74228e-08 27)"
              stroke="#6A0BFF"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15.2244 19.4419C15.4685 19.686 15.8642 19.686 16.1083 19.4419L21.1083 14.4419C21.3524 14.1979 21.3524 13.8021 21.1083 13.5581L16.1083 8.55806C15.8642 8.31398 15.4685 8.31398 15.2244 8.55806C14.9803 8.80214 14.9803 9.19787 15.2244 9.44194L19.1575 13.375L7.33301 13.375C6.98783 13.375 6.70801 13.6548 6.70801 14C6.70801 14.3452 6.98783 14.625 7.33301 14.625L19.1575 14.625L15.2244 18.5581C14.9803 18.8021 14.9803 19.1979 15.2244 19.4419Z"
              fill="#6A0BFF"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
