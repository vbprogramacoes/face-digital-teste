import React, { Component } from 'react';

export default class CheckoutProduto extends Component {
	constructor(props)
	{
		super(props);
		this.state = {
			data:{
				id:0,
				quantidade:0
			}
		}
		this.onChangeQuantidade = this.onChangeQuantidade.bind(this);
	}
	componentDidMount()
	{
		let s = this.state;
		s.data.id = this.props.data.id;
		s.data.quantidade = this.props.data.quantidade;

		this.setState(s);
	}
	//Função para modificação de quantidade caso queira implementar posteriormente
	onChangeQuantidade(quant)
	{
		//verif
		if(quant <= 0){
			quant = 1;
		}
		let old_produtos = this.props.produtos;
		for(var count_produtos = 0; count_produtos < old_produtos.length; count_produtos++)
		{
			if(old_produtos[count_produtos].id === this.state.data.id)
			{
				old_produtos[count_produtos].quant = parseInt(quant);
			}
		}
		
		let s = this.state;
		s.data.quantidade = parseInt(quant);
		this.setState(s);
		this.props.onChangeCarrinhoProduto(old_produtos);
	}
	render()
	{
		return(
			<li className="fw-normal">
				{this.props.data.nome} x {this.state.data.quantidade} (R$ {this.props.data.valor})
				<span>R$ {parseFloat(this.state.data.quantidade*this.props.data.valor).toFixed(2)}</span>
			</li>
		);
	}
	
}