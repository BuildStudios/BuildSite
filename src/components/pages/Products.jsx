import '../../scss/page.scss'
import ProductCard from '../ProductCard';

import HeroJumperImage from '../../img/herojumper.png'

function Products() {
    return (
        <div>
            <h1>Our Products</h1>
            <h3>Here you can see all products made by us.</h3>

            <ProductCard productName="Hero Jumper" productImage={HeroJumperImage} productPage="/herojumper" />

        </div>
    )
}

export default Products;