import { Outlet } from "react-router";
import Hero from "~/components/Hero";
import TwoColumnLayout from "~/components/TwoColumnLayout";

// home layout route component
// one column container (bg color and h2 as props)
// inside is
// one hero with two columns no background color

// main layout route component
// two column container (bg color and h2 as props)
//inside is
// one hero
// buttons
// videos links

// to do: change the root layouts

const HomeLayout = () => {
  return (
    <>

   
        <Outlet />
    
    </>
  );
};

export default HomeLayout;
