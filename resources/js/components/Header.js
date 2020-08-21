import React, { Component } from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { Link } from "react-router-dom";

import ProcurarProdutos from './ProcurarProdutos';

export default class Header extends Component
{
	constructor(props)
    {
		super(props);
        this.state = {
            valor:0.00,
            produtos:[],
            prevProps:'',
            cart_produtos:[]
        }
	}
    componentDidMount()
    {
        if(typeof this.props.produtos != 'undefined')
        {
            let s = this.state;
            if(this.props.produtos != null){
                s.produtos = this.props.produtos;
            }else {
                s.produtos = [];
            }
            s.valor = this.props.valor;
            this.setState(s);
        }
        if(typeof this.props.all_produtos != 'undefined')
        {
            let s = this.state;
            if(this.props.all_produtos != null && s.produtos != null)
            {
                this.props.all_produtos.map((prod)=>{
                    s.produtos.map((cart_prod)=>{
                        if(prod.id === cart_prod.id){
                            let new_prod = prod;
                            new_prod.quantidade = cart_prod.quant;
                            s.cart_produtos.push(new_prod);
                        }
                    });
                });
            }
            
            this.setState(s);
        }
    }
    componentDidUpdate(prevProps)
    {
        if (this.props.produtos !== prevProps.produtos || this.props.valor !== prevProps.valor) {
            let s = this.state;
            if(this.props.produtos != null){
                s.produtos = this.props.produtos;
                s.valor = this.props.valor;
            }          
            
            this.setState(s);
        }
        if (this.props.produtos !== prevProps.produtos || this.props.valor !== prevProps.valor || this.props.all_produtos !== prevProps.all_produtos) {
            let s = this.state;
            s.cart_produtos = [];
            this.props.all_produtos.map((prod)=>{
                s.produtos.map((cart_prod)=>{
                    if(prod.id === cart_prod.id){
                        let new_prod = prod;
                        new_prod.quantidade = cart_prod.quant;
                        s.cart_produtos.push(new_prod);
                    }
                });
            });
            this.setState(s);
        }
    }
    //Renderização condicional para cada página
	render()
	{
        if(this.props.produto_page == false && this.props.checout_page == false)
        {
            //Cabeçalho completo
            return(
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <Link to="/">
                                    Eleven Software
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="advanced-search" >
                            <ProcurarProdutos 
                                procurar={this.props.procurar} 
                                onChangeProcurar={this.props.onChangeProcurar}
                            />                                
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li className="cart-icon">
                                    <Link 
                                        to="/checkout"
                                        className="nav-link" >
                                        <AiOutlineShoppingCart />
                                        <span>{this.state.produtos.length}</span>
                                    </Link>
                                    <div className="cart-hover">
                                        <div className="select-items">
                                            <table>
                                                <tbody>
                                                {
                                                    this.state.cart_produtos.map((prod, index)=>{
                                                        return(
                                                            <tr key={index}>
                                                                <td className="si-pic">
                                                                    <img src={prod.img} alt=""/>
                                                                </td>
                                                                <td className="si-text">
                                                                    <div className="product-selected">
                                                                        <p>R$ {prod.valor.toFixed(2)} 
                                                                            x 
                                                                            {prod.quantidade}
                                                                    </p>
                                                                        <h6>{prod.nome}</h6>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                                    
                                                </tbody>
                                            </table>
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>
                                                    {`R$ ${this.state.valor.toFixed(2)}`}
                                                </h5>
                                            </div>
                                            <div className="select-button">
                                                <Link 
                                                    className="primary-btn checkout-btn" 
                                                    to="/checkout">
                                                    CHECK OUT
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li className="cart-price">
                                    {`R$ ${this.state.valor.toFixed(2)}`}
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }else if(this.props.produto_page == false && this.props.checout_page == true){
            //Cabeçalho apenas com a logo
            return(
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <Link to="/">
                                    Eleven Software
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                        </div>
                    </div>
                </div>
            );
        }else {
            //Cabeçalho sem o menu de busca
            return(
                <div className="inner-header">
                    <div className="row">
                        <div className="col-lg-2 col-md-2">
                            <div className="logo">
                                <Link to="/">
                                    Eleven Software
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-7 col-md-7">
                            <div className="advanced-search" style={{border:0}}>                              
                            </div>
                        </div>
                        <div className="col-lg-3 text-right col-md-3">
                            <ul className="nav-right">
                                <li key="cart-data" className="cart-icon">
                                    <Link 
                                        className="nav-link" 
                                        to="/checkout">
                                        <AiOutlineShoppingCart />
                                        <span>{this.state.produtos.length}</span>
                                    </Link>
                                    <div className="cart-hover">
                                        <div className="select-items">
                                            <table>
                                                <tbody>
                                                {
                                                    this.state.cart_produtos.map((prod, index)=>{
                                                        return(
                                                            <tr key={index}>
                                                                <td className="si-pic">
                                                                    <img src={prod.img} alt=""/>
                                                                </td>
                                                                <td className="si-text">
                                                                    <div className="product-selected">
                                                                        <p>R$ {prod.valor.toFixed(2)} 
                                                                            x 
                                                                            {prod.quantidade}
                                                                    </p>
                                                                        <h6>{prod.nome}</h6>
                                                                    </div>
                                                                </td>
                                                            </tr>
                                                        );
                                                    })
                                                }
                                                    
                                                </tbody>
                                            </table>
                                            <div className="select-total">
                                                <span>total:</span>
                                                <h5>
                                                    {`R$ ${this.state.valor.toFixed(2)}`}
                                                </h5>
                                            </div>
                                            <div className="select-button">
                                                <Link 
                                                    className="primary-btn checkout-btn" 
                                                    to="/checkout">
                                                    CHECK OUT
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                                <li key="cart-price" className="cart-price">{`R$ ${this.state.valor.toFixed(2)}`}</li>
                            </ul>
                        </div>
                    </div>
                </div>
            );
        }
	}
}

