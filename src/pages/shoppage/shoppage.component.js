import React from "react";
import SHOP_DATA from "./shop.data";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

/* Main shop page in which we will map through all the titles from shop.data (hats, sneakers etc) to show individual collections for each on the one page. */
class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA  /* shop data from shop.data is brough in has a state and later this state called collection will be used to map through the shop.data */
        }
    
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                { /* This will map through the state collections from the SHOP_DATA for each title with an id as key (hats sneakers etc) and it will show the  PreviewCollection (go to PreviewCollection component) */
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;