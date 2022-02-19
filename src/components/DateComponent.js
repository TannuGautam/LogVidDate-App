import React, { useState, useEffect } from "react";
import { DatePickerComponent } from "@syncfusion/ej2-react-calendars";

const DateComponent = () => {
  const [selectStartDate, setStartDate] = useState(new Date());
  const [selectEndDate, setEndDate] = useState(new Date());
  const [duration, setDuration] = useState(0);

  const handleClick = () => {
    var result = new Date(
      selectStartDate.getTime() + duration * 24 * 60 * 60 * 1000
    );
    setEndDate(result);
  };

  return (
    <div className="date-container">
      <div className="">
        <DatePickerComponent
          value={selectStartDate}
          className="date-section"
          placeholder="From Date"
          onChange={(date) => {
            setStartDate(date.value);
          }}
          format="Mmm dd yyyy"
        />
        <div className="inpt-container">
          <input
            type="text"
            value={duration}
            onChange={(e) => {
              setDuration(e.target.value);
            }}
            placeholder="Duration"
            className="inpt"
          ></input>
          <button onClick={handleClick} className="btn">
            Generate
          </button>
        </div>
        <DatePickerComponent
          value={selectEndDate}
          className="date-section"
          onChange={(date) => {
            setEndDate(date);
          }}
          placeholder="To Date"
          format="Mmm dd yyyy"
        />
      </div>
    </div>
  );
};

export default DateComponent;
