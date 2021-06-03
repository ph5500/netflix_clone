import React from "react";
import "./Banner.css";

function Banner() {
  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASkAAACpCAMAAABAgDvcAAAANlBMVEUAAADk5OSUlJS5ubna2tpERET19fX7+/vw8PDJycnq6urFxcXY2Nirq6vg4OB2dnZsbGxZWVkSDs2DAAABs0lEQVR4nO3Q223CQAAAwbsAxph3/81GSgHO/iGkmQpWO87bfBzZN9flPLbBv57HuYz56Ypv8Lre1vH4dMU3eN8v2zh+uuIbnH4O06nCqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnKqcqpyqnq79R8vt4n9j3vl22sj+v9h333620dy7xdDuy73OYyzsu6TfZt63L+BfEnHFgHRCwoAAAAAElFTkSuQmCC")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_contents">
        <h1 className="banner_title">Movie Name</h1>
        <div className="banner_buttons">
          <button className="banner_button">Play</button>
          <button className="banner_button">My List</button>
        </div>
        <h1 className="banner_description">
          {truncate(
            `This is a test description This is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test descriptionThis is a test description`,
            150
          )}
        </h1>
      </div>
      <div className="banner_fadeBottom" />
    </header>
  );
}

export default Banner;
