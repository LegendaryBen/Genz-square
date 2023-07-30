import React from 'react'
import {Link} from 'react-router-dom'

const Products = ({name,product1,product2,product3}) => {
    return (
        <div>
            <div className='products'>
               {name} 
            </div>
            <div className="main-products">
                <Link>
                    {product1} 
                </Link>
            </div>
            <div className="main-products">
                <Link>
                    {product2} 
                </Link>
            </div>
            <div className="main-products">
                <Link>
                    {product3}
                </Link>
            </div>
        </div>
    )
}

export default Products
