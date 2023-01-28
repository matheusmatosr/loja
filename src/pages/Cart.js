import React from 'react';
import { useCart } from "react-use-cart";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import '../style.css';

const Cart = () => {

    const { 
        isEmpty,
        totalUniqueItems,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem, 
        emptyCart
    } = useCart();

    if (isEmpty) {
        return (
            <>
                <h1 className='text-center'>Seu carrinho está vázio!</h1>
                &nbsp;
                &nbsp;
                <div className='detalhe1'>
                    <p>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
                </div>
            </>
        );
    };

    return (
        <section className='py-4 container'>
           <div className='row-justify-content-center'>
                <div className='col-12'>
                    <div className='carrinho'>
                        <ShoppingCartSharpIcon />
                        <h1 className='h1'>Carrinho de compras</h1>
                    </div>
                    &nbsp;
                    <h5>Items: {totalUniqueItems}</h5> 
                    <h5 margin-left="500px">Total items: {totalItems}</h5>
                    <table className='table table-light table-hover m-0'> 
                        <tbody>
                            {items.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td>{item.title}</td>
                                        <td>{item.price}</td>
                                        <td>Qtd ({item.quantity})</td>
                                        <td>
                                            <button 
                                                className='btn btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
                                            >-</button>
                                            <button 
                                                className='btn btn-info ms-2'
                                                onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
                                            >+</button>
                                            <button 
                                                className='btn btn-danger ms-2'
                                                onClick={() => removeItem(item.id)}
                                            >Remover</button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </table>    
                </div>
            </div>
            &nbsp;
            &nbsp;
            <div className='col-3 ms-auto'>
                <h2>Preço total: R$ {cartTotal}</h2>
            </div>
            <div className='col-2 ms-auto'>
                <button
                    className='btn btn-dange(r m-2'
                    onClick={() => emptyCart()}
                >Limpar</button>
                <button className='btn btn-primary m-2'>Comprar</button>
            </div>
            &nbsp;
            &nbsp;
            <div className='detalhe2'>
                <p>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
            </div>
        </section>
    );
};

export default Cart;