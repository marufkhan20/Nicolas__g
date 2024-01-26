import { useEffect, useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Address2 = ({ activeTab, setActiveTab, setDataHandler, noticeData }) => {
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState("");
  const [model, setModel] = useState("");
  const [chasisNo, setChasisNo] = useState("");
  const [engineNo, setEngineNo] = useState("");
  const [regNo, setRegNo] = useState("");
  const [concilator, setConcilator] = useState("");
  const [bankAddress, setBankAddress] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (noticeData?._id) {
      setCity(noticeData?.city);
      setState(noticeData?.state);
      setZipCode(noticeData?.zipCode);
      setModel(noticeData?.model);
      setChasisNo(noticeData?.chasisNo);
      setEngineNo(noticeData?.engineNo);
      setRegNo(noticeData?.regNo);
      setConcilator(noticeData?.concilator);
      setBankAddress(noticeData?.bankAddress);
    }
  }, [noticeData]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!city) {
      validationError.amcitytfin = "Amtfin is required!!";
    }

    if (!state) {
      validationError.state = "State is required!!";
    }

    if (!zipCode) {
      validationError.zipCode = "Zip Code is required!!";
    }

    if (!model) {
      validationError.model = "Model is required!!";
    }

    if (!chasisNo) {
      validationError.chasisNo = "Chasis No is required!!";
    }

    if (!engineNo) {
      validationError.engineNo = "Engine No is required!!";
    }

    if (!regNo) {
      validationError.regNo = "Reg No is required!!";
    }

    if (!concilator) {
      validationError.concilator = "Conocilator 3 is required!!";
    }

    if (!bankAddress) {
      validationError.bankAddress = "Bank Address 4 is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler({
      city,
      state,
      zipCode,
      model,
      chasisNo,
      engineNo,
      regNo,
      concilator,
      bankAddress,
    });

    setErrors({});

    setActiveTab(activeTab + 1);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="01 City">01 City</Label>
          <Input
            id="01 City"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <Error>{errors?.city}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="01 State">01 State</Label>
          <Input
            id="01 State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Error>{errors?.state}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="01 Zip Code">01 Zip Code</Label>
          <Input
            id="01 Zip Code"
            value={zipCode}
            onChange={(e) => setZipCode(e.target.value)}
          />
          <Error>{errors?.zipCode}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Model">Model</Label>
          <Input
            id="Model"
            value={model}
            onChange={(e) => setModel(e.target.value)}
          />
          <Error>{errors?.model}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Chasis No.">Chasis No.</Label>
          <Input
            id="Chasis No."
            value={chasisNo}
            onChange={(e) => setChasisNo(e.target.value)}
          />
          <Error>{errors?.chasisNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Engine No.">Engine No.</Label>
          <Input
            id="Engine No."
            value={engineNo}
            onChange={(e) => setEngineNo(e.target.value)}
          />
          <Error>{errors?.engineNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Reg No.">Reg No.</Label>
          <Input
            id="Reg No."
            value={regNo}
            onChange={(e) => setRegNo(e.target.value)}
          />
          <Error>{errors?.regNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Concilator">Concilator</Label>
          <Input
            id="Concilator"
            value={concilator}
            onChange={(e) => setConcilator(e.target.value)}
          />
          <Error>{errors?.concilator}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Bank Address">Bank Address</Label>
          <Input
            id="Bank Address"
            value={bankAddress}
            onChange={(e) => setBankAddress(e.target.value)}
          />
          <Error>{errors?.bankAddress}</Error>
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

export default Address2;
