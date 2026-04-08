import Link from "next/link";
type PaginationProps = {
  currentPage: number;
  totalPages: number;
};

export default function Pagination({ currentPage, totalPages}: PaginationProps) {
  return (
    <nav className="flex items-center justify-center gap-3 py-4">
      {currentPage > 1 ? (
        <Link
          href={`?page=${currentPage - 1}`}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-blue-300"
        >
          Prev
        </Link>
      ) : (
        <span className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-400 cursor-not-allowed">
          Prev
        </span>
      )}
      <span className="text-sm text-slate-600">
        Page {currentPage} of {totalPages}
      </span>
      {currentPage < totalPages ? (
        <Link
          href={`?page=${currentPage + 1}`}
          className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-700 hover:bg-blue-300"
        >
          Next
        </Link>
      ) : (
        <span className="rounded-xl border border-slate-300 px-4 py-2 text-sm text-slate-400 cursor-not-allowed">
          Next
        </span>
      )}
    </nav>
  );
}