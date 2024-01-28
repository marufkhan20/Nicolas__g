"use client";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { AiOutlineDelete } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useCreateCaseMutation } from "../../../app/features/case/caseApi";
import Button from "../../ui/Button";
import Input from "../../ui/Input";
import Label from "../../ui/Label";

const AddCase = () => {
  const [thumbnail, setThumbnail] = useState("");
  const [title, setTitle] = useState();
  const [category, setCategory] = useState("");
  const [serviceProvided, setServiceProvided] = useState("");
  const [videoUrl, setVideoUrl] = useState("");
  const [projectLogo, setProjectLogo] = useState("");
  const [description, setDescription] = useState();
  const [projectUrl, setProjectUrl] = useState("");
  const [credits, setCredits] = useState([]);

  const [sections, setSections] = useState([]);

  const router = useNavigate();

  // capture thumbnail image
  const captureImage = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setThumbnail(reader.result);
    };
  };

  // capture project logo
  const captureProjectLogo = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      setProjectLogo(reader.result);
    };
  };

  // add new section
  const addNewSection = (type) => {
    // generate id
    const id =
      sections?.length === 0 ? 1 : sections[sections?.length - 1]?.id + 1;

    if (type === "details-section") {
      const section = {
        id,
        type,
        no: "",
        title: "",
        subTitle: "",
        description: "",
      };

      setSections([...sections, section]);
    } else if (type === "image-section") {
      const section = {
        id,
        type,
        image: "",
        container: true,
      };

      setSections([...sections, section]);
    } else if (type === "images-section") {
      const section = {
        id,
        type,
        images: [],
        container: true,
      };

      setSections([...sections, section]);
    } else if (type === "information-section") {
      const section = {
        id,
        type,
        title: "",
        description: "",
      };

      setSections([...sections, section]);
    } else if (type === "video-section") {
      const section = {
        id,
        type,
        videoUrl: "",
      };

      setSections([...sections, section]);
    }
  };

  // change section state
  const changeSectionState = (id, name, value) => {
    const updateSection = async () => {
      if (name === "image" && value instanceof File) {
        const updatedValue = await readImageFile(value);
        updateSectionState(id, name, updatedValue);
      } else if (name === "images") {
        const updatedValue = await readImageFiles(value);
        updateSectionState(id, name, updatedValue);
      } else {
        updateSectionState(id, name, value);
      }
    };

    updateSection();
  };

  const readImageFile = (file) => {
    return new Promise((resolve) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        resolve(reader.result);
      };
    });
  };

  const readImageFiles = (files) => {
    const promises = Array.from(files).map((file) => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
          resolve(reader.result);
        };
      });
    });

    return Promise.all(promises);
  };

  const updateSectionState = (id, name, value) => {
    const updatedSections = sections?.map((section) => {
      if (section?.id === id) {
        return {
          ...section,
          [name]: value,
        };
      } else {
        return section;
      }
    });

    setSections(updatedSections);
  };

  // remove section
  const removeSection = (id) => {
    if (id) {
      const updatedSections = sections?.filter((section) => section?.id !== id);
      setSections(updatedSections);
    }
  };

  // add credit section
  const addCreditSection = () => {
    // generate id
    const id = credits?.length === 0 ? 1 : credits[credits?.length - 1]?.id + 1;

    const newCredit = {
      id,
      positionName: "",
      name: "",
    };

    setCredits([...credits, newCredit]);
  };

  // remove credit section
  const removeCreditSection = (id) => {
    if (id) {
      const updatedCreditSections = credits?.filter(
        (credit) => credit?.id !== id
      );
      setCredits(updatedCreditSections);
    }
  };

  // change credits state
  const changeCreditState = (id, name, value) => {
    if (id) {
      const updatedCredits = credits?.map((credit) => {
        if (credit?.id === id) {
          return {
            ...credit,
            [name]: value,
          };
        } else {
          return credit;
        }
      });

      setCredits(updatedCredits);
    }
  };

  // create new case
  const [createCase, { data: newCase, isLoading, isError, error }] =
    useCreateCaseMutation();

  useEffect(() => {
    if (!isLoading && isError) {
      toast.error(error?.message);
    }

    if (!isLoading && newCase?._id) {
      toast.success("Case Created Successfully");
      router("/cases");
    }
  }, [newCase, isLoading, isError, error, router]);

  // const submit handler
  const submitHandler = (e) => {
    e.preventDefault();

    // console.log("description", description);

    createCase({
      thumbnail,
      title,
      category,
      serviceProvided,
      videoUrl,
      projectLogo,
      description,
      projectUrl,
      credits,
      sections,
    });
  };
  return (
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
            <Label htmlFor="thumbnail">Service Thumbnail *</Label>
            <label
              htmlFor="thumbnail"
              className="bg-green-500 text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
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
          <div className="flex flex-col gap-2">
            <Label htmlFor="Category">Category *</Label>
            <Input
              id="Category"
              placeholder="Enter your service Category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="Service Provided">Service Provided *</Label>
            <Input
              id="Service Provided"
              placeholder="Split using coma ,"
              value={serviceProvided}
              onChange={(e) => setServiceProvided(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="addVideo">Add Video</Label>
            <Input
              id="addVideo"
              placeholder="Enter your video url"
              value={videoUrl}
              type="url"
              onChange={(e) => setVideoUrl(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="project-logo">Project Logo</Label>
            <label
              htmlFor="project-logo"
              className="bg-green-500 text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
            >
              Select Project Logo
            </label>
            <input
              type="file"
              id="project-logo"
              onChange={captureProjectLogo}
              className="hidden"
            />
          </div>

          {projectLogo && (
            <div className="border p-4 rounded-lg">
              <img src={projectLogo} alt="thumbnail" className="rounded-lg" />
            </div>
          )}
          <div className="flex flex-col gap-2">
            <Label htmlFor="description">Desciption *</Label>
            <textarea
              className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
              rows={5}
              id="description"
              placeholder="Enter your description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="addprojecturl">Add Project Url</Label>
            <Input
              id="addprojecturl"
              placeholder="Enter your project url"
              value={projectUrl}
              type="url"
              onChange={(e) => setProjectUrl(e.target.value)}
            />
          </div>

          <h4 className="text-xl pt-3 border-t">Credits</h4>

          {credits?.length > 0 &&
            credits?.map((credit) => (
              <div
                key={credit}
                className="flex flex-col gap-6 border p-4 rounded-md"
              >
                <div className="flex flex-col gap-2">
                  <Label htmlFor="position-name">Position Name</Label>
                  <Input
                    value={credit?.positionName}
                    id="position-name"
                    placeholder="Enter creadit position name"
                    onChange={(e) =>
                      changeCreditState(
                        credit?.id,
                        "positionName",
                        e.target.value
                      )
                    }
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    value={credit?.name}
                    id="name"
                    placeholder="Enter name"
                    onChange={(e) =>
                      changeCreditState(credit?.id, "name", e.target.value)
                    }
                  />
                </div>
                <AiOutlineDelete
                  onClick={() => removeCreditSection(credit?.id)}
                  className="text-red-600 cursor-pointer"
                />
              </div>
            ))}

          <div>
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={addCreditSection}
            >
              Add Credit
            </Button>
          </div>

          <h4 className="text-xl pt-3 border-t">Add Case Details</h4>

          {sections?.length > 0 &&
            sections?.map((section) => {
              return section?.type === "details-section" ? (
                <div
                  className="flex flex-col gap-6 border p-4 rounded-md"
                  key={section?.id}
                >
                  <h4>Details Section</h4>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="No">No</Label>
                    <Input
                      value={section?.no}
                      id="No"
                      placeholder="Enter Section No"
                      onChange={(e) =>
                        changeSectionState(section?.id, "no", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="title">Title</Label>
                    <Input
                      value={section?.title}
                      id="title"
                      placeholder="Enter title"
                      onChange={(e) =>
                        changeSectionState(section?.id, "title", e.target.value)
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="sub-title">Sub Title</Label>
                    <Input
                      value={section?.subTitle}
                      id="sub-title"
                      placeholder="Enter sub title"
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "subTitle",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor="section-Description">Description</Label>
                    <textarea
                      className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                      rows={5}
                      id="section-Description"
                      placeholder="Enter your description"
                      value={section?.description}
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "description",
                          e.target.value
                        )
                      }
                    />
                  </div>
                  <AiOutlineDelete
                    onClick={() => removeSection(section?.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              ) : section?.type === "image-section" ? (
                <div
                  className="flex flex-col gap-6 border p-4 rounded-md"
                  key={section?.id}
                >
                  <h4>Single Image Section</h4>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={section?.id}>Select Image</Label>
                    <label
                      htmlFor={section?.id}
                      className="bg-green-500 text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
                    >
                      Select Section Image
                    </label>
                    <input
                      type="file"
                      id={section?.id}
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "image",
                          e.target.files[0]
                        )
                      }
                      className="hidden"
                    />
                  </div>

                  {section?.image && (
                    <div className="border p-4 rounded-lg">
                      <img
                        src={section?.image}
                        alt="thumbnail"
                        className="rounded-lg"
                      />
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id={`container-${section?.id}`}
                      checked={section?.container}
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "container",
                          !section?.container
                        )
                      }
                    />
                    <Label htmlFor={`container-${section?.id}`}>
                      Container
                    </Label>
                  </div>

                  <AiOutlineDelete
                    onClick={() => removeSection(section?.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              ) : section?.type === "images-section" ? (
                <div
                  className="flex flex-col gap-6 border p-4 rounded-md"
                  key={section?.id}
                >
                  <h4>Multiple Images Section</h4>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={section?.id}>Select Images</Label>
                    <label
                      htmlFor={section?.id}
                      className="bg-green-500 text-white block w-full py-3 px-6 rounded-md cursor-pointer text-center"
                    >
                      Select Section Images
                    </label>
                    <input
                      type="file"
                      id={section?.id}
                      multiple
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "images",
                          e.target.files
                        )
                      }
                      className="hidden"
                    />
                  </div>

                  {section?.images?.length > 0 && (
                    <div className="border p-4 rounded-lg grid grid-cols-4 gap-5">
                      {section?.images?.map((image) => (
                        <img
                          src={image}
                          alt="thumbnail"
                          className="rounded-lg"
                        />
                      ))}
                    </div>
                  )}

                  <div className="flex gap-2">
                    <input
                      type="checkbox"
                      id={`container-${section?.id}`}
                      checked={section?.container}
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "container",
                          !section?.container
                        )
                      }
                    />
                    <Label htmlFor={`container-${section?.id}`}>
                      Container
                    </Label>
                  </div>

                  <AiOutlineDelete
                    onClick={() => removeSection(section?.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              ) : section?.type === "video-section" ? (
                <div
                  className="flex flex-col gap-6 border p-4 rounded-md"
                  key={section?.id}
                >
                  <h4>Video Section</h4>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={section?.id}>Video</Label>
                    <Input
                      value={section?.videoUrl}
                      id={section?.id}
                      type="url"
                      placeholder="Enter Video URL"
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "videoUrl",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <AiOutlineDelete
                    onClick={() => removeSection(section?.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              ) : section?.type === "information-section" ? (
                <div
                  className="flex flex-col gap-6 border p-4 rounded-md"
                  key={section?.id}
                >
                  <h4>Information Section</h4>
                  <div className="flex flex-col gap-2">
                    <Label htmlFor={section?.id}>Title</Label>
                    <Input
                      value={section?.title}
                      id={section?.id}
                      placeholder="Enter Section Title"
                      onChange={(e) =>
                        changeSectionState(section?.id, "title", e.target.value)
                      }
                    />
                  </div>

                  <div className="flex flex-col gap-2">
                    <Label htmlFor={`description-${section?.id}`}>
                      Description
                    </Label>
                    <textarea
                      value={section?.descriptoin}
                      id={`description-${section?.id}`}
                      rows={5}
                      className="text-sm w-full block outline-none p-2 rounded-[7px] focus:ring-1 ring-primary bg-transparent border"
                      placeholder="Enter Section Description"
                      onChange={(e) =>
                        changeSectionState(
                          section?.id,
                          "descriptoin",
                          e.target.value
                        )
                      }
                    />
                  </div>

                  <AiOutlineDelete
                    onClick={() => removeSection(section?.id)}
                    className="text-red-600 cursor-pointer"
                  />
                </div>
              ) : null;
            })}

          <div>
            <select
              name=""
              id=""
              className="border rounded-md py-3 outline-none px-6"
              onChange={(e) => addNewSection(e.target.value)}
            >
              <option value="">Add New Section</option>
              <option value="details-section">Details Section</option>
              <option value="image-section">Image Section</option>
              <option value="images-section">Images Section</option>
              <option value="video-section">Video Section</option>
              <option value="information-section">Information Section</option>
            </select>
          </div>

          <div>
            <Button loading={isLoading} type="submit">
              Create New Case
            </Button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddCase;
