import React from "react";
import { Link } from "react-router";

interface TwoColumnLayoutProps {
  leftChildren?: React.ReactNode;
  rightChildren?: React.ReactNode;
  backgroundColor?:
    | "bg-watermelon"
    | "bg-banana"
    | "bg-darkblue"
    | "bg-lavender"
    | "bg-darkred";
  h2?: string;
  h2Color?: "white" | "banana" | "darkblue" | "watermelon";
  columnGap?: string;
  id?: string;
  cta?: React.ReactNode;
}

const TwoColumnLayout: React.FC<TwoColumnLayoutProps> = ({
  leftChildren,
  rightChildren,
  h2,
  h2Color,
  backgroundColor,
  columnGap,
  id,
  cta
}) => {
  return (
    <div className={`pt-12 pb-24 ${backgroundColor}`} id={id}>
      <div className="mx-auto max-w-2xl lg:max-w-7xl ">
        {/* blank space for when there is no H2 */}
        {h2 ? (
          <h2
            className={` py-8 mb-6 mx-auto max-w-lg text-center text-5xl 	font-semibold sm:text-4xl text-${h2Color} uppercase`}
          >
            {h2}
          </h2>
        ) : (
          <div className="py-8 "></div>
        )}
        <div className="flex justify-center items-center">
       
          <div className={`grid gap-0 ${columnGap ? "lg:gap-50" : "lg:gap-12" } grid-cols-1 lg:grid-cols-2`}>
          
              <div className="flex flex-col items-center justify-center mb-10">
                {leftChildren}
              </div>
      
              <div className="flex flex-col items-center justify-center mb-10">
                {rightChildren}
              </div>

          </div>
          
         </div>
         <div className="flex justify-center items-center">
        {cta &&         
          cta}
         </div>
      
      </div>
    </div>
  );
};

export default TwoColumnLayout;
