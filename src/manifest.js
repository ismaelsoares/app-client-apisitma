import Mappersmith from 'mappersmith';
Mappersmith.Env.USE_PROMISES = true;

let manifest = {
  host: 'http://api.sitma.com.br/v1',
  resources:{
    access:{
          post:{path: '/login', method: 'post'},
          me:{path: '/me', method: 'get'}
        }
    },
};

export default manifest;
