import React, { useEffect, useState } from 'react';
import './ArrwoList.css';

export const ArrowList = ({ arrowsDirection }) => (
  <div className="arrow-container">
    {
      arrowsDirection.map((arrowLitem, index) => (
        <div
          key={arrowLitem.id}
          className={`arrow-item arrow-${arrowLitem.direction}`}
          id={`arrow-${arrowLitem.direction}`}
        />
      ))
    }
  </div>
);
