import AddNotice from "../../../components/forms/notice/add-notice";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";

const AddNoticePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Add Notice" page="Add Notice" />
      <AddNotice />
    </DashboardLayout>
  );
};

export default AddNoticePage;
