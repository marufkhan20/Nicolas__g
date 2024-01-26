import { useEffect, useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Tab2 = ({ activeTab, setActiveTab, setDataHandler, creditCardData }) => {
  const [custMobileNo, setCustMobileNo] = useState("");
  const [noticeBalance, setNoticeBalance] = useState("");
  const [overdueAmount, setOverdueAmount] = useState("");
  const [clmName, setClmName] = useState("");
  const [clmNo, setClmNo] = useState("");
  const [limit, setLimit] = useState("");
  const [amountExceededCreditLimit, setAmountExceededCreditLimit] =
    useState("");
  const [conciliatorName, setConciliatorName] = useState("");
  const [campDate, setCampDate] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (creditCardData?._id) {
      setCustMobileNo(creditCardData?.custMobileNo);
      setNoticeBalance(creditCardData?.noticeBalance);
      setOverdueAmount(creditCardData?.overdueAmount);
      setClmName(creditCardData?.clmName);
      setClmNo(creditCardData?.clmNo);
      setLimit(creditCardData?.limit);
      setAmountExceededCreditLimit(creditCardData?.amountExceededCreditLimit);
      setConciliatorName(creditCardData?.conciliatorName);
      setCampDate(creditCardData?.campDate);
    }
  }, [creditCardData]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!custMobileNo) {
      validationError.custMobileNo = "Customer Mobile No is required!!";
    }

    if (!noticeBalance) {
      validationError.noticeBalance = "Notice Balance is required!!";
    }

    if (!overdueAmount) {
      validationError.overdueAmount = "Overdue Amount is required!!";
    }

    if (!clmName) {
      validationError.clmName = "Clm Name is required!!";
    }

    if (!clmNo) {
      validationError.clmNo = "Clm No is required!!";
    }

    if (!limit) {
      validationError.limit = "Limit is required!!";
    }

    if (!amountExceededCreditLimit) {
      validationError.amountExceededCreditLimit =
        "Amount Exceeded Credit Limit is required!!";
    }

    if (!conciliatorName) {
      validationError.conciliatorName = "Conciliator Name is required!!";
    }

    if (!campDate) {
      validationError.campDate = "Camp Date is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler({
      custMobileNo,
      noticeBalance,
      overdueAmount,
      clmName,
      clmNo,
      limit,
      amountExceededCreditLimit,
      conciliatorName,
      campDate,
    });

    setErrors({});

    setActiveTab(activeTab + 1);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="Customer Mobile Number">Customer Mobile Number</Label>
          <Input
            value={custMobileNo}
            onChange={(e) => setCustMobileNo(e.target.value)}
            id="Customer Mobile Number"
          />
          <Error>{errors?.custMobileNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Notice Balance">Notice Balance</Label>
          <Input
            value={noticeBalance}
            onChange={(e) => setNoticeBalance(e.target.value)}
            id="Notice Balance"
          />
          <Error>{errors?.noticeBalance}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Over Due Amount">Over Due Amount</Label>
          <Input
            value={overdueAmount}
            onChange={(e) => setOverdueAmount(e.target.value)}
            id="Over Due Amount"
          />
          <Error>{errors?.overdueAmount}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Clm Name">Clm Name</Label>
          <Input
            value={clmName}
            onChange={(e) => setClmName(e.target.value)}
            id="Clm Name"
          />
          <Error>{errors?.clmName}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Clm No">Clm No</Label>
          <Input
            value={clmNo}
            onChange={(e) => setClmNo(e.target.value)}
            id="Clm No"
          />
          <Error>{errors?.clmNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Limit">Limit</Label>
          <Input
            value={limit}
            onChange={(e) => setLimit(e.target.value)}
            id="Limit"
          />
          <Error>{errors?.limit}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="amountExceededCreditLimit">
            Amount Exceeded Credit Limit
          </Label>
          <Input
            value={amountExceededCreditLimit}
            onChange={(e) => setAmountExceededCreditLimit(e.target.value)}
            id="amountExceededCreditLimit"
          />
          <Error>{errors?.amountExceededCreditLimit}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="conciliatorName">Conciliator Name</Label>
          <Input
            value={conciliatorName}
            onChange={(e) => setConciliatorName(e.target.value)}
            id="conciliatorName"
          />
          <Error>{errors?.conciliatorName}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="campDate">Camp Date</Label>
          <Input
            value={campDate}
            onChange={(e) => setCampDate(e.target.value)}
            type="date"
            id="campDate"
          />
          <Error>{errors?.campDate}</Error>
        </div>
      </div>
      <div className="flex justify-end mt-5 gap-3">
        <Button
          className="bg-red-500 hover:bg-red-600"
          onClick={() => setActiveTab(activeTab - 1)}
        >
          Previous
        </Button>
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Tab2;
