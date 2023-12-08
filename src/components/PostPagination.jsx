import Link from "next/link";

export default function PostPagination({ totalPage, currentPage = 1 }) {
  return (
    <div className="flex gap-4">
      <Link
        href={`/page/${currentPage - 1}`}
        className={`${
          currentPage === 1
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        Prev
      </Link>
      {Array.from({ length: totalPage }).map((_, index) => (
        <Link
          href={`/page/${index + 1}`}
          key={index}
          className={`${
            currentPage === index + 1
              ? "text-gray-600 pointer-events-none"
              : "text-blue-700"
          }`}
        >
          {index + 1}
        </Link>
      ))}
      <Link
        href={`/page/${currentPage + 1}`}
        className={`${
          currentPage === totalPage
            ? "text-gray-600 pointer-events-none"
            : "text-blue-700"
        }`}
      >
        Next
      </Link>
    </div>
  );
}
