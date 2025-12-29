import {
  isRouteErrorResponse,
  Links,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";

import type { Route } from "./+types/root";
import "./app.css";
import Navbar from './components/Navbar';
import Footer from './components/Footer';

export const links: Route.LinksFunction = () => [
  { rel: "preconnect", href: "https://fonts.googleapis.com" },
  {
    rel: "preconnect",
    href: "https://fonts.gstatic.com",
    crossOrigin: "anonymous",
  },
  {
    rel: "stylesheet",
    href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swa",
  },
];

export function meta({}: Route.MetaArgs) {
  return [
    { title: "St Moore" },
    { name: "description", content: "Elevating your weird" },
  ];
}

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Navbar /> 
        <main>
          {children}
        </main>
       
        <Footer />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
  let message = "Oops!";
  let details = "An unexpected error occurred.";
  let stack: string | undefined;

  if (isRouteErrorResponse(error)) {
    message = error.status === 404 ? "404" : "Error";
    details =
      error.status === 404
        ? "The requested page could not be found."
        : error.statusText || details;
  } else if (import.meta.env.DEV && error && error instanceof Error) {
    details = error.message;
    stack = error.stack;
  }

  return (
    <>
    <section className="bg-lavender">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center">
            <h1 className="mb-4 text-7xl  tracking-tight font-extrabold lg:text-9xl text-white">404</h1>
            <p className="mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white">Page not found currently</p>
            <p className="mb-4 text-lg font-light text-white">Are you lost?</p>
            <NavLink to="/" target="_blank">
                 <button type="button" className="text-white cursor-pointer font-semibold text-center bg-darkblue hover:bg-darklavender hover:text-white focus:outline-none focus:ring-1 focus:ring-lavender text-lg px-12 py-2.5 text-center mb-2">Back To Home</button>
            </NavLink>

          </div>
        </div>
      </section>
      </>
  );
}
