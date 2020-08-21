import React, { Component } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useHistory,
  withRouter
} from "react-router-dom";

import Header from './Header';

class ProdutoPage extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            produto:{},
            quantidade:1
        }
        this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
        this.addProduto = this.addProduto.bind(this);
    }
    componentDidMount()
    {

        let prodID = this.props.match.params.prodID;
        let s = this.state;

        this.props.produtos.map((prod)=>{
            if(prod.id == prodID)
            {
                s.produto = prod;
            }
        });
        this.setState(s);
    }    
    onChangeQuantidade(quant)
    {
        if(quant <= 0){
            quant = 1;
        }
        let s = this.state;
        s.quantidade = parseInt(quant);
        this.setState(s);
    }
    //Adiciona o produto conforme a quantidade solicitada
    addProduto (){

        let updateProdutoCarrinho;

        if(this.props.carrinho_data.produtos == null){
            updateProdutoCarrinho = [{
                id:this.state.produto.id,
                quant:this.state.quantidade
            }];
        }else if(this.props.carrinho_data.produtos.length > 0){
            let onProductCart = false;
            this.props.carrinho_data.produtos.map(prod=>{
                if(prod.id === this.state.produto.id){
                    onProductCart = true;
                }
            });

            if(onProductCart === false){
                let oldProds = this.props.carrinho_data.produtos;
                let newProd = {
                    id:this.state.produto.id,
                    quant:this.state.quantidade
                };

                oldProds.push(newProd);
                updateProdutoCarrinho = oldProds;
            }else if(onProductCart === true) {
                let oldProds = this.props.carrinho_data.produtos;

                for(var count_old_prods = 0; count_old_prods < this.props.carrinho_data.produtos.length; count_old_prods++)
                {
                    if(oldProds[count_old_prods].id === this.state.produto.id)
                    {
                        oldProds[count_old_prods].quant += this.state.quantidade;
                    }
                }

                updateProdutoCarrinho = oldProds;
            }
        }
        this.props.onChangeCarrinhoProduto(updateProdutoCarrinho);
    }
    render()
    {
        return (
            <div className="container">
                <Header 
                    procurar={this.props.procurar} 
                    onChangeProcurar={this.props.onChangeProcurar}
                    produtos={this.props.carrinho_data.produtos}
                    valor={this.props.carrinho_data.valor}
                    all_produtos={this.props.produtos}
                    produto_page={true}
                    checout_page={false}
                    />
                <div className="row produto-page-container">
                    <div className="col-lg-9">
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="product-pic-zoom">
                                    <img className="product-big-img" src={this.state.produto.img} alt="" />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-details">
                                    <div className="pd-title">
                                        <h3>{this.state.produto.nome}</h3>
                                    </div>
                                    <div className="pd-desc">
                                        <h4>R$ {parseFloat(this.state.produto.valor).toFixed(2)}</h4>
                                    </div>
                                    <div className="quantity">
                                        <div className="pro-qty">
                                            <input 
                                                className="form-control" 
                                                type="number"
                                                value={this.state.quantidade} 
                                                onChange={(e)=>{this.onChangeQuantidade(e.target.value)}}/>
                                        </div>
                                        <button 
                                            className="primary-btn pd-cart"
                                            onClick={this.addProduto}>
                                            Comprar
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                   
                </div> 
            </div>
        );
    }
    
}
export default withRouter(ProdutoPage);
