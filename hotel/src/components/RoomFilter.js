import React from "react";
import { useContext } from "react";
import { RoomContext } from "../context";
import Title from "../components/Title";

//get all unique value

const getUnique = (items, value) => {
  return [...new Set(items.map((item) => item[value]))];
};

export default function RoomFilter() {
  const context = useContext(RoomContext);
  const {
    handleChange,
    type,
    capacity,
    price,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets,
  } = context;

  // get unique types
  let types = getUnique(context.rooms, "type");
  //add all
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, index) => {
    return (
      <option value={item} key={index}>
        {item}
      </option>
    );
  });

  let people = getUnique(context.rooms, "capacity");
  people = people.map((item, index) => {
    return (
      <option key={index} value={item}>
        {item}
      </option>
    );
  });

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
            <option value="single">single</option>
          </select>
        </div>

        {/*end select type */}

        {/*guests */}
        <div className="form-group">
          <label htmlFor="capacity">Guests</label>
          <select
            name="capacity"
            id="capacty"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>

        {/*end guests */}

        {/*room price*/}
        <div className="form-group">
          <label htmlFor="price">room price Rs.{price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          ></input>
        </div>

        {/* end of room price*/}
        {/* Size*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            ></input>

            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            ></input>
          </div>
        </div>
        {/* End ofSize*/}
        {/*extras*/}
        <div className="form-group">
          <div className="single-extras">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            ></input>
            <label htmlFor="breakfast">breakfast</label>
          </div>

          <div className="single-extras">
            <input
              type="checkbox"
              name="pets"
              id="breakfast"
              checked={pets}
              onChange={handleChange}
            ></input>
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/* end of extras*/}
      </form>
    </section>
  );
}
