
import type { Route } from "./+types/index";
import TwoColumnLayout from "~/components/TwoColumnLayout";
import VampireCover from "./../../assets/VampiresCoverJune2025-v7_edited.jpg";
import DebutCover from "./../../assets/StMoore-Debut-nov13-22.jpg";
import BioPic from "./../../assets/MoonJamInCello_edited.jpg";
import BubblePic from "./../../assets/LayingInACaveSweet-Stmoore-edit.jpg";
import { Link } from "react-router";
import ReactPlayer from "react-player";
import OneColumnLayout from "~/components/OneColumnLayout";

import { motion } from "motion/react"

export function meta({}: Route.MetaArgs) {
  return [
    { title: "St Moore | Welcome" },
    { name: "description", content: "Elevating your weird" },
  ];
}

const HomePage = () => {
  const vampiresPreview = `<iframe style="border: 0; width: 400px; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=2559385207/size=small/bgcol=333333/linkcol=EA1B3D/transparent=true/" seamless><a href="https://stmoore.bandcamp.com/album/vampires-are-trying-to-steal-your-blood-on-a-saturday-night">Vampires are Trying to Steal Your Blood (On a Saturday Night) by St Moore</a></iframe>`;
  const bumbleBeePreview = `<iframe style="border: 0; width: 400px; height: 42px;" src="https://bandcamp.com/EmbeddedPlayer/album=4070323120/size=small/bgcol=333333/linkcol=AE8FC0/track=3573362396/transparent=true/" seamless><a href="https://stmoore.bandcamp.com/album/debut">Bumble Bee by St Moore</a></iframe>`;
  return (
    <>
      <TwoColumnLayout
        backgroundColor="bg-darkblue"
        leftChildren={
          <>
            <img
              src={VampireCover}
              alt="Example"
              className="mb-5 shadow-lg w-100 h-100 object-cover"
            />
            {/* <BandcampPlayer embedCode={vampiresPreview}></BandcampPlayer> */}
            <Link
              className="mt-5 text-lg py-3 px-12 outline-solid outline-4 outline-lavender hover:outline-lavender/70 cursor-pointer text-lavender hover:text-lavender/70 font-light transition-colors duration-300"
              target="blank"
              to="https://www.submithub.com/link/st-moore-vampires-are-trying-to-steal-your-blood-o"
            >
              LISTEN HERE
            </Link>
          </>
        }
        rightChildren={
          <>
            <img
              src={DebutCover}
              alt="Example"
              className="mb-5 shadow-lg w-100 h-100 object-cover"
            />
            {/* <BandcampPlayer embedCode={bumbleBeePreview}></BandcampPlayer> */}
            <Link
              className="text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-lavender hover:outline-lavender/70 cursor-pointer text-lavender hover:text-lavender/70 font-light transition-colors duration-300"
              target="blank"
              to="https://www.submithub.com/link/st-moore-debut"
            >
              LISTEN NOW
            </Link>
          </>
        }
      />

      <TwoColumnLayout
        backgroundColor="bg-lavender"
        h2="Videos"
        id="videos"
        h2Color="darkblue"
        columnGap="50"
        leftChildren={
          <>
            <ReactPlayer
              className={"mb-10"}
              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://youtu.be/Et3IoYRKkZ8?si=GG4I8IJg_C4v3UeL"
            />
            <ReactPlayer
              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://www.youtube.com/watch?v=P-3VxVttEHo&t=1s"
            />
          </>
        }
        rightChildren={
          <>
            <ReactPlayer
              className={"mb-10"}
              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://www.youtube.com/watch?v=wp_Mp_13EIs&t=3s"
            />
            <ReactPlayer
              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://www.youtube.com/watch?v=_T5XCf_YDp4&t=3s"
            />
          </>
        }
        cta={
          <Link
            className="text-lg text-darkblue mt-5 py-3 px-12 outline-solid outline-4 outline-darkblue hover:outline-darkblue/70 cursor-pointer text-darkblue hover:text-darkblue/70 font-light duration-300"
            target="blank"
            to="https://youtube.com/stmooresfire?sub_confirmation=1"
          >
            SUBSCRIBE ON YOUTUBE
          </Link>
        }
      />
      <TwoColumnLayout
        backgroundColor="bg-watermelon"
        h2="About"
        id="about"
        h2Color="white"
        leftChildren={
          <>
            <img
              className="shadow-lg object-cover"
              src={BioPic}
              alt="St Moore a Spacegirl on the Moon"
            />
          </>
        }
        rightChildren={
          <>
            <div className="text-white font-medium text-xl m-4">
              St Moore is a Chicago-based synthpop singer, producer, and
              performer. FKA Melissa Dungan, the Hollywood native performed
              throughout the US and released two E.P.s as "Skates," sometimes
              going by MQ Musik and Squid Malone. <br /> <br />
              In 2023, she settled on the name St Moore, and re-released her
              self-titled Debut. In 2025, she released Vampires Are Trying to
              Steal Your Blood as a result of her tiktok followers suggestions.
              <br /> <br />
              Feb 14th 2026 will see the release of single "Alien Blood"
              followed by hopefully sync placements, and live shows. Her
              influences include Astrology, Yoko Ono, Missy Elliot, Laurie
              Anderson, and comedic wackiness. St Moore drinks sparkling water
              harvested from active volcanoes on the moon.
              <br /> <br />
              Tune in for inspirational vampire spells and yogic guides to
              navigating the planets, @stmooresfire on all platforms and collabs
              at stmooresfire@gmail.com, and/or support your local synthpop
              weirdo below:
              <div className="mt-8 flex justify-center gap-4 text-center">
                <a
                  href="https://www.buymeacoffee.com/stmooresfire"
                  target="_blank"
                >
                  <img
                    className="bg-yellow mx-auto h-14 mt-5"
                    data-name="bmc-button"
                    data-slug="stmooresfire"
                    data-emoji="👽"
                    data-font="Comic"
                    data-text="Buy me tea "
                    data-outline-color="#ffffff"
                    data-font-color="#ffffff"
                    src="https://cdn.buymeacoffee.com/buttons/v2/default-violet.png"
                    alt="Buy Me a Coffee"
                  />
                </a>

                <Link
                  className="text-lg mt-5 py-3 px-8 outline-solid outline-4 outline-darkblue font-medium hover:text-darkblue/70 hover:outline-darkblue/70 text-darkblue cursor-pointer font-medium transition-colors duration-300"
                  target="blank"
               
                  to="https://stmoore.bandcamp.com/"
                >
                  BUY MUSIC ON BANDCAMP
                </Link>
              </div>
            </div>
          </>
        }
      />
      <OneColumnLayout
        backgroundColor="bg-banana"
        h2="Show"
        id="show"
        h2Color="text-watermelon"
        children={
          <>
            <img
              className=" object-cover pl-10 pr-10"
              src={BubblePic}
              alt="St Moore a Spacegirl on the Moon"
            />
            <div className="mt-8 flex flex-col sm:flex-row text-center justify-center gap-5">
            <Link
              className="text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-darkred font-medium hover:text-darkred/70 hover:outline-darkred/70 text-darkred cursor-pointer font-medium transition-colors duration-300"
              target="blank"
            
              to="https://www.youtube.com/playlist?list=PLcd_6XBjr83eP9ELMzd8mRTYHXNNATpe2"
            >
              SPARKLING WATER (2024)
            </Link>
            <Link
              className="text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-darkred font-medium hover:text-darkred/70 hover:outline-darkred/70 text-darkred cursor-pointer font-medium transition-colors duration-300"
              target="blank"
              to="https://www.youtube.com/playlist?list=PLcd_6XBjr83efNqUpgp9vEr1zgwLLhBpj"
            >
              BANANAS AF (2021)
            </Link>
            </div>

          </>
        }
      />
    </>
  );
};

export default HomePage;
