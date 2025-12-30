import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { PassThrough } from "node:stream";
import { createReadableStreamFromReadable } from "@react-router/node";
import { ServerRouter, NavLink, UNSAFE_withComponentProps, Outlet, UNSAFE_withErrorBoundaryProps, isRouteErrorResponse, Meta, Links, ScrollRestoration, Scripts, Link } from "react-router";
import { isbot } from "isbot";
import { renderToPipeableStream } from "react-dom/server";
import { useState, useEffect } from "react";
import { FaTimes, FaBars } from "react-icons/fa";
import { FaTiktok, FaInstagram, FaYoutube } from "react-icons/fa6";
import { motion } from "motion/react";
import ReactPlayer from "react-player";
const streamTimeout = 5e3;
function handleRequest(request, responseStatusCode, responseHeaders, routerContext, loadContext) {
  return new Promise((resolve, reject) => {
    let shellRendered = false;
    let userAgent = request.headers.get("user-agent");
    let readyOption = userAgent && isbot(userAgent) || routerContext.isSpaMode ? "onAllReady" : "onShellReady";
    let timeoutId = setTimeout(
      () => abort(),
      streamTimeout + 1e3
    );
    const { pipe, abort } = renderToPipeableStream(
      /* @__PURE__ */ jsx(ServerRouter, { context: routerContext, url: request.url }),
      {
        [readyOption]() {
          shellRendered = true;
          const body = new PassThrough({
            final(callback) {
              clearTimeout(timeoutId);
              timeoutId = void 0;
              callback();
            }
          });
          const stream = createReadableStreamFromReadable(body);
          responseHeaders.set("Content-Type", "text/html");
          pipe(body);
          resolve(
            new Response(stream, {
              headers: responseHeaders,
              status: responseStatusCode
            })
          );
        },
        onShellError(error) {
          reject(error);
        },
        onError(error) {
          responseStatusCode = 500;
          if (shellRendered) {
            console.error(error);
          }
        }
      }
    );
  });
}
const entryServer = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: handleRequest,
  streamTimeout
}, Symbol.toStringTag, { value: "Module" }));
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const mBase = "transition text-darkblue font-semibold  font-normal text-1xl";
  const mActive = "transition text-darkblue font-semibold hover:text-white font-normal text-1xl";
  const handleResize = () => {
    if (window.innerWidth >= 768) {
      setMenuOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 0.7, ease: "easeIn" },
      children: /* @__PURE__ */ jsxs("header", { className: "bg-watermelon", children: [
        /* @__PURE__ */ jsx("nav", { className: "container w-full max-w-6xl mx-auto px-4 py-2 mx-auto bg-watermelon  md:px-5 md:py-6", children: /* @__PURE__ */ jsxs("div", { className: " flex items-center justify-between ", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex  flex flex-col gap-4 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row md:items-center md:gap-6", children: [
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "The Official for St Moore, Synthpop artist" }),
            /* @__PURE__ */ jsx(
              "img",
              {
                alt: "Logo for St Moore, the synthpop artist",
                src: "../../st-moore-logo.png",
                className: "w-24 h-auto"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("ul", { className: "hidden md:flex gap-4 mt-2 mb-4 md:mb-0 md:mt-0 md:flex-row items-center ", children: [
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "flex-1 items-center p-3 ",
                children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    className: ({ isActive }) => isActive ? mActive : mBase,
                    to: "/",
                    onClick: () => setMenuOpen(!menuOpen),
                    children: "HOME"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: " p-3  ",
                children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    className: ({ isActive }) => isActive ? mActive : mBase,
                    to: "#videos",
                    onClick: () => setMenuOpen(!menuOpen),
                    children: "VIDEOS"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "flex-1  p-3  ",
                children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    className: ({ isActive }) => isActive ? mActive : mBase,
                    to: "#about",
                    onClick: () => setMenuOpen(!menuOpen),
                    children: "ABOUT"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "flex-1  p-3  ",
                children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    className: ({ isActive }) => isActive ? mActive : mBase,
                    to: "#show",
                    onClick: () => setMenuOpen(!menuOpen),
                    children: "SHOW"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "flex-1  p-3  ",
                children: /* @__PURE__ */ jsx(
                  NavLink,
                  {
                    className: ({ isActive }) => isActive ? mActive : mBase,
                    to: "https://mailchi.mp/5a651d9e5e32/stmooresfire",
                    onClick: () => setMenuOpen(!menuOpen),
                    children: "SUBSCRIBE"
                  }
                )
              }
            ),
            /* @__PURE__ */ jsx(
              "li",
              {
                className: "flex  p-3 ",
                children: /* @__PURE__ */ jsxs("div", { className: "space-x-4 align-center", children: [
                  /* @__PURE__ */ jsx(
                    NavLink,
                    {
                      className: ({ isActive }) => isActive ? mActive : mBase,
                      to: "http://tiktok.com/@stmooresfire",
                      onClick: () => setMenuOpen(!menuOpen),
                      children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaTiktok, { className: "text-lg " }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    NavLink,
                    {
                      className: ({ isActive }) => isActive ? mActive : mBase,
                      to: "http://instagram.com/stmooresfire",
                      onClick: () => setMenuOpen(!menuOpen),
                      children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaInstagram, { className: "text-lg" }) })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    NavLink,
                    {
                      to: "http://youtube.com/stmooresfire",
                      onClick: () => setMenuOpen(!menuOpen),
                      children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-lg" }) })
                    }
                  )
                ] })
              }
            )
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setMenuOpen(!menuOpen),
              className: "flex order-1 md:hidden text-darkblue hover:text-darkblue/70 text-4xl cursor-pointer  ",
              title: "Menu",
              children: menuOpen ? /* @__PURE__ */ jsx(FaTimes, { className: "font-light" }) : /* @__PURE__ */ jsx(FaBars, { "aria-hidden": "true" })
            }
          )
        ] }) }),
        menuOpen && /* @__PURE__ */ jsxs("div", { className: "flex md:hidden flex-col bg-darkred border-t border-darkblue px-6 py-8 space-y-5 text-center", children: [
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: ({ isActive }) => isActive ? mActive : mBase,
              to: "/",
              onClick: () => setMenuOpen(!menuOpen),
              children: "HOME"
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: ({ isActive }) => isActive ? mActive : mBase,
              to: "#videos",
              onClick: () => setMenuOpen(!menuOpen),
              children: "VIDEOS"
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: ({ isActive }) => isActive ? mActive : mBase,
              to: "#about",
              onClick: () => setMenuOpen(!menuOpen),
              children: "ABOUT"
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: ({ isActive }) => isActive ? mActive : mBase,
              to: "#show",
              onClick: () => setMenuOpen(!menuOpen),
              children: "SHOW"
            }
          ),
          /* @__PURE__ */ jsx(
            NavLink,
            {
              className: ({ isActive }) => isActive ? mActive : mBase,
              to: "https://mailchi.mp/5a651d9e5e32/stmooresfire",
              onClick: () => setMenuOpen(!menuOpen),
              children: "SUBSCRIBE"
            }
          ),
          /* @__PURE__ */ jsxs("div", { className: "space-x-5 p-3 align-center", children: [
            /* @__PURE__ */ jsx(
              NavLink,
              {
                className: ({ isActive }) => isActive ? mActive : mBase,
                to: "http://tiktok.com/@stmooresfire",
                onClick: () => setMenuOpen(!menuOpen),
                children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaTiktok, { className: "text-lg " }) })
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                className: ({ isActive }) => isActive ? mActive : mBase,
                to: "http://instagram.com/stmooresfire",
                onClick: () => setMenuOpen(!menuOpen),
                children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaInstagram, { className: "text-lg" }) })
              }
            ),
            /* @__PURE__ */ jsx(
              NavLink,
              {
                to: "http://youtube.com/stmooresfire",
                onClick: () => setMenuOpen(!menuOpen),
                children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container bg-white text-darkblue rounded-full hover:bg-white/80 hover:text-darkblue/80 ", children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-lg" }) })
              }
            )
          ] })
        ] })
      ] })
    }
  );
};
const Footer = () => {
  const socialBase = "transition text-darkblue hover:text-banana bg-white rounded-full hover:bg-darkblue font-semibold";
  const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsx("footer", { className: "bg-darkred text-white py-16 px-6", children: /* @__PURE__ */ jsxs("div", { className: "max-w-6xl mx-auto ", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex justify-center mt-3 gap-4", children: [
      /* @__PURE__ */ jsx(
        NavLink,
        {
          className: socialBase,
          to: "http://tiktok.com/@stmooresfire",
          children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container", children: /* @__PURE__ */ jsx(FaTiktok, { className: "text-md" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          className: socialBase,
          to: "http://instagram.com/stmooresfire",
          children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container", children: /* @__PURE__ */ jsx(FaInstagram, { className: "text-md" }) })
        }
      ),
      /* @__PURE__ */ jsx(
        NavLink,
        {
          className: socialBase,
          to: "http://youtube.com/stmooresfire",
          children: /* @__PURE__ */ jsx("div", { className: "circle-icon-container", children: /* @__PURE__ */ jsx(FaYoutube, { className: "text-md" }) })
        }
      )
    ] }),
    /* @__PURE__ */ jsx("div", { className: "text-center mt-4 pt-4 text-lg", children: /* @__PURE__ */ jsxs("div", { className: "text-banana font-semibold tracking-wider", children: [
      "St Moore Dev © ",
      currentYear,
      " All Rights Reserved."
    ] }) })
  ] }) });
};
const links = () => [{
  rel: "preconnect",
  href: "https://fonts.googleapis.com"
}, {
  rel: "preconnect",
  href: "https://fonts.gstatic.com",
  crossOrigin: "anonymous"
}, {
  rel: "stylesheet",
  href: "https://fonts.googleapis.com/css2?family=PT+Sans:ital,wght@0,400;0,700;1,400;1,700&display=swap"
}];
function meta$1({}) {
  return [{
    title: "St Moore"
  }, {
    name: "description",
    content: "Elevating your weird"
  }];
}
function Layout({
  children
}) {
  return /* @__PURE__ */ jsxs("html", {
    lang: "en",
    children: [/* @__PURE__ */ jsxs("head", {
      children: [/* @__PURE__ */ jsx("meta", {
        charSet: "utf-8"
      }), /* @__PURE__ */ jsx("meta", {
        name: "viewport",
        content: "width=device-width, initial-scale=1"
      }), /* @__PURE__ */ jsx(Meta, {}), /* @__PURE__ */ jsx(Links, {})]
    }), /* @__PURE__ */ jsxs("body", {
      children: [/* @__PURE__ */ jsx(Navbar, {}), /* @__PURE__ */ jsx("main", {
        children
      }), /* @__PURE__ */ jsx(Footer, {}), /* @__PURE__ */ jsx(ScrollRestoration, {}), /* @__PURE__ */ jsx(Scripts, {})]
    })]
  });
}
const root = UNSAFE_withComponentProps(function App() {
  return /* @__PURE__ */ jsx(Outlet, {});
});
const ErrorBoundary = UNSAFE_withErrorBoundaryProps(function ErrorBoundary2({
  error
}) {
  let details = "An unexpected error occurred.";
  if (isRouteErrorResponse(error)) {
    error.status === 404 ? "404" : "Error";
    details = error.status === 404 ? "The requested page could not be found." : error.statusText || details;
  }
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx("section", {
      className: "bg-lavender",
      children: /* @__PURE__ */ jsx("div", {
        className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",
        children: /* @__PURE__ */ jsxs("div", {
          className: "mx-auto max-w-screen-sm text-center",
          children: [/* @__PURE__ */ jsx("h1", {
            className: "mb-4 text-7xl  tracking-tight font-extrabold lg:text-9xl text-white",
            children: "404"
          }), /* @__PURE__ */ jsx("p", {
            className: "mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white",
            children: "Page not found currently"
          }), /* @__PURE__ */ jsx("p", {
            className: "mb-4 text-lg font-light text-white",
            children: "Are you lost?"
          }), /* @__PURE__ */ jsx(NavLink, {
            to: "/",
            target: "_blank",
            children: /* @__PURE__ */ jsx("button", {
              type: "button",
              className: "text-white cursor-pointer font-semibold text-center bg-darkblue hover:bg-darklavender hover:text-white focus:outline-none focus:ring-1 focus:ring-lavender text-lg px-12 py-2.5 text-center mb-2",
              children: "Back To Home"
            })
          })]
        })
      })
    })
  });
});
const route0 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  ErrorBoundary,
  Layout,
  default: root,
  links,
  meta: meta$1
}, Symbol.toStringTag, { value: "Module" }));
const HomeLayout = () => {
  return /* @__PURE__ */ jsx(Fragment, {
    children: /* @__PURE__ */ jsx(Outlet, {})
  });
};
const homelayout = UNSAFE_withComponentProps(HomeLayout);
const route1 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: homelayout
}, Symbol.toStringTag, { value: "Module" }));
const TwoColumnLayout = ({
  leftChildren,
  rightChildren,
  h2,
  h2Color,
  backgroundColor,
  columnGap,
  id,
  cta
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1, ease: "easeIn" },
      children: /* @__PURE__ */ jsx("div", { className: `pt-6 pb-12 md:pb-24 ${backgroundColor}`, id, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl lg:max-w-7xl ", children: [
        h2 ? /* @__PURE__ */ jsx(
          "h2",
          {
            className: ` py-8 mb-6 mx-auto max-w-lg text-center text-5xl 	font-semibold sm:text-4xl text-${h2Color} uppercase`,
            children: h2
          }
        ) : /* @__PURE__ */ jsx("div", { className: "py-8 " }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: /* @__PURE__ */ jsxs("div", { className: `grid gap-0 ${columnGap ? "lg:gap-50" : "lg:gap-12"} grid-cols-1 lg:grid-cols-2`, children: [
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center mb-10", children: leftChildren }),
          /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center mb-10", children: rightChildren })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "flex justify-center items-center", children: cta && cta })
      ] }) })
    }
  );
};
const VampireCover = "/assets/VampiresCoverJune2025-v7_edited-QdaTT2Gf.jpg";
const DebutCover = "/assets/StMoore-Debut-nov13-22-TVwtuzxD.jpg";
const BioPic = "/assets/MoonJamInCello_edited-DDT5fi9Y.jpg";
const BubblePic = "/assets/LayingInACaveSweet-Stmoore-edit-Bhr07GPV.jpg";
const OneColumnLayout = ({
  children,
  h2,
  h2Color,
  backgroundColor,
  id
}) => {
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: { opacity: 0 },
      whileInView: { opacity: 1 },
      transition: { duration: 1, ease: "easeIn" },
      children: /* @__PURE__ */ jsx("div", { className: `pt-6 pb-12 ${backgroundColor}`, id, children: /* @__PURE__ */ jsxs("div", { className: "mx-auto max-w-2xl ", children: [
        h2 ? /* @__PURE__ */ jsx(
          "h2",
          {
            className: `py-8 mb-6 mx-auto max-w-lg text-center text-5xl font-semibold sm:text-4xl ${h2Color} uppercase`,
            children: h2
          }
        ) : /* @__PURE__ */ jsx("div", { className: "py-8 " }),
        /* @__PURE__ */ jsx("div", { className: `grid grid-cols-1`, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-center justify-center mb-10", children }) })
      ] }) })
    }
  );
};
function meta({}) {
  return [{
    title: "St Moore | Welcome"
  }, {
    name: "description",
    content: "Elevating your weird"
  }];
}
const HomePage = () => {
  return /* @__PURE__ */ jsxs(Fragment, {
    children: [/* @__PURE__ */ jsx(TwoColumnLayout, {
      backgroundColor: "bg-darkblue",
      leftChildren: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("img", {
          src: VampireCover,
          alt: "Example",
          className: "mb-5 shadow-lg w-100 h-100 object-cover"
        }), /* @__PURE__ */ jsx(Link, {
          className: "mt-5 text-lg py-3 px-12 outline-solid outline-4 outline-lavender hover:outline-lavender/70 cursor-pointer text-lavender hover:text-lavender/70 font-light transition-colors duration-300",
          target: "blank",
          to: "https://www.submithub.com/link/st-moore-vampires-are-trying-to-steal-your-blood-o",
          children: "LISTEN HERE"
        })]
      }),
      rightChildren: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("img", {
          src: DebutCover,
          alt: "Example",
          className: "mb-5 shadow-lg w-100 h-100 object-cover"
        }), /* @__PURE__ */ jsx(Link, {
          className: "text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-lavender hover:outline-lavender/70 cursor-pointer text-lavender hover:text-lavender/70 font-light transition-colors duration-300",
          target: "blank",
          to: "https://www.submithub.com/link/st-moore-debut",
          children: "LISTEN NOW"
        })]
      })
    }), /* @__PURE__ */ jsx(TwoColumnLayout, {
      backgroundColor: "bg-lavender",
      h2: "Videos",
      id: "videos",
      h2Color: "darkblue",
      columnGap: "50",
      leftChildren: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(ReactPlayer, {
          className: "mb-10",
          style: {
            width: "150%",
            height: "auto",
            aspectRatio: "16/9"
          },
          src: "https://youtu.be/Et3IoYRKkZ8?si=GG4I8IJg_C4v3UeL"
        }), /* @__PURE__ */ jsx(ReactPlayer, {
          style: {
            width: "150%",
            height: "auto",
            aspectRatio: "16/9"
          },
          src: "https://www.youtube.com/watch?v=P-3VxVttEHo&t=1s"
        })]
      }),
      rightChildren: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx(ReactPlayer, {
          className: "mb-10",
          style: {
            width: "150%",
            height: "auto",
            aspectRatio: "16/9"
          },
          src: "https://www.youtube.com/watch?v=wp_Mp_13EIs&t=3s"
        }), /* @__PURE__ */ jsx(ReactPlayer, {
          style: {
            width: "150%",
            height: "auto",
            aspectRatio: "16/9"
          },
          src: "https://www.youtube.com/watch?v=_T5XCf_YDp4&t=3s"
        })]
      }),
      cta: /* @__PURE__ */ jsx(Link, {
        className: "text-lg text-darkblue mt-5 py-3 px-12 outline-solid outline-4 outline-darkblue hover:outline-darkblue/70 cursor-pointer text-darkblue hover:text-darkblue/70 font-light duration-300",
        target: "blank",
        to: "https://youtube.com/stmooresfire?sub_confirmation=1",
        children: "SUBSCRIBE ON YOUTUBE"
      })
    }), /* @__PURE__ */ jsx(TwoColumnLayout, {
      backgroundColor: "bg-watermelon",
      h2: "About",
      id: "about",
      h2Color: "white",
      leftChildren: /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsx("img", {
          className: "shadow-lg object-cover",
          src: BioPic,
          alt: "St Moore a Spacegirl on the Moon"
        })
      }),
      rightChildren: /* @__PURE__ */ jsx(Fragment, {
        children: /* @__PURE__ */ jsxs("div", {
          className: "text-white font-medium text-xl m-4",
          children: ['St Moore is a Chicago-based synthpop singer, producer, and performer. FKA Melissa Dungan, the Hollywood native performed throughout the US and released two E.P.s as "Skates," sometimes going by MQ Musik and Squid Malone. ', /* @__PURE__ */ jsx("br", {}), " ", /* @__PURE__ */ jsx("br", {}), "In 2023, she settled on the name St Moore, and re-released her self-titled Debut. In 2025, she released Vampires Are Trying to Steal Your Blood as a result of her tiktok followers suggestions.", /* @__PURE__ */ jsx("br", {}), " ", /* @__PURE__ */ jsx("br", {}), 'Feb 14th 2026 will see the release of single "Alien Blood" followed by hopefully sync placements, and live shows. Her influences include Astrology, Yoko Ono, Missy Elliot, Laurie Anderson, and comedic wackiness. St Moore drinks sparkling water harvested from active volcanoes on the moon.', /* @__PURE__ */ jsx("br", {}), " ", /* @__PURE__ */ jsx("br", {}), "Tune in for inspirational vampire spells and yogic guides to navigating the planets, @stmooresfire on all platforms and collabs at stmooresfire@gmail.com, and/or support your local synthpop weirdo below:", /* @__PURE__ */ jsxs("div", {
            className: "mt-8 flex justify-center gap-4 text-center",
            children: [/* @__PURE__ */ jsx("a", {
              href: "https://www.buymeacoffee.com/stmooresfire",
              target: "_blank",
              children: /* @__PURE__ */ jsx("img", {
                className: "bg-yellow mx-auto h-14 mt-5",
                "data-name": "bmc-button",
                "data-slug": "stmooresfire",
                "data-emoji": "👽",
                "data-font": "Comic",
                "data-text": "Buy me tea ",
                "data-outline-color": "#ffffff",
                "data-font-color": "#ffffff",
                src: "https://cdn.buymeacoffee.com/buttons/v2/default-violet.png",
                alt: "Buy Me a Coffee"
              })
            }), /* @__PURE__ */ jsx(Link, {
              className: "text-lg mt-5 py-3 px-8 outline-solid outline-4 outline-darkblue font-medium hover:text-darkblue/70 hover:outline-darkblue/70 text-darkblue cursor-pointer font-medium transition-colors duration-300",
              target: "blank",
              to: "https://stmoore.bandcamp.com/",
              children: "BUY MUSIC ON BANDCAMP"
            })]
          })]
        })
      })
    }), /* @__PURE__ */ jsx(OneColumnLayout, {
      backgroundColor: "bg-banana",
      h2: "Show",
      id: "show",
      h2Color: "text-watermelon",
      children: /* @__PURE__ */ jsxs(Fragment, {
        children: [/* @__PURE__ */ jsx("img", {
          className: " object-cover pl-10 pr-10",
          src: BubblePic,
          alt: "St Moore a Spacegirl on the Moon"
        }), /* @__PURE__ */ jsxs("div", {
          className: "mt-8 flex flex-col sm:flex-row text-center justify-center gap-5",
          children: [/* @__PURE__ */ jsx(Link, {
            className: "text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-darkred font-medium hover:text-darkred/70 hover:outline-darkred/70 text-darkred cursor-pointer font-medium transition-colors duration-300",
            target: "blank",
            to: "https://www.youtube.com/playlist?list=PLcd_6XBjr83eP9ELMzd8mRTYHXNNATpe2",
            children: "SPARKLING WATER (2024)"
          }), /* @__PURE__ */ jsx(Link, {
            className: "text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-darkred font-medium hover:text-darkred/70 hover:outline-darkred/70 text-darkred cursor-pointer font-medium transition-colors duration-300",
            target: "blank",
            to: "https://www.youtube.com/playlist?list=PLcd_6XBjr83efNqUpgp9vEr1zgwLLhBpj",
            children: "BANANAS AF (2021)"
          })]
        })]
      })
    })]
  });
};
const index$4 = UNSAFE_withComponentProps(HomePage);
const route2 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$4,
  meta
}, Symbol.toStringTag, { value: "Module" }));
const AboutPage = () => {
  return /* @__PURE__ */ jsx(TwoColumnLayout, {
    h2: "about",
    backgroundColor: "bg-darkblue",
    leftChildren: /* @__PURE__ */ jsx("div", {
      className: "pic",
      children: "Pic Here"
    }),
    rightChildren: /* @__PURE__ */ jsx("div", {
      className: "text-banana",
      children: 'St Moore is a Hollywood native theatrical synthpop singer producer living in Chicago.  She has performed throughout the US and released two E.P.s as "Skates" before changing her name to St Moore. In 2023, she re-released her self-titled Debut under the new volcanic moniker. In 2025, she released Vampires Are Trying to Steal Your Blood as a result of her tiktok followers suggestions. Her influences include Yoko Ono, Missy E., Cardi B, Laurie Anderson, 80s new wave, and comedic wackiness from all over the spectrum. St Moore drinks sparkling water harvested from active volcanoes on the moon. Tune in for her inspirational vampire spells and yogic guides to navigating the planets, STMOORE.NET and @stmooresfire on all platforms.'
    })
  });
};
const index$3 = UNSAFE_withComponentProps(AboutPage);
const route3 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$3
}, Symbol.toStringTag, { value: "Module" }));
const VideosPage = () => {
  return /* @__PURE__ */ jsx(TwoColumnLayout, {
    h2: "videos",
    backgroundColor: "bg-darkred",
    leftChildren: /* @__PURE__ */ jsx("div", {
      className: "pic",
      children: "Pic Here"
    }),
    rightChildren: /* @__PURE__ */ jsx("div", {
      className: "text-gray-800",
      children: "hello"
    })
  });
};
const index$2 = UNSAFE_withComponentProps(VideosPage);
const route4 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$2
}, Symbol.toStringTag, { value: "Module" }));
const ShowPage = (backgroundColor, h2) => {
  return /* @__PURE__ */ jsx(TwoColumnLayout, {
    h2: "show",
    backgroundColor: "bg-lavender",
    leftChildren: /* @__PURE__ */ jsx("div", {
      className: "pic",
      children: "Pic Here"
    }),
    rightChildren: /* @__PURE__ */ jsx("div", {
      className: "text-gray-800",
      children: 'St Moore is a Hollywood native theatrical synthpop singer producer living in Chicago.  She has performed throughout the US and released two E.P.s as "Skates" before changing her name to St Moore. In 2023, she re-released her self-titled Debut under the new volcanic moniker. In 2025, she released Vampires Are Trying to Steal Your Blood as a result of her tiktok followers suggestions. Her influences include Yoko Ono, Missy E., Cardi B, Laurie Anderson, 80s new wave, and comedic wackiness from all over the spectrum. St Moore drinks sparkling water harvested from active volcanoes on the moon. Tune in for her inspirational vampire spells and yogic guides to navigating the planets, STMOORE.NET and @stmooresfire on all platforms.'
    })
  });
};
const index$1 = UNSAFE_withComponentProps(ShowPage);
const route5 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index$1
}, Symbol.toStringTag, { value: "Module" }));
const ContactPage = () => {
  return /* @__PURE__ */ jsx(TwoColumnLayout, {
    backgroundColor: "bg-darkblue",
    leftChildren: /* @__PURE__ */ jsx("div", {
      className: "pic",
      children: "Pic Here"
    }),
    rightChildren: /* @__PURE__ */ jsx("div", {
      className: "text-gray-800",
      children: 'St Moore is a Hollywood native theatrical synthpop singer producer living in Chicago.  She has performed throughout the US and released two E.P.s as "Skates" before changing her name to St Moore. In 2023, she re-released her self-titled Debut under the new volcanic moniker. In 2025, she released Vampires Are Trying to Steal Your Blood as a result of her tiktok followers suggestions. Her influences include Yoko Ono, Missy E., Cardi B, Laurie Anderson, 80s new wave, and comedic wackiness from all over the spectrum. St Moore drinks sparkling water harvested from active volcanoes on the moon. Tune in for her inspirational vampire spells and yogic guides to navigating the planets, STMOORE.NET and @stmooresfire on all platforms.'
    })
  });
};
const index = UNSAFE_withComponentProps(ContactPage);
const route6 = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  default: index
}, Symbol.toStringTag, { value: "Module" }));
const serverManifest = { "entry": { "module": "/assets/entry.client-Bo5YRCcv.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js"], "css": [] }, "routes": { "root": { "id": "root", "parentId": void 0, "path": "", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": true, "module": "/assets/root-B_kmRbi2.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/proxy-Cgj_oK8e.js"], "css": ["/assets/root-CaxktWGy.css"], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/layouts/homelayout": { "id": "routes/layouts/homelayout", "parentId": "root", "path": void 0, "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/homelayout-8nSilENB.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/home/index": { "id": "routes/home/index", "parentId": "routes/layouts/homelayout", "path": void 0, "index": true, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-D2em9tIs.js", "imports": ["/assets/index-CcOTQMYi.js", "/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/TwoColumnLayout-HcBpAAtD.js", "/assets/proxy-Cgj_oK8e.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/about/index": { "id": "routes/about/index", "parentId": "routes/layouts/homelayout", "path": "about", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-Covd0YKy.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/TwoColumnLayout-HcBpAAtD.js", "/assets/proxy-Cgj_oK8e.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/videos/index": { "id": "routes/videos/index", "parentId": "routes/layouts/homelayout", "path": "videos", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-DVX2SwvB.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/TwoColumnLayout-HcBpAAtD.js", "/assets/proxy-Cgj_oK8e.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/show/index": { "id": "routes/show/index", "parentId": "routes/layouts/homelayout", "path": "show", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-BTne1KjW.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/TwoColumnLayout-HcBpAAtD.js", "/assets/proxy-Cgj_oK8e.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 }, "routes/contact/index": { "id": "routes/contact/index", "parentId": "routes/layouts/homelayout", "path": "contact", "index": void 0, "caseSensitive": void 0, "hasAction": false, "hasLoader": false, "hasClientAction": false, "hasClientLoader": false, "hasClientMiddleware": false, "hasErrorBoundary": false, "module": "/assets/index-CrU-TM2M.js", "imports": ["/assets/chunk-OIYGIGL5-Cy5T1E9E.js", "/assets/TwoColumnLayout-HcBpAAtD.js", "/assets/proxy-Cgj_oK8e.js"], "css": [], "clientActionModule": void 0, "clientLoaderModule": void 0, "clientMiddlewareModule": void 0, "hydrateFallbackModule": void 0 } }, "url": "/assets/manifest-e133fb79.js", "version": "e133fb79", "sri": void 0 };
const assetsBuildDirectory = "build/client";
const basename = "/";
const future = { "v8_middleware": false, "unstable_optimizeDeps": false, "unstable_splitRouteModules": false, "unstable_subResourceIntegrity": false, "unstable_viteEnvironmentApi": false };
const ssr = true;
const isSpaMode = false;
const prerender = [];
const routeDiscovery = { "mode": "lazy", "manifestPath": "/__manifest" };
const publicPath = "/";
const entry = { module: entryServer };
const routes = {
  "root": {
    id: "root",
    parentId: void 0,
    path: "",
    index: void 0,
    caseSensitive: void 0,
    module: route0
  },
  "routes/layouts/homelayout": {
    id: "routes/layouts/homelayout",
    parentId: "root",
    path: void 0,
    index: void 0,
    caseSensitive: void 0,
    module: route1
  },
  "routes/home/index": {
    id: "routes/home/index",
    parentId: "routes/layouts/homelayout",
    path: void 0,
    index: true,
    caseSensitive: void 0,
    module: route2
  },
  "routes/about/index": {
    id: "routes/about/index",
    parentId: "routes/layouts/homelayout",
    path: "about",
    index: void 0,
    caseSensitive: void 0,
    module: route3
  },
  "routes/videos/index": {
    id: "routes/videos/index",
    parentId: "routes/layouts/homelayout",
    path: "videos",
    index: void 0,
    caseSensitive: void 0,
    module: route4
  },
  "routes/show/index": {
    id: "routes/show/index",
    parentId: "routes/layouts/homelayout",
    path: "show",
    index: void 0,
    caseSensitive: void 0,
    module: route5
  },
  "routes/contact/index": {
    id: "routes/contact/index",
    parentId: "routes/layouts/homelayout",
    path: "contact",
    index: void 0,
    caseSensitive: void 0,
    module: route6
  }
};
export {
  serverManifest as assets,
  assetsBuildDirectory,
  basename,
  entry,
  future,
  isSpaMode,
  prerender,
  publicPath,
  routeDiscovery,
  routes,
  ssr
};
