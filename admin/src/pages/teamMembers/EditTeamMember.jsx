import React from "react";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";
import EditTeamMember from "../../components/teamMembers/EditTeamMember";

const EditTeamMemberPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Edit Team Member" page="Edit Team Member" />
      <EditTeamMember />
    </DashboardLayout>
  );
};

export default EditTeamMemberPage;
