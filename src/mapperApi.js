import mappersmith from 'mappersmith';
import manifest from './manifest';

let MapperApi= {
  login(username, password){
    return new Promisse(function(resolve, reject){
      manifest.Post({username: username, password: password})
        .then((resp) => resolve(resp.data))
        .catch((errResp) => reject(errResp.data));
    });
  }
};

export default MapperApi;
