import React, { useEffect, useState } from 'react';
import './item-details.css';
import Loader from '../loader';

const ItemDetails = ({ choosenItem, url, getItem }) => {
    const [item, setItem] = useState(null);
    const [loading, setLoadeing] = useState(true);
    let visibleData;

    useEffect(() => {
        setLoadeing(true);
        let iscanceled = false;
        getItem(choosenItem)
            .then(item => !iscanceled && setItem(item))
            .then(() => setLoadeing(false))
            .catch(() => console.log("Something is going wrong. But don't worry. We will fix this"))
        return () => iscanceled = true;

    }, [choosenItem, getItem]);

    if (loading) {
        visibleData = <Loader />
    } else {
        const propsDataArr =  Object.entries(item);
        visibleData = (
            <>
                <img src={`${url}${choosenItem}.jpg`} alt={item.name} />
                <div className="listProps">
                    <ul className="list-group">
                        <h2>{item.name}</h2>
                        {propsDataArr.map(property => (
                            property[0] === "name" ? (null) : (
                            <li key={property[0]} className="list-group-item"><strong>{property[0]} </strong> {property[1]}</li>
                            )
                        ))}
                    </ul>
                </div>
            </>
        )
    }

    return (
        <div className="personWrapper">
            {visibleData}
        </div>
    );
}

export default ItemDetails;