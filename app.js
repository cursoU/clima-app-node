const lugar = require('./lugar/lugar');
const temperatura = require('./clima/clima');

const argv = require('yargs').option({
    direccion: {
        alias: 'd',
        desc: 'Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;

let getInfo = async(direccion) => {

    try {
        let coors = await lugar.getLugarLatLng(direccion);
        let temp = await temperatura.getClima(coors.lat, coors.lng);
        console.log(temp);
        return `El clima en ${coors.direccion} es de ${temp}`;
    } catch (error) {
        return `no se pudo determinar el clima en ${direccion}`;
    }

}

getInfo(argv.direccion)
    .then(resp => console.log(resp))
    .catch(err => console.log(err))

/* lugar.getLugarLatLng(argv.direccion)
    .then(resp => {
          console.log(resp) 

    })
    .catch(err => console.log(err));


temperatura.getClima(resp.lag, resp.lng)
    .then(resp => console.log(resp))
    .catch(err => console.log(err)); */
/* 
console.log(argv.direccion); */