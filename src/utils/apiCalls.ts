import axios from "axios";
import { inDevelopment } from './helpers'

export async function getImages() {
  const response = await axios.get(
    inDevelopment ? `${process.env.VUE_APP_BASE_URL}/getArtworks.json` : `${process.env.VUE_APP_BASE_URL}/server/artworks`
  );
  return response.data;
}

export async function getCodeProjects() {
  const response = await axios.get(
    inDevelopment ? `${process.env.VUE_APP_BASE_URL}/getCodeProjects.json` : `${process.env.VUE_APP_BASE_URL}/server/code`
  );
  return response.data;
}
