import EditCreditCard from "../../../components/forms/credit-card/edit-credit-card";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";

const EditCreditCardPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Edit Credit Card" page="Edit Credit Card" />
      <EditCreditCard />
    </DashboardLayout>
  );
};

export default EditCreditCardPage;
