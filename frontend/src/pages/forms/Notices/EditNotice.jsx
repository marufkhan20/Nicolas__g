import EditNotice from "../../../components/forms/notice/edit-notice";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";

const EditNoticePage = () => {
  return (
    <DashboardLayout>
      <BreadCumb title="Edit Notice" page="Edit Notice" />
      <EditNotice />
    </DashboardLayout>
  );
};

export default EditNoticePage;
