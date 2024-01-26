import { useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Address = ({ activeTab, setActiveTab, setDataHandler }) => {
  const [amtfin, setAmtfin] = useState("");
  const [emi, setEmi] = useState("");
  const [tenture, setTenture] = useState("");
  const [disbDate, setDisbDate] = useState("");
  const [totalDue, setTotalDue] = useState("");
  const [address, setAddress] = useState("");
  const [customerName2, setCustomerName2] = useState("");
  const [address3, setAddress3] = useState("");
  const [address4, setAddress4] = useState("");
  const [errors, setErrors] = useState("");

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!amtfin) {
      validationError.amtfin = "Amtfin is required!!";
    }

    if (!emi) {
      validationError.emi = "Emi is required!!";
    }

    if (!tenture) {
      validationError.tenture = "Tenture is required!!";
    }

    if (!disbDate) {
      validationError.disbDate = "Disb Date is required!!";
    }

    if (!totalDue) {
      validationError.totalDue = "Total Due is required!!";
    }

    if (!address) {
      validationError.address = "Address is required!!";
    }

    if (!customerName2) {
      validationError.customerName2 = "Customer Name is required!!";
    }

    if (!address3) {
      validationError.address3 = "Address 3 is required!!";
    }

    if (!address4) {
      validationError.address4 = "Address 4 is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler({
      amtfin,
      emi,
      tenture,
      disbDate,
      totalDue,
      address,
      customerName2,
      address3,
      address4,
    });

    setErrors({});

    setActiveTab(activeTab + 1);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="amtfin">Amtfin</Label>
          <Input
            id="amtfin"
            value={amtfin}
            onChange={(e) => setAmtfin(e.target.value)}
          />
          <Error>{errors?.amtfin}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Emi">Emi</Label>
          <Input
            id="Emi"
            value={emi}
            onChange={(e) => setEmi(e.target.value)}
          />
          <Error>{errors?.emi}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Tenture">Tenture</Label>
          <Input
            id="Tenture"
            value={tenture}
            onChange={(e) => setTenture(e.target.value)}
          />
          <Error>{errors?.tenture}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Disb Date">Disb Date</Label>
          <Input
            id="Disb Date"
            value={disbDate}
            onChange={(e) => setDisbDate(e.target.value)}
          />
          <Error>{errors?.disbDate}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Total due">Total due</Label>
          <Input
            id="Total due"
            value={totalDue}
            onChange={(e) => setTotalDue(e.target.value)}
          />
          <Error>{errors?.totalDue}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Adress1">Adress1</Label>
          <Input
            id="Adress1"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
          <Error>{errors?.address}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="customer-name-2">Customer Name 2</Label>
          <Input
            id="customer-name-2"
            value={customerName2}
            onChange={(e) => setCustomerName2(e.target.value)}
          />
          <Error>{errors?.customerName2}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="01address3">01 Address 3</Label>
          <Input
            id="01address3"
            value={address3}
            onChange={(e) => setAddress3(e.target.value)}
          />
          <Error>{errors?.address3}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="01 Address 4">01 Address 4</Label>
          <Input
            id="01 Address 4"
            value={address4}
            onChange={(e) => setAddress4(e.target.value)}
          />
          <Error>{errors?.address4}</Error>
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

export default Address;
