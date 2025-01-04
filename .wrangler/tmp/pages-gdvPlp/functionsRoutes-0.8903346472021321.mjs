import { onRequest as __api_helloworld_js_onRequest } from "/Users/chanel/code/portfolio.chanelmunez.github.io/functions/api/helloworld.js"
import { onRequest as __helloworld_js_onRequest } from "/Users/chanel/code/portfolio.chanelmunez.github.io/functions/helloworld.js"

export const routes = [
    {
      routePath: "/api/helloworld",
      mountPath: "/api",
      method: "",
      middlewares: [],
      modules: [__api_helloworld_js_onRequest],
    },
  {
      routePath: "/helloworld",
      mountPath: "/",
      method: "",
      middlewares: [],
      modules: [__helloworld_js_onRequest],
    },
  ]