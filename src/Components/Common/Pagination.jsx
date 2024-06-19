import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import React from "react";
import ReactPaginate from "react-paginate";

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageClick = (data) => {
    const selectedPage = data.selected + 1;
    onPageChange(selectedPage);
  };

  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between sm:hidden">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={currentPage === 1}
        >
          Previous
        </button>

        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700">
            Showing{" "}
            <span className="font-medium">{(currentPage - 1) * 8 + 1}</span> to{" "}
            <span className="font-medium">
              {Math.min(currentPage * 8, totalPages * 8)}
            </span>{" "}
            of <span className="font-medium">{totalPages * 8}</span> results
          </p>
        </div>
        <div>
          <nav
            className="isolate inline-flex -space-x-px rounded-md shadow-sm"
            aria-label="Pagination"
          >
            <ReactPaginate
              previousLabel={
                <ChevronRightIcon className="h-5 w-5" aria-hidden="true" />
              }
              nextLabel={
                <ChevronLeftIcon className="h-5 w-5" aria-hidden="true" />
              }
              breakLabel={"..."}
              breakClassName={"break-me"}
              pageCount={totalPages}
              marginPagesDisplayed={2}
              pageRangeDisplayed={5}
              onPageChange={handlePageClick}
              containerClassName={"pagination"}
              activeClassName={"active"}
              pageClassName="relative z-10 inline-flex items-center border px-4 py-2 text-sm font-medium border-gray-300 bg-white text-gray-500 hover:bg-gray-50"
              activeLinkClassName="border-indigo-500 bg-indigo-50 text-indigo-600"
              previousClassName="relative inline-flex items-center rounded-r-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              nextClassName="relative inline-flex items-center rounded-l-md border border-gray-300 bg-white px-2 py-2 text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-20"
              disabledClassName="disabled"
            />
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
