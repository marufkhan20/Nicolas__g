import React from "react";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import { useGetTeamMembersQuery } from "../../app/features/teamMember/teamMemberApi";
import Table from "../shared/Table";

const TeamMembers = () => {
  const { data: teaMembers, isLoading } = useGetTeamMembersQuery();
  return (
    <Table
      headers={["No.", "Profile Pic", "Name", "Position", "Action"]}
      cols="grid-cols-5"
      isLoading={isLoading}
      limit={25}
      setLimit={() => {}}
      search={""}
      setSearch={() => {}}
      pages={1}
      setPage={() => {}}
      page={1}
      totalItems={teaMembers?.length}
    >
      {teaMembers?.map((teamMember, idx) => (
        <>
          <span className="py-3 pl-4">{idx + 1}</span>
          <span className="py-3">
            <img
              className="w-16 h-16 rounded-full"
              src={teamMember?.profilePic}
              alt="service"
            />
          </span>
          <span className="py-3">{teamMember?.name}</span>
          <span className="py-3">{teamMember?.position}</span>
          {/* <span className="py-3">{service?.campDate}</span> */}
          <div className="py-3 pr-4 flex items-center gap-2 ml-2">
            <Link
              to={`/forms/notice/edit-notice/${teamMember?._id}`}
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

export default TeamMembers;
