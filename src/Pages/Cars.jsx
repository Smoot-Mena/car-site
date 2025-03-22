import { useState } from "react";
import cars from "../api/cars-list.json";

const Cars = () => {
  let [carsList, setCarsList] = useState(cars);
  // let [selectedBrand, setSelectedBrand] = useState("");
  let [models, setModels] = useState([]);
  // let [selectedModel, setSelectedModel] = useState("");
  let [input, setInput] = useState({
    selectedBrand: "",
    selectedModel: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput((prevInput) => {
      const updatedInput = { ...prevInput, [name]: value };

      if (name === "selectedBrand") {
        const brandSearch = carsList.find((car) => car.brand === value);

        setModels(brandSearch ? brandSearch.models : []);

        updatedInput.selectedModel = "";
      }

      return updatedInput;
    });
  };

  return (
    <section>
      <form action="" id="car-selector">
        <label htmlFor="brands">Brand: </label>
        <select
          name="selectedBrand"
          onChange={handleChange}
          value={input.selectedBrand}
        >
          <option value="">Select A Brand</option>
          {carsList.map((car, index) => (
            <option value={car.brand} key={index}>
              {car.brand}
            </option>
          ))}
        </select>

        <label htmlFor="models">Model: </label>
        <select
          name="selectedModel"
          onChange={handleChange}
          value={input.selectedModel}
          disabled={!input.selectedBrand}
        >
          <option value="">Select A Model</option>
          {models.map((model, index) => (
            <option value={model} key={index}>
              {model}
            </option>
          ))}
        </select>
      </form>

      {input.selectedModel && (
        <section className="model-pictures">
          <figure>
            <img
              src="https://roadscholars.com/wp-content/uploads/2015/07/the-role-of-placeholder.jpg"
              alt=""
            />
            <figcaption>Placeholder Image</figcaption>
          </figure>
        </section>
      )}
    </section>
  );
};

export default Cars;