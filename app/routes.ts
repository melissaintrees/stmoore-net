import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("./routes/layouts/homelayout.tsx", [index("routes/home/index.tsx"),
    route("about", "./routes/about/index.tsx"),
    route("videos", "./routes/videos/index.tsx"),
    route("show", "./routes/show/index.tsx"),
    route("contact", "./routes/contact/index.tsx"),
  ]),
] satisfies RouteConfig;
