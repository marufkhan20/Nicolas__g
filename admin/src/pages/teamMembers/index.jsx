import React from "react";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";
import TeamMembers from "../../components/teamMembers";
import Button from "../../components/ui/Button";

const TeamMembersPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="All Services" page="Services">
        <div className="flex gap-3">
          <Button href="/services/add-service">Add Service</Button>
        </div>
      </BreadCumb>

      <TeamMembers />
    </DashboardLayout>
  );
};

export default TeamMembersPage;
