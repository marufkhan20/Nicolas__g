import React, { useEffect } from "react";
import toast from "react-hot-toast";
import { MdDelete, MdEdit } from "react-icons/md";
import { Link } from "react-router-dom";
import {
  useDeleteTeamMemberMutation,
  useGetTeamMembersQuery,
} from "../../app/features/teamMember/teamMemberApi";
import Loading from "../shared/Loading";
import Table from "../shared/Table";

const TeamMembers = () => {
  const { data: teaMembers, isLoading } = useGetTeamMembersQuery();

  // delete team member
  const [
    deleteTeamMember,
    { data: deletedTeamMember, isLoading: deleteLoading, isError, error },
  ] = useDeleteTeamMemberMutation();

  useEffect(() => {
    if (!deleteLoading && isError) {
      toast.error(error?.message);
    }

    if (!deleteLoading && !isError && deletedTeamMember?._id) {
      toast.success("Team Member deleted successfully");
    }
  }, [deleteLoading, deletedTeamMember, error, isError]);
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
              to={`/team-members/edit-member/${teamMember?._id}`}
              className="rounded py-[6px] px-2 bg-primary text-white cursor-pointer"
            >
              <MdEdit />
            </Link>
            <button
              className="rounded py-[6px] px-2 bg-red-500 text-white cursor-pointer"
              onClick={() => deleteTeamMember(teamMember?._id)}
            >
              {deleteLoading ? <Loading className="w-4 h-4" /> : <MdDelete />}
            </button>
          </div>
        </>
      ))}
    </Table>
  );
};

export default TeamMembers;
