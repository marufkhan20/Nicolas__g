const Case = require("../models/Case");
const cloudinary = require("../services/cloudinary");

// get all cases controller
const getAllCasesController = async (req, res) => {
  try {
    // const { _id } = req.user || {};
    const cases = await Case.find();
    res.status(200).json(cases);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// get single case controller
const getSingleCaseController = async (req, res) => {
  try {
    // const { _id } = req.user || {};
    const { id } = req.params || {};
    const caseItem = await Case.findById(id);
    res.status(200).json(caseItem);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// create new case controller
const createNewCaseController = async (req, res) => {
  try {
    const {
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
    } = req.body || {};
    const { _id } = req.user || {};

    // Helper function to upload an image and return a Promise
    const uploadImage = (image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result?.secure_url);
            }
          })
          .end(image);
      });
    };

    const updatedSections = [];

    // update section images
    for (let item of sections) {
      if (item?.type === "image-section" && item?.image) {
        imageSrc = await uploadImage(item?.image);
        updatedSections.push({
          ...item,
          image: imageSrc,
        });
      } else if (item?.type === "images-section" && item?.images?.length > 0) {
        const uploadPromises = item?.images.map((item) => uploadImage(item));
        sectionImagesSrc = await Promise.all(uploadPromises);
        updatedSections.push({
          ...item,
          images: sectionImagesSrc,
        });
      } else {
        updatedSections.push(item);
      }
    }

    // Upload thumbnail image
    let thumbnailSrc;
    if (thumbnail) {
      thumbnailSrc = await uploadImage(thumbnail);
    }

    const newCase = new Case({
      user: _id,
      thumbnail: thumbnailSrc,
      title,
      category,
      serviceProvided,
      videoUrl,
      projectLogo,
      description,
      projectUrl,
      credits,
      sections: updatedSections,
    });

    await newCase.save();

    res.status(201).json(newCase);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// edit case controller
const editCaseController = async (req, res) => {
  try {
    const {
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
    } = req.body || {};
    const { _id } = req.user || {};
    const { id } = req.params || {};

    // Helper function to upload an image and return a Promise
    const uploadImage = (image) => {
      return new Promise((resolve, reject) => {
        cloudinary.uploader
          .upload_stream((error, result) => {
            if (error) {
              reject(error);
            } else {
              resolve(result?.secure_url);
            }
          })
          .end(image);
      });
    };

    const updatedSections = [];

    // update section images
    for (let item of sections) {
      if (item?.type === "image-section" && item?.image) {
        if (!item?.image?.includes("https://res.cloudinary.com/")) {
          imageSrc = await uploadImage(item?.image);
          updatedSections.push({
            ...item,
            image: imageSrc,
          });
        } else {
          updatedSections.push(item);
        }
      } else if (item?.type === "images-section" && item?.images?.length > 0) {
        const uploadPromises = item?.images.map((item) => {
          if (!item?.includes("https://res.cloudinary.com/")) {
            return uploadImage(item);
          }
        });

        if (uploadPromises?.length > 0 && uploadPromises[0] !== undefined) {
          sectionImagesSrc = await Promise.all(uploadPromises);
          updatedSections.push({
            ...item,
            images: sectionImagesSrc,
          });
        } else {
          updatedSections.push(item);
        }
      } else {
        updatedSections.push(item);
      }
    }

    // Upload thumbnail image
    let thumbnailSrc;
    if (thumbnail && !thumbnail?.includes("https://res.cloudinary.com/")) {
      thumbnailSrc = await uploadImage(thumbnail);
    }

    const updatedCase = await Case.findByIdAndUpdate(
      id,
      {
        $set: {
          user: _id,
          thumbnail: thumbnailSrc || thumbnail,
          title,
          category,
          serviceProvided,
          videoUrl,
          projectLogo,
          description,
          projectUrl,
          credits,
          sections: updatedSections,
        },
      },
      { new: true }
    );

    res.status(201).json(updatedCase);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// delete case controller
const deleteCaseController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedCase = await Case.findByIdAndDelete(id);
    res.status(200).json(deletedCase);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllCasesController,
  getSingleCaseController,
  createNewCaseController,
  editCaseController,
  deleteCaseController,
};
