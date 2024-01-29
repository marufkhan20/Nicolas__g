"use client";
import { Editor } from "@tinymce/tinymce-react";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetServiceQuery,
  useUpdateServiceMutation,
} from "../../app/features/service/serviceApi";
import Loading from "../shared/Loading";
import Button from "../ui/Button";
import Input from "../ui/Input";
import Label from "../ui/Label";

const EditService = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState();
  const [shortDescription, setShortDescription] = useState();
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
  const [sectionTitle, setSectionTitle] = useState("");
  const [sectionSubTitle, setSectionSubTitle] = useState();
  const [sectionDescription, setSectionDescription] = useState();
  const [sectionImages, setSectionImages] = useState([]);

  const { id } = useParams();

  // get single service
  const { data: service, isLoading: serviceLoading } = useGetServiceQuery(id);

  useEffect(() => {
    if (!serviceLoading && service?._id) {
      setThumbnail(service?.thumbnail);
      setTitle(service?.title);
      setShortDescription(service?.shortDescription);
      setDescription(service?.description);
      setSectionTitle(service?.sectionTitle);
      setSectionSubTitle(service?.sectionSubTitle);
      setSectionDescription(service?.sectionDescription);
      setSectionImages(service?.sectionImages);
    }
  }, [service, serviceLoading]);

  const router = useNavigate();

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

  // capture thumbnail image
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setThumbnail(reader.result);
    };
  };

  // capture section images
  const captureImages = (e) => {
    const files = e.target.files;

    const promises = Array.from(files).map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
          const singleFile = reader.result;
          resolve(singleFile);
        };
      });
    });

    Promise.all(promises)
      .then((images) => {
        setSectionImages(images);
      })
      .catch((error) => {
        console.error("Error reading files:", error);
      });
  };

  // edit service
  const [updateService, { data: updatedService, isLoading, isError, error }] =
    useUpdateServiceMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      toast.error(error?.message);
    }

    if (!isLoading && updatedService?._id) {
      toast.success("Service Updated Successfully");
      router("/services");
    }
  }, [updatedService, isLoading, isError, error, router]);

  // const submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    const updatedDetails = description?.details?.map((item) => {
      if (typeof item?.details === "string") {
        return item;
      } else {
        return {
          ...item,
          details: item?.details?.level?.content,
        };
      }
    });

    updateService({
      id,
      data: {
        title,
        shortDescription,
        thumbnail,
        description: { title: description?.title, details: updatedDetails },
        sectionTitle,
        sectionSubTitle,
        sectionDescription,
        sectionImages,
      },
    });
  };
  return serviceLoading ? (
    <div className="w-full min-h-screen flex items-center justify-center">
      <Loading />
    </div>
  ) : (
    <div className="mt-7 box-shadow rounded-xl p-5">
      <form onSubmit={submitHandler}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title">Title *</Label>
            <Input
              id="title"
              placeholder="Enter your service title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="short-description">Short Desciption *</Label>
            <textarea
              className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
              rows={5}
              id="short-description"
              placeholder="Enter your service short description"
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="thumbnail">Service Thumbnail *</Label>
            <label
              htmlFor="thumbnail"
              className="bg-primary text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
            >
              Select Thumbnail Image
            </label>
            <input
              type="file"
              id="thumbnail"
              onChange={captureImage}
              className="hidden"
            />
          </div>

          {thumbnail && (
            <div className="border p-4 rounded-lg">
              <img src={thumbnail} alt="thumbnail" className="rounded-lg" />
            </div>
          )}

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
                <Editor
                  initialValue={detail?.details}
                  onChange={(content, editor) => {
                    console.log("content", content?.level?.content);
                    changeDescriptionState("details", content, detail?.id);
                  }}
                  init={{
                    height: 300,
                    menubar: false,
                    plugins: [
                      "advlist autolink lists link image charmap print preview anchor",
                      "searchreplace visualblocks code fullscreen",
                      "insertdatetime media table paste code help wordcount",
                    ],
                    toolbar:
                      "undo redo | formatselect | " +
                      "bold italic backcolor | alignleft aligncenter " +
                      "alignright alignjustify | bullist numlist outdent indent | " +
                      "removeformat | help",
                    content_style:
                      "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
                  }}
                />
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
            <Label htmlFor="section-title">Section Title</Label>
            <Input
              id="section-title"
              onChange={(e) => setSectionTitle(e.target.value)}
              placeholder="Enter your section title"
              value={sectionTitle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="section-sub-title">Section Sub Title</Label>
            <Input
              id="section-sub-title"
              onChange={(e) => setSectionSubTitle(e.target.value)}
              placeholder="Enter your section sub title"
              value={sectionSubTitle}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="section-description">Section Description</Label>
            <textarea
              className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
              rows={5}
              id="section-description"
              placeholder="Enter your section description"
              value={sectionDescription}
              onChange={(e) => setSectionDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="section-images">Section Images</Label>
            <label
              htmlFor="section-images"
              className="bg-primary text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
            >
              Select Section Images
            </label>
            <input
              type="file"
              id="section-images"
              onChange={captureImages}
              multiple
              className="hidden"
            />
          </div>

          {sectionImages?.length > 0 && (
            <div className="border p-4 rounded-lg grid grid-cols-5 gap-8">
              {sectionImages?.map((image) => (
                <img
                  src={image}
                  key={image}
                  alt="thumbnail"
                  className="rounded-lg"
                />
              ))}
            </div>
          )}

          <div>
            <Button loading={isLoading} type="submit">
              Update Service
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditService;
