import React from "react";

import CollectionItem from "../collection-item/collection-item.component";

import './preview-collection.styles.scss'


/* This component is where the items are mapped from the shop.data and limited to show the only 4 items (in that collection) in form of a component we made earlier called collectionItem. We will add this component to the shoppage component where we will map through the titles so that we have a collection for each title. for instance Hats will have 4 images with name and price, then for each other title they too will have and title heading (sneakers etc) with 4 images and their names and price */
const PreviewCollection = ({title, items}) => (  /*  The title here is for the collection type for instance hat, then the items are passed)*/
   <div className="collection-preview">
      <h1 className="title">{title.toUpperCase()}</h1>
      <div className="preview">
         {items
            .filter((item, index) => index < 4) /* When the items come(after being mapped below) we will filter them to show only 4 items  */
            .map( ({ id, ...otherItemProps }) => (                     /* the code will map through each item from the shop.data file, having a key id as props and then render/show the item from the shop.data file. We will import this compoent into shoppage along with shop.data file */
               <CollectionItem key={id} {...otherItemProps} />
            ))
         }
      </div>
   </div>
)

export default PreviewCollection;