import axios from "axios";
import { BASE_URL,API_KEY_PARAM } from "../config";
// import { FAKE_RECOMMENDATIONS } from "./fake_data";

export class TVShowAPI{
    static async fetchPopulars(){
        const response = await axios.get(`${BASE_URL}tv/popular${API_KEY_PARAM}`)
        return response.data.results;
        //perform requeat
    }
    static async fetchRecommendations(tvShowId){
        const response = await axios.get(`${BASE_URL}tv/${tvShowId}/recommendations${API_KEY_PARAM}`)
        return response.data.results;
        //perform requeat
        // return FAKE_RECOMMENDATIONS;
    }
    static async fetchByTitle(title){
        const response = await axios.get(`${BASE_URL}/search/tv${API_KEY_PARAM}&query=${title}`)
        return response.data.results;
        //perform requeat
        // return FAKE_RECOMMENDATIONS;
    }
}