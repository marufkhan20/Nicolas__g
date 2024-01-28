import React from "react";
import Cases from "../../components/cases";
import BreadCumb from "../../components/shared/BreadCumb";
import DashboardLayout from "../../components/shared/DashboardLayout";
import Button from "../../components/ui/Button";

const CasesPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="All Cases" page="Cases">
        <div className="flex gap-3">
          <Button href="/cases/add-case">Add Case</Button>
        </div>
      </BreadCumb>

      <Cases />
    </DashboardLayout>
  );
};

export default CasesPage;
