import axios from "axios";

export const uploadMediaService = async (imagee) => {
  const form = new FormData();
  form.append("file", imagee);
  form.append("upload_preset", "znblmci9");
  form.append("cloud_name", "dhiurzrrx");
  return new Promise((resolve, reject) => {
    axios
      .post(`https://api.cloudinary.com/v1_1/dhiurzrrx/image/upload`, form, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        if (response.status === 200 || response.status === 201) {
          resolve(response.data.secure_url);
        } else {
          reject("Image uploading failed.");
        }
      })
      .catch(() => {
        reject("Image uploading failed.");
      });
  });
};
