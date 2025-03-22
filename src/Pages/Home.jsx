import { HorizontalCarousel } from "../components/carousels.jsx";

const Home = () => {
  return (
    <article id="homepage">
      <h2 className="header">
        {`Latest Cars in Inventory`.toLocaleUpperCase()}
      </h2>
      <figure>
        <img
          src="https://cdn.dealeraccelerate.com/vanguard/1/27847/1370423/1920x1440/2023-dodge-charger-srt-hellcat-redeye-widebody-jailbreak"
          alt="2023 Dodge Charger"
        />

        <figcaption>2023 Dodge Charger</figcaption>
      </figure>

      <HorizontalCarousel>
        <img
          src="https://cars.usnews.com/static/images/Auto/custom/14489/2021_Dodge_Charger_SRT_Hellcat_Redeye_Widebody_49.jpg"
          alt="placeholder"
        />

        <img
          src="https://cars.usnews.com/static/images/Auto/custom/14489/2021_Dodge_Charger_SRT_Hellcat_Redeye_Widebody_49.jpg"
          alt="placeholder"
        />

        <img
          src="https://cars.usnews.com/static/images/Auto/custom/14489/2021_Dodge_Charger_SRT_Hellcat_Redeye_Widebody_49.jpg"
          alt="placeholder"
        />
      </HorizontalCarousel>
    </article>
  );
};

export default Home;