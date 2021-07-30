import React, { useEffect, useState } from 'react';
import './item-list.css';
import Loader from '../loader';

const ItemList = ({getElements, changeItem}) => {

    
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);
    let visibleContent;

    useEffect(() => {
        getElements()
            .then(data => setItems(data))
            .then(
                () => {
                    setLoading(false);
                }
            )
    }, [getElements]);


    loading ? (
        visibleContent = <Loader />
    ) : (
        visibleContent = items.map(itm => {
            const regexp = /\/\d+\/$/;
            const str = itm.url;

            const preResult = str.match(regexp);
            const id = +preResult[0].slice(1, preResult[0].length - 1);

            return (
                <li
                    className="list-group-item"
                    key={itm.name}
                    onClick={() => changeItem(id)}
                >{itm.name}</li>
            )
        })
    )

    return (
        <div className="listItemWrapper">
            <ul className="list-group">
                {visibleContent}
            </ul>
        </div>
    );
}

export default ItemList;