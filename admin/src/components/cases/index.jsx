import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetCasesQuery } from "../../app/features/case/caseApi";
import Table from "../shared/Table";

const Cases = () => {
  const { data: cases, isLoading } = useGetCasesQuery();
  return (
    <Table
      headers={["No.", "Thumbnail", "Title", "Category", "Action"]}
      cols="grid-cols-5"
      isLoading={isLoading}
      limit={25}
      // setLimit={setLimit}
      search={""}
      setSearch={() => {}}
      pages={1}
      setPage={() => {}}
      page={1}
      totalItems={cases?.length}
    >
      {cases?.map((caseItem, idx) => (
        <>
          <span className="py-3 pl-4">{idx + 1}</span>
          <span className="py-3">
            <img
              className="w-16 h-16 rounded-xl"
              src={caseItem?.thumbnail}
              alt="service"
            />
          </span>
          <span className="py-3">{caseItem?.title}</span>
          <span className="py-3">{caseItem?.category}</span>
          {/* <span className="py-3">{service?.campDate}</span> */}
          <div className="py-3 pr-4 flex items-center gap-2 ml-2">
            <Link
              to={`/forms/notice/edit-notice/${caseItem?._id}`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              // onClick={() => deleteNotice(notice?._id)}
            >
              {/* {loading ? <Loading className="w-4 h-4" /> : <MdDelete />} */}
              <MdDelete />
            </button>
          </div>
        </>
      ))}
    </Table>
  );
};

export default Cases;
