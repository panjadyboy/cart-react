import React from 'react';

function ProductList({product , addToCart}) {
    return (
        <div style={{display:'flex' ,flexWrap:'wrap', }}>
            {
                product.map((productItem , productIndex) => {
                    return (
                        <div style={{width:'50%' }}>
                            <div>

                            
                                <img src={productItem.image} width="100%" style={{width:400 , height:400}}/>
                                <p style={{fontSize:40 , fontWeight:600 , color:'red' , marginLeft:30}}>{productItem.name}</p>
                                 <p style={{fontSize:30 , fontWeight:500 ,marginLeft:30 , color:'red'}}>Rs {productItem.price}</p>
                                 <button onClick={() => addToCart(productItem)} style={{width:130 , height:30 , borderRadius:10 , marginLeft:30, backgroundColor:'red' , color:'white' , marginBottom:40}}>Add To Cart</button>
                                </div>

                            
                            </div>
                    )
                })
            }
        </div>
    );
}

export default ProductList;