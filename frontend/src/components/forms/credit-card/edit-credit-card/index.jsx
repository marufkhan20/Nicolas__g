import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetCreditCardQuery,
  useUpdateCreditCardMutation,
} from "../../../../app/features/creditCard/creditCardApi";
import Tab1 from "./tabs/Tab1";
import Tab2 from "./tabs/Tab2";
import Tab3 from "./tabs/Tab3";

const tabs = {
  1: Tab1,
  2: Tab2,
  3: Tab3,
};

const EditCreditCard = () => {
  const [activeTab, setActiveTab] = useState(1);
  const Tab = tabs[activeTab];
  const [creditCardData, setCreditCardData] = useState({});

  const router = useNavigate();
  const { id } = useParams();

  // get credit card
  const { data } = useGetCreditCardQuery(id);

  useEffect(() => {
    if (data?._id) {
      setCreditCardData(data);
    }
  }, [data]);

  // update credit card
  const [updateCreditCard, { data: updatedCreditCard, isLoading }] =
    useUpdateCreditCardMutation();

  useEffect(() => {
    if (!isLoading && updatedCreditCard?._id) {
      toast.success("Credit Card Updated Successfully.");
      router("/forms/credit-card");
    }
  }, [updatedCreditCard, isLoading, router]);

  // set data handler
  const setDataHandler = (data, type = "next") => {
    // set data in credit card data state
    setCreditCardData((prevData) => ({ ...prevData, ...data }));

    if (type === "submit") {
      updateCreditCard({
        id,
        data: {
          ...creditCardData,
          ...data,
        },
      });
    }
  };
  return (
    <div className="mt-7 box-shadow rounded-xl p-5">
      <Tab
        setDataHandler={setDataHandler}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
        creditCardData={creditCardData}
      />

      <div className="flex items-center justify-center gap-2 mt-10">
        <div
          className={`w-[14px] h-[14px] rounded-full ${
            activeTab === 1
              ? "bg-[#BBBBBB]"
              : activeTab > 1
              ? "bg-primary"
              : "bg-[#DDDDDD]"
          }`}
        />
        <div
          className={`w-[14px] h-[14px] rounded-full ${
            activeTab === 2
              ? "bg-[#BBBBBB]"
              : activeTab > 2
              ? "bg-primary"
              : "bg-[#DDDDDD]"
          }`}
        />
        <div
          className={`w-[14px] h-[14px] rounded-full ${
            activeTab === 3
              ? "bg-[#BBBBBB]"
              : activeTab > 3
              ? "bg-primary"
              : "bg-[#DDDDDD]"
          }`}
        />
      </div>
    </div>
  );
};

export default EditCreditCard;
