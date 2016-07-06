import Mappersmith from 'mappersmith';
Mappersmith.Env.FIXTURE = true;
Mappersmith.Env.USE_PROMISES = true;

let manifest = {
  host: 'http://api.sitma.com.br/v1',
  resources:{
    access:{
          login:{path: '/login', method: 'post'},
          me:{path: '/me', method: 'get', authorization: 'Bearer'+ ' access_token' }
        }
    },
};

export default manifest;
