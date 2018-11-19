const axios = require('axios');

const getLugarLatLng = async(direccion) => {


    let encodeUrl = encodeURI(direccion);

    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyAZ7zantyAHnuNFtheMlJY1VvkRBEjvw9Y`);

    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`);
    }



    let location = resp.data.results[0];

    /*  console.log("Direccion", location.formatted_address);
     console.log("Latitud", location.geometry.location.lat);
     console.log("Longitud", location.geometry.location.lng); */

    /* 
    console.log(JSON.stringify(resp.data, undefined, 2)); */
    /*   console.log(resp.data); */
    /*   console.log(resp.status); */

    return {
        direccion: location.formatted_address,
        lat: location.geometry.location.lat,
        lng: location.geometry.location.lng
    }
}






module.exports = {
    getLugarLatLng
}