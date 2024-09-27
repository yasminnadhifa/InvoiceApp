import React from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Button({ content, onClick, disabled }) {
  return (
    <button
      className={`px-3 py-1 border rounded ${disabled ? "text-gray-300 cursor-not-allowed" : "text-primary-500 hover:bg-primary-200"}`}
      onClick={onClick}
      disabled={disabled}
    >
      {content}
    </button>
  );
}

function Pagination({ currentPage, totalPages, onPageChange }) {
  return (
    <div className="flex items-center justify-center space-x-2">
      <Button
        content={<FaChevronLeft />}
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
      />
      {Array.from({ length: totalPages }, (_, index) => (
        <Button
          key={index}
          content={index + 1}
          onClick={() => onPageChange(index + 1)}
          disabled={currentPage === index + 1}
        />
      ))}
      <Button
        content={<FaChevronRight />}
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
      />
    </div>
  );
}

export default Pagination;
