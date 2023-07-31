import React from "react"
import FashionDeals from "./Fashion/FashionDeals"
//import GardenDeals from "./HomeGarden/GardenDeals"
import ElectronicDeals from "./Electronic/ElectronicDeals"
import ProductList from "./Productlist"
const Product = ({ fashionItems, addToCart, electronicItems, HGItems }) => {
    return (
        <>
        <ProductList />
        <FashionDeals fashionItems={fashionItems} addToCart={addToCart} />
        <ElectronicDeals  electronicItems={electronicItems} addToCart={addToCart}/>
        {/*<GardenDeals HGItems={HGItems} addToCart={addToCart} />*/}
        </>
    )

}
export default Product;