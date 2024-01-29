import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  useDeleteServiceMutation,
  useGetServicesQuery,
} from "../../app/features/service/serviceApi";
import Loading from "../shared/Loading";
import Table from "../shared/Table";

const Services = () => {
  const { data: services, isLoading } = useGetServicesQuery();

  // delete service
  const [
    deleteService,
    { data: deletedService, isLoading: deleteLoading, isError, error },
  ] = useDeleteServiceMutation();

  useEffect(() => {
    if (!deleteLoading && isError) {
      toast.error(error?.message);
    }

    if (!deleteLoading && !isError && deletedService?._id) {
      toast.success("Service deleted successfully");
    }
  }, [deleteLoading, deletedService, error, isError]);
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
              to={`/services/edit-service/${service?._id}`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              onClick={() => deleteService(service?._id)}
            >
              {deleteLoading ? <Loading className="w-4 h-4" /> : <MdDelete />}
            </button>
          </div>
        </>
      ))}
    </Table>
  );
};

export default Services;
