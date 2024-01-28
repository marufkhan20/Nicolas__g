"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useCreateTeamMemberMutation } from "../../../app/features/teamMember/teamMemberApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

const AddTeamMember = () => {
  const [profilePic, setProfilePic] = useState("");
  const [name, setName] = useState();
  const [description, setDescription] = useState();
  const [position, setPosition] = useState();

  const router = useNavigate();

  // capture profile image
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProfilePic(reader.result);
    };
  };

  // create new team member
  const [createTeamMember, { data: newTeamMember, isLoading, isError, error }] =
    useCreateTeamMemberMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      toast.error(error?.message);
    }

    if (!isLoading && newTeamMember?._id) {
      toast.success("Team Member Created Successfully");
      router("/team-members");
    }
  }, [newTeamMember, isLoading, isError, error, router]);

  // const submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    createTeamMember({
      name,
      profilePic,
      description,
      position,
    });
  };
  return (
    <div className="mt-7 box-shadow rounded-xl p-5">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="Name">Name *</Label>
            <Input
              id="Name"
              placeholder="Enter your team member name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="Position">Position *</Label>
            <Input
              id="Position"
              placeholder="Enter your team member position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="thumbnail">Profile Pic *</Label>
            <label
              htmlFor="thumbnail"
              className="bg-primary text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
            >
              Select Profile Pic
            </label>
            <input
              type="file"
              id="thumbnail"
              onChange={captureImage}
              className="hidden"
            />
          </div>

          {profilePic && (
            <div className="border p-4 rounded-lg">
              <img
                src={profilePic}
                alt="thumbnail"
                className="w-20 h-20 rounded-full"
              />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Desciption *</Label>
            <textarea
              className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
              rows={5}
              id="short-description"
              placeholder="Enter your team member description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div>
            <Button loading={isLoading} type="submit">
              Create Member
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddTeamMember;
