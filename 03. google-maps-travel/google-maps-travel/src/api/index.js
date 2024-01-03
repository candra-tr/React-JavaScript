import axios from 'axios';
require('dotenv').config();

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary';

const options = {
      method: 'GET',
      params: {
        bl_latitude: '11.847676',
        tr_latitude: '12.838442',
        bl_longitude: '109.095887',
        tr_longitude: '109.149359',
      },
      headers: {
        'X-RapidAPI-Key': process.env.API_KEY,
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    

export const getPlacesData = async () => {
      try {
         const {data: { data }} = await axios.get(URL, options);
         return data;
      }catch(error){
         console.log(error);
      }
}