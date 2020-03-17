import React, {useEffect, useState} from 'react';
import './ArrwoList.css';


export const ArrowList = ({arrowsDirection}) => {

    return (
        <div className="arrow-container">
            {
                arrowsDirection.map((arrowLitem, index) => (
                    <div
                        key={arrowLitem.id}
                        className={`arrow-item arrow-${arrowLitem.direction}`}
                        id={`arrow-${arrowLitem.direction}`}
                    >

                    </div>
                ))
            }
        </div>
    )

}
