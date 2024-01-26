import { useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Information = ({ activeTab, setActiveTab, setDataHandler }) => {
  const [loanNo, setLoanNo] = useState("");
  const [arqnName, setArqnName] = useState("");
  const [product, setProduct] = useState("");
  const [branchAdd, setBranchAdd] = useState("");
  const [state, setState] = useState("");
  const [region, setRegion] = useState("");
  const [callManager, setCallManager] = useState("");
  const [clmMob, setClmMob] = useState("");
  const [npaStage, setNpaStage] = useState("");
  const [errors, setErrors] = useState({});

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!loanNo) {
      validationError.loanNo = "Loan No is required!!";
    }

    if (!arqnName) {
      validationError.arqnName = "Name is required!!";
    }

    if (!product) {
      validationError.product = "Aan No is required!!";
    }

    if (!branchAdd) {
      validationError.branchAdd = "Branch is required!!";
    }

    if (!state) {
      validationError.state = "State is required!!";
    }

    if (!region) {
      validationError.region = "Region is required!!";
    }

    if (!callManager) {
      validationError.callManager = "Call Manager is required!!";
    }

    if (!clmMob) {
      validationError.clmMob = "CLM Mobile Number is required!!";
    }

    if (!npaStage) {
      validationError.npaStage = "Stage is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler({
      loanNo,
      arqnName,
      product,
      branchAdd,
      state,
      region,
      callManager,
      clmMob,
      npaStage,
    });

    setErrors({});

    setActiveTab(activeTab + 1);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="loan-no">Loan No.</Label>
          <Input
            id="loan-no"
            value={loanNo}
            onChange={(e) => setLoanNo(e.target.value)}
          />
          <Error>{errors?.loanNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="name">Customer Name</Label>
          <Input
            id="name"
            value={arqnName}
            onChange={(e) => setArqnName(e.target.value)}
          />
          <Error>{errors?.arqnName}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="product">Product</Label>
          <Input
            id="product"
            value={product}
            onChange={(e) => setProduct(e.target.value)}
          />
          <Error>{errors?.product}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Branch">Branch</Label>
          <Input
            id="Branch"
            value={branchAdd}
            onChange={(e) => setBranchAdd(e.target.value)}
          />
          <Error>{errors?.branchAdd}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="State">State</Label>
          <Input
            id="State"
            value={state}
            onChange={(e) => setState(e.target.value)}
          />
          <Error>{errors?.state}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Region">Region</Label>
          <Input
            id="Region"
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
          <Error>{errors?.region}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Call-Manager">Call Manager</Label>
          <Input
            id="Call-Manager"
            value={callManager}
            onChange={(e) => setCallManager(e.target.value)}
          />
          <Error>{errors?.callManager}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Mobile-Clm">Mobile Clm</Label>
          <Input
            id="Mobile-Clm"
            value={clmMob}
            onChange={(e) => setClmMob(e.target.value)}
          />
          <Error>{errors?.clmMob}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Npa Stage">Npa Stage</Label>
          <Input
            id="Npa Stage"
            value={npaStage}
            onChange={(e) => setNpaStage(e.target.value)}
          />
          <Error>{errors?.npaStage}</Error>
        </div>
      </div>
      <div className="flex justify-end mt-5">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Information;
