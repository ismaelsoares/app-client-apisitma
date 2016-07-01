import Mappersmith from 'mappersmith';
Mappersmith.Env.FIXTURE = true;
Mappersmith.Env.USE_PROMISES = true;

let Manifest = {
  host: 'http://api.sitma.com.br/v1',
  resources:{
    access:{
          login:{path: '/login', method: 'post'}
        }
    },
};



export default Manifest;
