import Glider from "react-glider";
import "glider-js/glider.min.css";

const HomePage = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex md:flex-row flex-col items-center">
          <Glider
            className="glider-container"
            draggable
            // hasDots
            slidesToShow={1}
            // hasArrows
            // scrollLock
          >
            <div>
              <img src="/Images/Mighty_House-1.webp" />
            </div>
            <div>
              <img src="/Images/Mighty_House-2.webp" />
            </div>{" "}
            <div>
              <img src="/Images/Mighty_House-3.webp" />
            </div>{" "}
            <div>
              <img src="/Images/Mighty_House-4.webp" />
            </div>
          </Glider>
        </div>
      </section>
    </>
  );
};

export default HomePage;
