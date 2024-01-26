import { useEffect, useState } from "react";
import Button from "../../../../../components/ui/Button";
import Error from "../../../../../components/ui/Error";
import Input from "../../../../../components/ui/Input";
import Label from "../../../../../components/ui/Label";

const Tab1 = ({ activeTab, setActiveTab, setDataHandler, creditCardData }) => {
  const [hub, setHub] = useState("");
  const [location, setLocation] = useState("");
  const [aanNo, setAanNo] = useState("");
  const [maskNo, setMaskNo] = useState("");
  const [product, setProduct] = useState("");
  const [activity, setActivity] = useState("");
  const [custName, setCustName] = useState("");
  const [customerAddress, setCustomerAddress] = useState("");
  const [emailId, setEmailId] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (creditCardData?._id) {
      setHub(creditCardData?.hub);
      setLocation(creditCardData?.location);
      setAanNo(creditCardData?.aanNo);
      setMaskNo(creditCardData?.maskNo);
      setProduct(creditCardData?.product);
      setActivity(creditCardData?.activity);
      setCustName(creditCardData?.custName);
      setCustomerAddress(creditCardData?.customerAddress);
      setEmailId(creditCardData?.emailId);
    }
  }, [creditCardData]);

  // submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // check validation
    const validationError = {};

    if (!hub) {
      validationError.hub = "Hub is required!!";
    }

    if (!location) {
      validationError.location = "Location is required!!";
    }

    if (!aanNo) {
      validationError.aanNo = "Aan No is required!!";
    }

    if (!maskNo) {
      validationError.maskNo = "Mask No is required!!";
    }

    if (!product) {
      validationError.product = "Product is required!!";
    }

    if (!activity) {
      validationError.activity = "Activity is required!!";
    }

    if (!custName) {
      validationError.custName = "Customer Name is required!!";
    }

    if (!customerAddress) {
      validationError.customerAddress = "Customer Address is required!!";
    }

    if (!emailId) {
      validationError.emailId = "Email is required!!";
    }

    if (Object.keys(validationError).length > 0) {
      return setErrors(validationError);
    }

    setDataHandler({
      hub,
      location,
      aanNo,
      maskNo,
      product,
      activity,
      custName,
      customerAddress,
      emailId,
    });

    setErrors({});

    setActiveTab(activeTab + 1);
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        <div className="flex flex-col gap-3">
          <Label htmlFor="hub">Hub</Label>
          <Input
            value={hub}
            onChange={(e) => setHub(e.target.value)}
            id="hub"
          />
          <Error>{errors?.hub}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Location">Location</Label>
          <Input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            id="Location"
          />
          <Error>{errors?.location}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Aan">Aan</Label>
          <Input
            value={aanNo}
            onChange={(e) => setAanNo(e.target.value)}
            id="Aan"
          />
          <Error>{errors?.aanNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Mask No">Mask No</Label>
          <Input
            value={maskNo}
            onChange={(e) => setMaskNo(e.target.value)}
            id="Mask No"
          />
          <Error>{errors?.maskNo}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Product">Product</Label>
          <Input
            value={product}
            onChange={(e) => setProduct(e.target.value)}
            id="Product"
          />
          <Error>{errors?.product}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Activity">Activity</Label>
          <Input
            value={activity}
            onChange={(e) => setActivity(e.target.value)}
            id="Activity"
          />
          <Error>{errors?.activity}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Customer Name">Customer Name</Label>
          <Input
            value={custName}
            onChange={(e) => setCustName(e.target.value)}
            id="Customer Name"
          />
          <Error>{errors?.custName}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Customer Address">Customer Address</Label>
          <Input
            value={customerAddress}
            onChange={(e) => setCustomerAddress(e.target.value)}
            id="Customer Address"
          />
          <Error>{errors?.customerAddress}</Error>
        </div>
        <div className="flex flex-col gap-3">
          <Label htmlFor="Email">Email</Label>
          <Input
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
            id="Email"
          />
          <Error>{errors?.emailId}</Error>
        </div>
      </div>
      <div className="flex justify-end mt-5 gap-3">
        <Button type="submit">Next</Button>
      </div>
    </form>
  );
};

export default Tab1;
