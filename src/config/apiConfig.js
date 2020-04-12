
// let ip = "127.0.0.1";
// let port = 8080;
// let origin = ip + ":" + port;
// let wsUrl = window.location.protocol === "http:"? "ws://" : "wss://";
// let baseUrl = window.location.protocol + "//" + origin;
// let base_wsUrl = wsUrl + origin;

let apiConfig;

function initApiConfig(){
  return {
    user: {
      loginUrl: "/login",
    }
  };
}

apiConfig = initApiConfig();

export {
  apiConfig
}
