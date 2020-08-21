import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Produto from './Produto';

export default class MostrarProdutos extends Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="product-list">
                <div className="row">
                    {
                        this.props.showProds.map((prod)=>{
                            return <Produto 
                                key={prod.id} 
                                data={prod}
                                carrinho_data={this.props.carrinho_data}
                                onChangeCarrinhoProduto={this.props.onChangeCarrinhoProduto}
                            />;
                        })
                    }
                </div>
            </div>
        );
    } 
}
