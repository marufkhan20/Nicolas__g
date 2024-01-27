import React from "react";
import AddService from "../../components/services/addService";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";

const AddServicePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Add Service" page="Add Service" />
      <AddService />
    </DashboardLayout>
  );
};

export default AddServicePage;
