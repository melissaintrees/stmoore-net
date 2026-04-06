import React from "react";
import { motion } from "motion/react"


interface ThreeColumnLayoutProps {
  leftChildren?: React.ReactNode;
  middleChildren?: React.ReactNode;
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

const ThreeColumnLayout: React.FC<ThreeColumnLayoutProps> = ({
  leftChildren,
  middleChildren,
  rightChildren,
  h2,
  h2Color,
  backgroundColor,
  columnGap,
  id,
  cta
}) => {
  return (
    <motion.div   
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1}}
    transition={{ duration: 1, ease: "easeIn" }}
    >
    <div className={`pt-6 pb-12 md:pb-24 ${backgroundColor}`} id={id}>
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
       
          <div className={`grid gap-0 ${columnGap ? "lg:gap-50" : "lg:gap-12" } grid-cols-1 lg:grid-cols-3`}>
          
              <div className="flex flex-col items-center mb-10 m-5">
                {leftChildren}
              </div>
      
              <div className="flex flex-col items-center mb-10 m-5">
                {middleChildren}
              </div>
      
              <div className="flex flex-col items-center mb-10 m-5">
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
    </motion.div>
  );
};

export default ThreeColumnLayout;
