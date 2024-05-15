import React from 'react';

const DatePicker = ({ selectedDate, onDateChange }) => {
  return (
    <div className="form-group">
      <input
        type="date"
        className="form-control"
        value={selectedDate}
        onChange={(e) => onDateChange(e.target.value)}
      />
    </div>
  );
};

export default DatePicker;

