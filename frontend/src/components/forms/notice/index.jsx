import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { FaFilePdf } from "react-icons/fa";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useDeleteNoticeMutation } from "../../../app/features/notice/noticeApi";
import Loading from "../../../components/shared/Loading";
import Table from "../../../components/shared/Table";

const Notice = ({ refetch, notices, isLoading }) => {
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [pages, setPages] = useState(0);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (notices?.length > 0) {
      // calculate pages
      const totalPages = Math.ceil(notices?.length / limit);
      if (totalPages) {
        setPages(totalPages);
      } else {
        setPages(1);
      }
    }
  }, [notices, limit]);

  useEffect(() => {
    setPage(1);
  }, [limit]);

  console.log("notices", notices);

  // delete notice
  const [deleteNotice, { data: deletedNotice, isLoading: loading }] =
    useDeleteNoticeMutation();

  useEffect(() => {
    if (!loading && deletedNotice?._id) {
      refetch();
      toast.success("Notice deleted successfully.");
    }
  }, [deletedNotice, loading, refetch]);
  return (
    <Table
      headers={["No.", "Name", "Loan No.", "Unique Id", "Date", "Action"]}
      cols="grid-cols-6"
      isLoading={isLoading}
      limit={limit}
      setLimit={setLimit}
      search={search}
      setSearch={setSearch}
      pages={pages}
      setPage={setPage}
      page={page}
      totalItems={notices?.length}
    >
      {notices
        ?.slice(page * limit - limit, limit * page)
        .filter((item) =>
          item?.arqnName
            ? item?.arqnName?.toLowerCase()?.includes(search?.toLowerCase())
            : item?.name
            ? item?.name?.toLowerCase()?.includes(search?.toLowerCase())
            : true
        )
        .map((notice, idx) => (
          <>
            <span className="py-3 pl-4">{idx + 1}</span>
            <span className="py-3">{notice?.arqnName}</span>
            <span className="py-3">{notice?.loanNo}</span>
            <span className="py-3">{notice?.uniqueId}</span>
            <span className="py-3">{notice?.campDate}</span>
            <div className="py-3 pr-4 flex items-center gap-2">
              <Link
                to={`/forms/notice/edit-notice/${notice?._id}`}
                className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
              >
                <MdEdit />
              </Link>
              <button
                className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
                onClick={() => deleteNotice(notice?._id)}
              >
                {loading ? <Loading className="w-4 h-4" /> : <MdDelete />}
              </button>
              <a
                href={`${process.env.REACT_APP_API_URL}${notice?.pdfLink}`}
                target="_blank"
                rel="noreferrer"
              >
                <FaFilePdf />
              </a>
            </div>
          </>
        ))}
    </Table>
  );
};

export default Notice;
