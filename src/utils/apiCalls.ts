import axios from "axios";
import { env } from './helpers'

export async function getImages() {
  const response = await axios.get(
    env === "development" ? `${process.env.VUE_APP_BASE_URL}/getArtworks.json` : `${process.env.VUE_APP_BASE_URL}/server/artworks`
  );
  return response.data;
}

export async function getCodeProjects() {
  const response = await axios.get(
    env === "development" ? `${process.env.VUE_APP_BASE_URL}/getCodeProjects.json` : `${process.env.VUE_APP_BASE_URL}/server/code`
  );
  return response.data;
}
