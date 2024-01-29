import React from "react";
import EditService from "../../components/services/EditService";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";

const EditServicePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Edit Service" page="Edit Service" />
      <EditService />
    </DashboardLayout>
  );
};

export default EditServicePage;
