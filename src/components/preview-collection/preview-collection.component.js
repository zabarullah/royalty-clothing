import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './preview-collection.styles.scss'

const PreviewCollection = ({title, items}) => (
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
         {items
            .filter((item, index) => index < 4) /* When the items come (after being mapped below) we will filter them to show only 4  */
            .map( ({ id, ...otherItemProps }) => (                     /* and the rest of the code will map through each item from the items with the key id and show the item name from the shop.data file when this component is imported into shoppage along with shop.data file */
               <CollectionItem key={id} {...otherItemProps} />
            ))
         }
      </div>
   </div>
)

export default PreviewCollection;