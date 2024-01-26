import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateNoticeMutation } from "../../../../app/features/notice/noticeApi";
import Address from "./tabs/Address";
import Address2 from "./tabs/Address2";
import CustomerInformation from "./tabs/CustomerInformation";
import Information from "./tabs/Information";

const tabs = {
  1: Information,
  2: Address,
  3: Address2,
  4: CustomerInformation,
};

const AddNotice = () => {
  const [activeTab, setActiveTab] = useState(1);
  const Tab = tabs[activeTab];
  const [noticeData, setNoticeData] = useState({});

  const router = useNavigate();

  // create new notice
  const [createNotice, { data: newNotice, isLoading }] =
    useCreateNoticeMutation();

  useEffect(() => {
    console.log("new notice", newNotice);
    if (!isLoading && newNotice?._id) {
      toast.success("Notice Created Successfully.");
      router("/forms/notice");
    }
  }, [newNotice, isLoading, router]);

  // set data handler
  const setDataHandler = (data, type = "next") => {
    // set data in credit card data state
    setNoticeData((prevData) => ({ ...prevData, ...data }));

    if (type === "submit") {
      createNotice({
        ...noticeData,
        ...data,
      });
    }
  };

  return (
    <div className="mt-7 box-shadow rounded-xl p-5">
      <Tab
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        isLoading={isLoading}
        setDataHandler={setDataHandler}
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
        <div
          className={`w-[14px] h-[14px] rounded-full ${
            activeTab === 4
              ? "bg-[#BBBBBB]"
              : activeTab > 4
              ? "bg-primary"
              : "bg-[#DDDDDD]"
          }`}
        />
      </div>
    </div>
  );
};

export default AddNotice;
