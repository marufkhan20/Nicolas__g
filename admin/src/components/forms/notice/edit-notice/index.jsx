import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetNoticeQuery,
  useUpdateNoticeMutation,
} from "../../../../app/features/notice/noticeApi";
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

const EditNotice = () => {
  const [activeTab, setActiveTab] = useState(1);
  const Tab = tabs[activeTab];
  const [noticeData, setNoticeData] = useState({});

  const router = useNavigate();

  const { id } = useParams();

  // get credit card
  const { data } = useGetNoticeQuery(id);

  useEffect(() => {
    if (data?._id) {
      setNoticeData(data);
    }
  }, [data]);

  // update notice
  const [updateNotice, { data: updatedNotice, isLoading }] =
    useUpdateNoticeMutation();

  useEffect(() => {
    if (!isLoading && updatedNotice?._id) {
      toast.success("Notice Updated Successfully.");
      router("/forms/notice");
    }
  }, [updatedNotice, isLoading, router]);

  // set data handler
  const setDataHandler = (data, type = "next") => {
    // set data in notice data state
    setNoticeData((prevData) => ({ ...prevData, ...data }));

    if (type === "submit") {
      updateNotice({
        id,
        data: {
          ...noticeData,
          ...data,
        },
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
        noticeData={noticeData}
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

export default EditNotice;
