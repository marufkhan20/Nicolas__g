const Service = require("../models/Service");
const cloudinary = require("../services/cloudinary");

// get all services controller
const getAllServicesController = async (req, res) => {
  try {
    // const { _id } = req.user || {};
    const services = await Service.find();
    res.status(200).json(services);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// get single service controller
const getSingleServiceController = async (req, res) => {
  try {
    // const { _id } = req.user || {};
    const { id } = req.params || {};
    const service = await Service.findById(id);
    res.status(200).json(service);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// create new service controller
const createNewServiceController = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      thumbnail,
      description,
      sectionTitle,
      sectionSubTitle,
      sectionDescription,
      sectionImages,
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

    // Upload thumbnail image
    let thumbnailSrc;
    if (thumbnail) {
      thumbnailSrc = await uploadImage(thumbnail);
    }

    // Upload service section images
    let sectionImagesSrc = [];
    if (sectionImages?.length > 0) {
      const uploadPromises = sectionImages.map((item) => uploadImage(item));
      sectionImagesSrc = await Promise.all(uploadPromises);
    }

    const newService = new Service({
      user: _id,
      title,
      shortDescription,
      thumbnail: thumbnailSrc,
      description,
      sectionTitle,
      sectionSubTitle,
      sectionDescription,
      sectionImages: sectionImagesSrc,
    });

    await newService.save();

    res.status(201).json(newService);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// edit service controller
const editServiceController = async (req, res) => {
  try {
    const {
      title,
      shortDescription,
      thumbnail,
      description,
      sectionTitle,
      sectionSubTitle,
      sectionDescription,
      sectionImages,
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

    // Upload thumbnail image
    let thumbnailSrc;
    if (thumbnail && !thumbnail?.includes("https://res.cloudinary.com/")) {
      thumbnailSrc = await uploadImage(thumbnail);
    }

    // Upload service section images
    let sectionImagesSrc = [];
    if (sectionImages?.length > 0) {
      const uploadPromises = sectionImages.map((item) => {
        if (item && !item?.includes("https://res.cloudinary.com/")) {
          return uploadImage(item);
        }
      });
      if (uploadPromises?.length > 0 && !uploadPromises[0] === undefined) {
        sectionImagesSrc = await Promise.all(uploadPromises);
      }
    }

    const updatedService = await Service.findByIdAndUpdate(
      id,
      {
        $set: {
          user: _id,
          title,
          shortDescription,
          thumbnail: thumbnailSrc || thumbnail,
          description,
          sectionTitle,
          sectionSubTitle,
          sectionDescription,
          sectionImages:
            sectionImagesSrc?.length > 0 ? sectionImagesSrc : sectionImages,
        },
      },
      { new: true }
    );

    res.status(201).json(updatedService);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

// delete service controller
const deleteServiceController = async (req, res) => {
  try {
    const { id } = req.params || {};
    const deletedService = await Service.findByIdAndDelete(id);
    res.status(200).json(deletedService);
  } catch (err) {
    console.error(err);
    res.status(500).json(err);
  }
};

module.exports = {
  getAllServicesController,
  getSingleServiceController,
  createNewServiceController,
  editServiceController,
  deleteServiceController,
};
