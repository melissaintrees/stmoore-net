import React from "react";
import { motion } from "motion/react"

interface OneColumnLayoutProps {
  children?: React.ReactNode;
  rightChildren?: React.ReactNode;
  backgroundColor?:
    | "bg-watermelon"
    | "bg-banana"
    | "bg-darkblue"
    | "bg-lavender"
    | "bg-darkred";
  h2?: string;
  h2Color?: "text-white" | "text-banana" | "text-darkblue" | "text-watermelon";
  id?: string;
}

const OneColumnLayout: React.FC<OneColumnLayoutProps> = ({
  children,
  h2,
  h2Color,
  backgroundColor,
  id
}) => {
  return (
        <motion.div   
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1}}
        transition={{ duration: 1, ease: "easeOut", }}
        >
    <div className={`pt-12 pb-24 ${backgroundColor}`} id={id}>
     <div className="mx-auto max-w-2xl ">
        {/* blank space for when there is no H2 */}
        {h2 ? (
          <h2
            className={`py-8 mb-6 mx-auto max-w-lg text-center text-5xl font-semibold sm:text-4xl ${h2Color} uppercase`}
          >
            {h2}
          </h2>
        ) : (
          <div className="py-8 "></div>
        )}
          <div className={`grid grid-cols-1`}>
              <div className="flex flex-col items-center justify-center mb-10">
                {children}
              </div>
         </div>
      </div>
    </div>
    </motion.div>
  );
};

export default OneColumnLayout;
