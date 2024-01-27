"use client";
import React, { useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

const AddService = () => {
  const [description, setDescription] = useState({
    title: "",
    details: [
      {
        id: 1,
        name: "",
        details: "",
      },
    ],
  });

  // add description details section
  const addDescriptionDetailsSection = () => {
    const id = description?.details[description?.details?.length - 1].id + 1;
    const newDetail = {
      id,
      name: "",
      details: "",
    };

    setDescription({
      title: description?.title,
      details: [...description?.details, newDetail],
    });
  };

  // remove description details section
  const removeDescriptionDetailsSection = (id) => {
    const updatedDescriptionDetails = description?.details?.filter(
      (item) => item?.id !== id
    );

    setDescription({
      title: description?.title,
      details: updatedDescriptionDetails,
    });
  };

  // change description state
  const changeDescriptionState = (name, value, id) => {
    if (name === "title") {
      const updatedDescription = {
        title: value,
        details: description?.details,
      };

      setDescription(updatedDescription);
    } else {
      const updatedDescriptionDetails = description?.details?.map((item) => {
        if (item?.id === id) {
          return {
            ...item,
            [name]: value,
          };
        }
        return item;
      });

      setDescription({
        title: description?.title,
        details: updatedDescriptionDetails,
      });
    }
  };
  return (
    <div className="mt-7 box-shadow rounded-xl p-5">
      <form action="">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input id="title" placeholder="Enter your service title" />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="short-description">Short Desciption *</Label>
            <textarea
              className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
              rows={5}
              id="short-description"
              placeholder="Enter your service short description"
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="thumbnail">Service Thumbnail *</Label>
            <label
              htmlFor=""
              className="bg-primary text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
            >
              Select Thumbnail Image
            </label>
          </div>

          <h4 className="text-xl pt-3 border-t">Description</h4>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description-title">Description Title</Label>
            <Input
              id="description-title"
              onChange={(e) => changeDescriptionState("title", e.target.value)}
              placeholder="Enter your description title"
              value={description.title}
            />
          </div>

          {description?.details?.map((detail) => (
            <div
              className="flex flex-col gap-6 border p-4 rounded-md"
              key={detail?.id}
            >
              <div className="flex flex-col gap-2">
                <Label htmlFor="name">Name</Label>
                <Input
                  value={detail?.name}
                  id="name"
                  placeholder="Enter your name"
                  onChange={(e) =>
                    changeDescriptionState("name", e.target.value, detail?.id)
                  }
                />
              </div>
              <div className="flex flex-col gap-2">
                <Label htmlFor="details">Details</Label>
                <Input id="details" placeholder="Enter details" />
              </div>
              <AiOutlineDelete
                onClick={() => removeDescriptionDetailsSection(detail?.id)}
                className="text-red-600 cursor-pointer"
              />
            </div>
          ))}

          <div>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={addDescriptionDetailsSection}
            >
              Add Details
            </Button>
          </div>

          <h4 className="text-xl pt-3 border-t">Service Extra Details</h4>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description-title">Description Title</Label>
            <Input
              id="description-title"
              onChange={(e) => changeDescriptionState("title", e.target.value)}
              placeholder="Enter your description title"
              value={description.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description-title">Description Title</Label>
            <Input
              id="description-title"
              onChange={(e) => changeDescriptionState("title", e.target.value)}
              placeholder="Enter your description title"
              value={description.title}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="description-title">Description Title</Label>
            <Input
              id="description-title"
              onChange={(e) => changeDescriptionState("title", e.target.value)}
              placeholder="Enter your description title"
              value={description.title}
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddService;
