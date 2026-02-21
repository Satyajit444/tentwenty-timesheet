import { PaginationProps } from "@/types";

export default function Pagination({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="flex w-fit items-center gap-2 border border-gray-300 rounded-xl bg-white px-2 py-1">

      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="px-3 py-1 disabled:opacity-40"
      >
        Previous
      </button>

      <div className="flex items-center gap-1">
        {pages?.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-md ${
              page === currentPage
                ? "bg-gray-100 text-blue-700"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-1 disabled:opacity-40"
      >
        Next
      </button>
    </div>
  );
}