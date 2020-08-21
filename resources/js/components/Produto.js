import React, { Component } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Produto extends Component
{
	constructor(props)
    {
        super(props);
        this.addProduto = this.addProduto.bind(this);
	}
	//Adiciona uma unidade de produto 
	addProduto (){

		let updateProdutoCarrinho;
		if(this.props.carrinho_data.produtos == null){
			updateProdutoCarrinho = [{
				id:this.props.data.id,
				quant:1
			}];
		}else if(this.props.carrinho_data.produtos.length > 0){
			let onProductCart = false;
			this.props.carrinho_data.produtos.map(prod=>{
				if(prod.id === this.props.data.id){
					onProductCart = true;
				}
			});

			if(onProductCart === false){
				let oldProds = this.props.carrinho_data.produtos;
				let newProd = {
					id:this.props.data.id,
					quant:1
				};

				oldProds.push(newProd);
				updateProdutoCarrinho = oldProds;
			}else if(onProductCart === true) {
				let oldProds = this.props.carrinho_data.produtos;

				for(var count_old_prods = 0; count_old_prods < this.props.carrinho_data.produtos.length; count_old_prods++)
				{
					if(oldProds[count_old_prods].id === this.props.data.id)
					{
						oldProds[count_old_prods].quant++;
					}
				}

				updateProdutoCarrinho = oldProds;
			}
		}
		this.props.onChangeCarrinhoProduto(updateProdutoCarrinho);
	}
	render()
	{
		return(
			<div className="col-lg-4 col-sm-6">
	            <div className="product-item">
	                <div className="pi-pic">
	                	{ this.props.data.img != '' && <img src={this.props.data.img} alt=""/> }
	                    <ul>
	                        <li className="quick-view">
	                        	<Link to={`/produto/${this.props.data.id}`}>
	                        	Ver produto
	                        	</Link>
	                        </li>
	                        <li className="w-icon">
	                        	<button className="container-produto-add" onClick={this.addProduto}>
									<AiOutlinePlus />
								</button>
	                        </li>
	                    </ul>
	                </div>
	                <div className="pi-text">
	                    <div className="catagory-name">Shoes</div>
	                    <Link to={`/produto/${this.props.data.id}`}>
	                        <h5>{ this.props.data.nome }</h5>
	                    </Link>
	                    <div className="product-price">
	                        {`R$ ${this.props.data.valor.toFixed(2)}`}
	                    </div>
	                </div>
	            </div>
	        </div>
			
		);
	}	
}