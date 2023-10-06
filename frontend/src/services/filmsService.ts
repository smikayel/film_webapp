import axios from "axios";

export const API_URL = process.env.REACT_APP_API_URL as string;

class FilmService {
  async searchFilm(search: string) {
    const response = await axios.get(API_URL + "films/?title=" + search);
    return response.data;
  }

  async getDetailedFilm(id: number) {
    const response = await axios.get(API_URL + "films/" + id);
    return response.data;
  }

  async getPaginatedResult(pageUrl: string) {
    const response = await axios.get(pageUrl);
    return response.data;
  }
}

const filmServiceInstance = new FilmService();
export default filmServiceInstance;
