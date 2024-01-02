import axios from 'axios';

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
        'X-RapidAPI-Key': '54518c8466msh313123d400e6a55p1c0653jsn46b7c0dd7544',
        'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
      }
    };
    

const getPlacesData = async () => {
      try {
         const {data: { data }} = await axios.get(URL, options);
         return data;
      }catch(error){
         console.log(error);
      }
}