import React from "react";
import AddCase from "../../components/cases/addCase";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";

const AddCasePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Add Case" page="Add Case" />
      <AddCase />
    </DashboardLayout>
  );
};

export default AddCasePage;
