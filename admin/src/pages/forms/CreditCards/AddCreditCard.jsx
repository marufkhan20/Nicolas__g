import AddCreditCard from "../../../components/forms/credit-card/add-credit-card";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";

const AddCreditCardPage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Add Credit Card" page="Add Credit Card" />
      <AddCreditCard />
    </DashboardLayout>
  );
};

export default AddCreditCardPage;
