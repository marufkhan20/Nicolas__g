import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetServicesQuery } from "../../app/features/service/serviceApi";
import Table from "../shared/Table";

const Services = () => {
  const { data: services, isLoading } = useGetServicesQuery();
  return (
    <Table
      headers={["No.", "Thumbnail", "Title", "Short Description", "Action"]}
      cols="grid-cols-5"
      isLoading={isLoading}
      limit={25}
      // setLimit={setLimit}
      search={""}
      setSearch={() => {}}
      pages={1}
      setPage={() => {}}
      page={1}
      totalItems={services?.length}
    >
      {services?.map((service, idx) => (
        <>
          <span className="py-3 pl-4">{idx + 1}</span>
          <span className="py-3">
            <img
              className="w-16 h-16 rounded-xl"
              src={service?.thumbnail}
              alt="service"
            />
          </span>
          <span className="py-3">{service?.title}</span>
          <span className="py-3">
            {service?.shortDescription?.length > 40
              ? service?.shortDescription?.substr(0, 40) + "..."
              : service?.shortDescription}
          </span>
          {/* <span className="py-3">{service?.campDate}</span> */}
          <div className="py-3 pr-4 flex items-center gap-2 ml-2">
            <Link
              to={`/forms/notice/edit-notice/${service?._id}`}
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

export default Services;
