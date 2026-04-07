import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/homelayout.tsx", [index("routes/home/index.tsx"),
 
  ]),
] satisfies RouteConfig;
