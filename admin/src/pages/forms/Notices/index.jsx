import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetNoticesQuery,
  useUploadNoticeInfoMutation,
} from "../../../app/features/notice/noticeApi";
import Notice from "../../../components/forms/notice";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";
import ImportExcelModal from "../../../components/shared/ImportExcelModal";
import Button from "../../../components/ui/Button";

const FormNotices = () => {
  const [showImportModal, setShowImportModal] = useState(false);

  // get all notices
  const {
    data: notices,
    isLoading: isGetLoading,
    refetch,
  } = useGetNoticesQuery();

  // upload notice information
  const [uploadNoticeInfo, { data, isLoading, error, isError }] =
    useUploadNoticeInfoMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      console.log("error", error);
    }

    if (!isLoading && !isError && data?.success) {
      refetch();
      toast.success("Notice Information Imported Successfully.");
      setShowImportModal(false);
    }
  }, [data, error, isError, isLoading, refetch]);

  // submit handle
  const submitHandler = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "notice");
      formData.append("name", file?.name);

      uploadNoticeInfo(formData);
    }
  };
  return (
    <DashboardLayout>
      <BreadCumb title="Notice Concialation" page="Notice">
        <div className="flex gap-3">
          <Button href="/forms/notice/add-notice">Add Notice</Button>
          <Button
            onClick={() => setShowImportModal(true)}
            className="bg-red-500 hover:bg-red-600"
          >
            Import Excel
          </Button>
        </div>
      </BreadCumb>

      {/* notices */}
      <Notice refetch={refetch} notices={notices} isLoading={isGetLoading} />

      <ImportExcelModal
        showImportModal={showImportModal}
        setShowImportModal={setShowImportModal}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
};

export default FormNotices;
