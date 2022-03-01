import React from "react";

import './collection-item.styles.scss';

/* This component is simply the individual item that contains the image of the item, name and price of th item, the shop.data items will be mapped and this component will be used to display the output for each item being mapped */
const CollectionItem = ({id, name, price, imageUrl}) => (
    <div className="collection-item">
        <div 
            className="image"
            style={{
                backgroundImage: `url(${imageUrl})`      /* imageURL here will be dynamic for when the items from the shop.data file are mapped in the Preview-collection component using the id. id is passed inas a prop so that it can be used later when the items are mapped using the id*/
            }}
        />
        <div className="collection-footer">
            <span className="name">{ name }</span>      {/* name is passes in here dynamically as per the items that are being mapped inside the preview-colletion component and similarly the price in the next line */}
            <span className="price">{ price }</span>
        </div>
    </div>
);

export default CollectionItem;