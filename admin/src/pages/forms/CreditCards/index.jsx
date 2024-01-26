import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import {
  useGetCreditCardsQuery,
  useUploadCreditCardInfoMutation,
} from "../../../app/features/creditCard/creditCardApi";
import CreditCard from "../../../components/forms/credit-card";
import BreadCumb from "../../../components/shared/BreadCumb";
import DashboardLayout from "../../../components/shared/DashboardLayout";
import ImportExcelModal from "../../../components/shared/ImportExcelModal";
import Button from "../../../components/ui/Button";

const FormCreditCards = () => {
  const [showImportModal, setShowImportModal] = useState(false);

  // get all credit cards
  const {
    data: creditCards,
    isLoading: isGetLoading,
    refetch,
  } = useGetCreditCardsQuery();

  // upload credit card information
  const [uploadCreditCardInfo, { data, isLoading, error, isError }] =
    useUploadCreditCardInfoMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      console.log("error", error);
    }

    if (!isLoading && !isError && data?.success) {
      refetch();
      toast.success("Credit Card Information Imported Successfully.");
      setShowImportModal(false);
    }
  }, [data, error, isError, isLoading, refetch]);

  // submit handle
  const submitHandler = (file) => {
    if (file) {
      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", "credit-card");
      formData.append("name", file?.name);

      uploadCreditCardInfo(formData);
    }
  };
  return (
    <DashboardLayout>
      <BreadCumb title="Credit Card" page="Credit Card">
        <div className="flex gap-3">
          <Button href="/forms/credit-card/add-credit-card">
            Add Credit Card
          </Button>
          <Button
            className="bg-red-500 hover:bg-red-600"
            onClick={() => setShowImportModal(true)}
          >
            Import Excel
          </Button>
        </div>
      </BreadCumb>

      {/* notices */}
      <CreditCard
        refetch={refetch}
        creditCards={creditCards}
        isLoading={isGetLoading}
      />

      <ImportExcelModal
        showImportModal={showImportModal}
        setShowImportModal={setShowImportModal}
        submitHandler={submitHandler}
        isLoading={isLoading}
      />
    </DashboardLayout>
  );
};

export default FormCreditCards;
