import axios from "axios";

const registerService = async (data) => {
  try {
    return await axios.post(
      "https://dark-gray-fly-tam.cyclic.app/api/register",
      {
        name: data.name,
        email: data.email,
        password: data.password,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
const loginService = async (data) => {
  try {
    return await axios.post("https://dark-gray-fly-tam.cyclic.app/api/login", {
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  }
};

//manga service
const createManga = async (data) => {
  try {
    return await axios.post(
      "https://dark-gray-fly-tam.cyclic.app/api/create-manga",
      {
        name: data.name,
        updatedAt: data.updatedAt,
        lastChapter: data.lastChapter,
        imageUrl: data.imageUrl,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
const getAllManga = async (page) => {
  try {
    const data = await axios.get(
      `https://dark-gray-fly-tam.cyclic.app/api/all-manga?page=${page}`
    );
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
const getManga = async (id) => {
  try {
    return (
      await axios.get(`https://dark-gray-fly-tam.cyclic.app/api/manga/${id}`)
    ).data.DT;
  } catch (error) {
    console.log(error);
  }
};
const updateManga = async (id, data) => {
  try {
    return await axios.put(
      `https://dark-gray-fly-tam.cyclic.app/api/update-manga/${id}`,
      {
        name: data.name,
        updatedAt: data.updatedAt,
        lastChapter: data.lastChapter,
        imageUrl: data.imageUrl,
      }
    );
  } catch (error) {
    console.log(error);
  }
};
const deleteManga = async (id) => {
  try {
    await axios.delete(
      `https://dark-gray-fly-tam.cyclic.app/api/delete-manga/${id}`
    );
  } catch (error) {
    console.log(error);
  }
};

export {
  registerService,
  loginService,
  createManga,
  getAllManga,
  getManga,
  updateManga,
  deleteManga,
};
