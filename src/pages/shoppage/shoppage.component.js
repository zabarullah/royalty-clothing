import React from "react";
import SHOP_DATA from "./shop.data";

import PreviewCollection from "../../components/preview-collection/preview-collection.component";

class ShopPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            collections: SHOP_DATA
        }
    
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                { /* This will map through the collections from the SHOP_DATA for each title with an id as key (hats sneakers etc) it will show for component PreviewCollection the item name(got to PreviewCollection component) */
                    collections.map(({ id, ...otherCollectionProps }) => (
                        <PreviewCollection key={id} {...otherCollectionProps} />
                    ))
                }
            </div>
        );
    }

}

export default ShopPage;