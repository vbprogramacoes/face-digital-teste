import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MostrarProdutos from './MostrarProdutos';
import ProcurarProdutos from './ProcurarProdutos';
import Header from './Header';

export default class Home extends Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <Header 
                    procurar={this.props.procurar} 
                    onChangeProcurar={this.props.onChangeProcurar}
                    produtos={this.props.carrinho_data.produtos}
                    valor={this.props.carrinho_data.valor}
                    all_produtos={this.props.produtos}
                    produto_page={false}
                    checout_page={false}
                    />
                <MostrarProdutos 
                    showProds={this.props.showProds} 
                    carrinho_data={this.props.carrinho_data}
                    onChangeCarrinhoProduto={this.props.onChangeCarrinhoProduto} />  
            </div>
        );
    }
}
