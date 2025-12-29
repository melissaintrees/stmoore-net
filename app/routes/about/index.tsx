import TwoColumnLayout from "~/components/TwoColumnLayout";

const AboutPage = () => {
  return (
    <TwoColumnLayout
      h2="about"
      backgroundColor="bg-darkblue"
      leftChildren={<div className="pic">Pic Here</div>}
      rightChildren={
        <div className="text-banana">
          St Moore is a Hollywood native theatrical synthpop singer producer
          living in Chicago.  She has performed throughout the US and released
          two E.P.s as "Skates" before changing her name to St Moore. In 2023,
          she re-released her self-titled Debut under the new volcanic moniker.
          In 2025, she released Vampires Are Trying to Steal Your Blood as a
          result of her tiktok followers suggestions. Her influences include
          Yoko Ono, Missy E., Cardi B, Laurie Anderson, 80s new wave, and
          comedic wackiness from all over the spectrum. St Moore drinks
          sparkling water harvested from active volcanoes on the moon. Tune in
          for her inspirational vampire spells and yogic guides to navigating
          the planets, STMOORE.NET and @stmooresfire on all platforms.
        </div>
      }
    />
  );
};

export default AboutPage;
