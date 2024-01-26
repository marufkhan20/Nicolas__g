import { useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Tab3 = ({ activeTab, setActiveTab, setDataHandler, isLoading }) => {
  const [campLocation, setCampLocation] = useState("");
  const [noticeDate, setNoticeDate] = useState("");
  const [referenceNo, setRefenceNo] = useState("");
  const [errors, setErrors] = useState({});

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!campLocation) {
      validationError.campLocation = "Camp Location is required!!";
    }

    if (!noticeDate) {
      validationError.noticeDate = "Notice Date is required!!";
    }

    if (!referenceNo) {
      validationError.referenceNo = "Reference No is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler(
      {
        campLocation,
        noticeDate,
        referenceNo,
      },
      "submit"
    );

    setErrors({});
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="campLocation">Camp Location</Label>
          <Input
            value={campLocation}
            onChange={(e) => setCampLocation(e.target.value)}
            id="campLocation"
          />
          <Error>{errors?.campLocation}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="noticeDate">Notice Date</Label>
          <Input
            value={noticeDate}
            onChange={(e) => setNoticeDate(e.target.value)}
            id="noticeDate"
            type="date"
          />
          <Error>{errors?.noticeDate}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="referenceNo">Reference No</Label>
          <Input
            value={referenceNo}
            onChange={(e) => setRefenceNo(e.target.value)}
            id="referenceNo"
          />
          <Error>{errors?.referenceNo}</Error>
        </div>
      </div>
      <div className="flex justify-end mt-5 gap-3">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Previous
        </Button>
        <Button loading={isLoading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default Tab3;
