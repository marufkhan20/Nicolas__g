import { useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const CustomerInformation = ({ activeTab, setActiveTab, setDataHandler }) => {
  const [conciliationDate, setConciliationDate] = useState("");
  const [noticeSentOn, setNoticeSentOn] = useState("");
  const [uniqueId, setUniqueId] = useState("");
  const [allocationDate, setAllocationDate] = useState("");
  const [legalCaseId, setLegalCaseId] = useState("");
  const [mailId, setMailId] = useState("");
  const [mobile, setMobile] = useState("");
  const [legalManager, setLegalManager] = useState("");
  const [remark, setRemark] = useState("");
  const [modeOfDispatch, setModeOfDispatch] = useState("");
  const [errors, setErrors] = useState({});

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!conciliationDate) {
      validationError.conciliationDate = "Conciliation Date is required!!";
    }

    if (!noticeSentOn) {
      validationError.noticeSentOn = "Notice Sent On is required!!";
    }

    if (!uniqueId) {
      validationError.uniqueId = "Unique Id is required!!";
    }

    if (!allocationDate) {
      validationError.allocationDate = "Allocation Date is required!!";
    }

    if (!legalCaseId) {
      validationError.legalCaseId = "Legal Case Id is required!!";
    }

    if (!mailId) {
      validationError.mailId = "Mail Id is required!!";
    }

    if (!mobile) {
      validationError.mobile = "Mobile Number is required!!";
    }

    if (!legalManager) {
      validationError.legalManager = "Legal Manager is required!!";
    }

    if (!remark) {
      validationError.remark = "Remark is required!!";
    }

    if (!modeOfDispatch) {
      validationError.modeOfDispatch = "Mode Of Dispatch is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler(
      {
        conciliationDate,
        noticeSentOn,
        uniqueId,
        allocationDate,
        legalCaseId,
        mailId,
        mobile,
        legalManager,
        remark,
        modeOfDispatch,
      },
      "submit"
    );

    setErrors({});
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="Conciliation Date">Conciliation Date</Label>
          <Input
            id="Conciliation Date"
            value={conciliationDate}
            onChange={(e) => setConciliationDate(e.target.value)}
          />
          <Error>{errors?.conciliationDate}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Notice Sent On">Notice Sent On</Label>
          <Input
            id="Notice Sent On"
            value={noticeSentOn}
            onChange={(e) => setNoticeSentOn(e.target.value)}
          />
          <Error>{errors?.noticeSentOn}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Unique Id">Unique Id</Label>
          <Input
            id="Unique Id"
            value={uniqueId}
            onChange={(e) => setUniqueId(e.target.value)}
          />
          <Error>{errors?.uniqueId}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Allocation Date">Allocation Date</Label>
          <Input
            id="Allocation Date"
            value={allocationDate}
            onChange={(e) => setAllocationDate(e.target.value)}
          />
          <Error>{errors?.allocationDate}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Legal Case Id">Legal Case Id</Label>
          <Input
            id="Legal Case Id"
            value={legalCaseId}
            onChange={(e) => setLegalCaseId(e.target.value)}
          />
          <Error>{errors?.legalCaseId}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Mail Id">Mail Id</Label>
          <Input
            id="Mail Id"
            value={mailId}
            onChange={(e) => setMailId(e.target.value)}
          />
          <Error>{errors?.mailId}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Customer Mob No">Customer Mob No</Label>
          <Input
            id="Customer Mob No"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
          />
          <Error>{errors?.mobile}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Legal Manager">Legal Manager</Label>
          <Input
            id="Legal Manager"
            value={legalManager}
            onChange={(e) => setLegalManager(e.target.value)}
          />
          <Error>{errors?.legalManager}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Remark">Remark</Label>
          <Input
            id="Remark"
            value={remark}
            onChange={(e) => setRemark(e.target.value)}
          />
          <Error>{errors?.remark}</Error>
        </div>
      </div>
      <div className="flex flex-col gap-3 mt-5">
        <Label htmlFor="Mode Of Dispatch">Mode Of Dispatch</Label>
        <Input
          id="Mode Of Dispatch"
          value={modeOfDispatch}
          onChange={(e) => setModeOfDispatch(e.target.value)}
        />
        <Error>{errors?.modeOfDispatch}</Error>
      </div>
      <div className="flex justify-end mt-5 gap-3">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Previous
        </Button>
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default CustomerInformation;
