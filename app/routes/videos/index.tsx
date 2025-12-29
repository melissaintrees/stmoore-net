

import TwoColumnLayout from "~/components/TwoColumnLayout";


const VideosPage = () => {
  return (

          <TwoColumnLayout
            h2={'videos'}
            backgroundColor='bg-darkred'
            leftChildren={
              <div className="pic">
                Pic Here
              </div>
            }
            rightChildren={
              <div className="text-gray-800">
                  hello
              </div>
            }
          />
    
  )
};

export default VideosPage;
