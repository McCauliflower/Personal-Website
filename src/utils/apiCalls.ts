import axios from "axios";

export async function getImages() {
  const response = await axios.get(
    `${process.env.VUE_APP_BASE_URL}/getArtworks.json`
  );
  return response.data;
}

export async function getCodeProjects() {
  const response = await axios.get(
    `${process.env.VUE_APP_BASE_URL}/getCodeProjects.json`
  );
  return response.data;
}
