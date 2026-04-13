
import type { Route } from "./+types/index";
import TwoColumnLayout from "~/components/TwoColumnLayout";
import ThreeColumnLayout from "~/components/ThreeColumnLayout";
import VampireCover from "./../../assets/stmoore-vampires-cover-web.png";
import DebutCover from "./../../assets/stmoore-debut-cover-web.jpg";
import AlienBloodCover from "./../../assets/stmoore-alienblood-cover-web.png";
import BioPic from "./../../assets/MoonJamInCello_edited.jpg";
import BubblePic from "./../../assets/LayingInACaveSweet-Stmoore-edit.jpg";
import { Link } from "react-router";
import ReactPlayer from "react-player";
import OneColumnLayout from "~/components/OneColumnLayout";


export function meta({}: Route.MetaArgs) {
  return [
    { title: "St Moore | Welcome" },
    { name: "description", content: "Synthpop to Elevate your mystery" },
  ];
}

const HomePage = () => {
  
  return (
    <>
      <ThreeColumnLayout
        backgroundColor="bg-darkblue"
        leftChildren={
          <>
            <img
              src={AlienBloodCover}
              aria-label="cover of Alien Blood"
              alt="A spooky glamourous painting of St Moore with blue skin and day glow eyes, and a watermelon pink background"
              className="mb-5 shadow-lg"
            />
  
            <Link
  
              className="mt-5 text-lg py-3 px-12 outline-solid outline-4 outline-lavender hover:outline-lavender/70 cursor-pointer text-lavender hover:text-lavender/70 font-light transition-colors duration-300"
              target="blank"
              to="https://stmoore.bandcamp.com/track/alien-blood"
            >
              <h1>NEW SONG!</h1>
            </Link>
            
          </>
        }
         middleChildren={
          <>
            <img
              src={VampireCover}
              alt="Cover image of St Moore, with light brown hair and a pink dress, as a vampire"
              className="mb-5 shadow-lg"
            />
  
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
              alt="St Moore is laying on a couch and playing a giant spoon like a guitar and with a giant alien in an 80s blue dress"
              className="mb-5 shadow-lg"
            />
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
              src="https://youtu.be/Et3IoYRKkZ8"
            />
            <ReactPlayer

              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://www.youtube.com/embed/P-3VxVttEHo?si=y4hA97h5MXi8h9Yn"
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
              aria-hidden="true"
              aria-live="off"
              style={{ width: "150%", height: "auto", aspectRatio: "16/9" }}
              src="https://www.youtube.com/watch?v=_T5XCf_YDp4&t=3s"
            />
          </>
        }
        cta={
          <Link
            className="text-lg text-darkblue mt-5 py-3 px-12 outline-solid outline-4 outline-darkblue hover:outline-darkblue/70 cursor-pointer text-darkblue hover:text-darkblue/70 font-light duration-300"
            target="blank"
            aria-label="Link to St Moore's YouTube Channel"
            to="https://youtube.com/stmooresfire?sub_confirmation=1"
          >
            SUBSCRIBE TO CHANNEL
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
              alt="St Moore is a wearing an oversized heavy metal hoodie and high heeled boots with a purple metallic background"
            />
          </>
        }
        rightChildren={
          <>
            <div className="text-white font-medium text-xl m-4">
              St Moore is a Chicago-based synthpop singer, producer, and
              performer. FKA Melissa Dungan, the Hollywood native performed
              throughout the US and released two E.P.s as "Skates," sometimes
              going by MQ Musik and Squid Malone. <br aria-hidden="true" /> <br aria-hidden="true" />
              In 2023, she settled on the name St Moore, and re-released her
              self-titled Debut. In 2025, she released Vampires Are Trying to
              Steal Your Blood as a result of her tiktok followers suggestions.
              <br aria-hidden="true" /> <br aria-hidden="true" />
              April 5th, she released single "Alien Blood" on Bandcamp and May 20th it will
              be available everywhere. Her influences include Astrology, Yoko Ono, Missy Elliot, Laurie
              Anderson, and comedic wackiness. St Moore drinks sparkling water
              harvested from active volcanoes on the moon.
              <br aria-hidden="true" /> <br aria-hidden="true" />
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
                    alt="Support St Moore by buying them a tea on Buy Me a Coffee"
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
              aria-label={"Link to St Moore's Sparkling Water Performance Series"}
              to="https://www.youtube.com/playlist?list=PLcd_6XBjr83eP9ELMzd8mRTYHXNNATpe2"
            >
              SPARKLING WATER (2024)
            </Link>
            <Link
              className="text-lg mt-5 py-3 px-12 outline-solid outline-4 outline-darkred font-medium hover:text-darkred/70 hover:outline-darkred/70 text-darkred cursor-pointer font-medium transition-colors duration-300"
              target="blank"
              aria-label={"Link to St Moore's Pandemic Performance Series, BANANAS AF"}
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
