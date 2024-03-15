import axios from "axios";

const registerService = async (data) => {
  try {
    return await axios.post("http://localhost:6969/api/register", {
      name: data.name,
      email: data.email,
      password: data.password,
    });
  } catch (error) {
    console.log(error);
  }
};
const loginService = async (data) => {
  try {
    return await axios.post("http://localhost:6969/api/login", {
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
    return await axios.post("http://localhost:6969/api/create-manga/", {
      name: data.name,
      updatedAt: data.updatedAt,
      lastChapter: data.lastChapter,
      imageUrl: data.imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};
const getAllManga = async () => {
  try {
    const data = await axios.get("http://localhost:6969/api/all-manga");
    return data.data.DT;
  } catch (error) {
    console.log(error);
  }
};
const getManga = async (id) => {
  try {
    return (await axios.get(`http://localhost:6969/api/manga/${id}`)).data.DT;
  } catch (error) {
    console.log(error);
  }
};
const updateManga = async (id, data) => {
  try {
    return await axios.put(`http://localhost:6969/api/update-manga/${id}`, {
      name: data.name,
      updatedAt: data.updatedAt,
      lastChapter: data.lastChapter,
      imageUrl: data.imageUrl,
    });
  } catch (error) {
    console.log(error);
  }
};
const deleteManga = async (id) => {
  try {
    await axios.delete(`http://localhost:6969/api/delete-manga/${id}`);
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
