import React, { useState } from 'react';
import { useCart } from "react-use-cart";
import ShoppingCartSharpIcon from '@mui/icons-material/ShoppingCartSharp';
import '../style.css';
import { Alert, Collapse, IconButton } from '@mui/material';

const Cart = () => {
    const [open, setOpen] = useState();

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
                <div className='carrinhoVazio'>
                    <ShoppingCartSharpIcon />
                    <h1 className='text-center'>Carrinho vazio!</h1>
                </div>
                <div className='detalhe1'>
                    <p>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
                </div>
                &nbsp;
                &nbsp;
            </>
        );
    };

    return (
        <section className='py-4 container'>
           <div className='row-justify-content-center'>
                <div className='col-12'>
                    <div className='carrinho'>
                        <ShoppingCartSharpIcon style={{width:'50px', height:'50px', marginTop:'-10px', color:'red'}}/>
                        <h1 className='h1'>Carrinho de compras</h1>
                    </div>
                    &nbsp;
                    <div className='info'>
                        
                        <h5 className='value'> - Items: {totalUniqueItems}</h5> 
                        <h5 className='value' margin-left="500px"> - Total items: {totalItems}</h5>
                    </div>
                    <table className='table table-light table-hover m-0'> 
                        <tbody>
                            {items.map((item, index) => {
                                return(
                                    <tr key={index}>
                                        <td>
                                            <img src={item.img} style={{height: '6rem'}} />
                                        </td>
                                        <td className="value">{item.title}</td>
                                        <td className="value">{item.price}</td>
                                        <td className="value">Qtd ({item.quantity})</td>
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
                <button 
                    className='btn btn-primary m-2' 
                    onClick={() => setOpen(true)}
                >Comprar</button>
            </div>
            <Collapse in={open}>
              <Alert 
                className="alert"
                action={
                  <IconButton onClick={() => setOpen(false)}>
                    x
                  </IconButton>
                }
              > Obrigado, compra realizada com sucesso!
              </Alert>
            </Collapse>
            &nbsp;
            &nbsp;
            <div className='detalhe2'>
                <p>@ 2023 by <a href="https://www.linkedin.com/in/matheus-matos-1a523221b/">Matheus Matos</a></p>
            </div>
        </section>
    );
};

export default Cart;