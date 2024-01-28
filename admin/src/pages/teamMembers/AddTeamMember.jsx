import React from "react";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";
import AddTeamMember from "../../components/teamMembers/addTeamMember";

const AddTeamMemberPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Add Team Member" page="Add Team Member" />
      <AddTeamMember />
    </DashboardLayout>
  );
};

export default AddTeamMemberPage;
