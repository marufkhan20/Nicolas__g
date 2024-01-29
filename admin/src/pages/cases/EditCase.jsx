import React from "react";
import EditCase from "../../components/cases/EditCase";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";

const EditCasePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Edit Case" page="Edit Case" />
      <EditCase />
    </DashboardLayout>
  );
};

export default EditCasePage;
