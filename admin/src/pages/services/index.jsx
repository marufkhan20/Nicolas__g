import React from "react";
import Services from "../../components/services";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";
import Button from "../../components/ui/Button";

const ServicesPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="All Services" page="Services">
        <div className="flex gap-3">
          <Button href="/services/add-service">Add Service</Button>
        </div>
      </BreadCumb>

      <Services />
    </DashboardLayout>
  );
};

export default ServicesPage;
