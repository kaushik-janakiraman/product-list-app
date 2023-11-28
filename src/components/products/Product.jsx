import React from 'react'
import productList from '../../constants/productList.json'

const Product = () => {

    return (
        <React.Fragment>
            <div className='product-list'>
                {productList.map(item => {
                    return (
                        <div className='book-box' key={item.title}>
                            <div className='book-image'>
                                <img src={item.image} alt={item.title} width='150px' height='250px'/>
                            </div>
                            <p className='title'>{item.title}</p>
                            <p className='author'>{item.author}</p>
                            <p className='category'>Category: {item.category}</p>
                        </div>
                    )
                })}
            </div>
        </React.Fragment>
    )
}

export default Product