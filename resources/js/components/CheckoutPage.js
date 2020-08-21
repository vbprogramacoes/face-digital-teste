import React, { Component } from 'react';

import Header from './Header';
import CheckoutProduto from './CheckoutProduto';
import { Link } from "react-router-dom";

export default class CheckoutPage extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			produtos:[],
			nome:'',
			sobrenome:'',
			email:'',
			cpf:'',
			cep:'',
			logradouro:'',
			bairro:'',
			cidade:'',
			estado:'',
			pais:''
		};
		this.setProdutos = this.setProdutos.bind(this);
		this.onChangeNome = this.onChangeNome.bind(this);
		this.onChangeSobrenome = this.onChangeSobrenome.bind(this);
		this.onChangeEmail = this.onChangeEmail.bind(this);
		this.onChangeCPF = this.onChangeCPF.bind(this);
		this.onChangeLogradouro = this.onChangeLogradouro.bind(this);
		this.onChangeBairro = this.onChangeBairro.bind(this);
		this.onChangeCidade = this.onChangeCidade.bind(this);
		this.onChangeEstado = this.onChangeEstado.bind(this);
		this.onChangePais = this.onChangePais.bind(this);
		this.setDadosUsuario = this.setDadosUsuario.bind(this);
	}
	componentDidMount()
	{
		this.setDadosUsuario();
		this.setProdutos();
	}
	setDadosUsuario()
	{
		if(typeof this.props.carrinho_data != 'undefined'){
			let s = this.state;
			s.nome = this.props.carrinho_data.nome;
			s.sobrenome = this.props.carrinho_data.sobrenome;
			s.email = this.props.carrinho_data.email;
			s.cpf = this.props.carrinho_data.cpf;
			s.cep = this.props.carrinho_data.cep;
			s.logradouro = this.props.carrinho_data.logradouro;
			s.bairro = this.props.carrinho_data.bairro;
			s.cidade = this.props.carrinho_data.cidade;
			s.estado = this.props.carrinho_data.estado;
			s.pais = this.props.carrinho_data.pais;
			this.setState(s);
		}
	}
	//seta os produtos para listagem
	setProdutos()
	{
		let s = this.state;
		if(this.props.carrinho_data.produtos != null)
		{
			this.props.carrinho_data.produtos.map((cart_prod)=>{
				this.props.produtos.map((prod)=>{
					if(cart_prod.id === prod.id)
					{
						let prepare_prod = prod;
						prepare_prod.quantidade = cart_prod.quant;
						s.produtos.push(prod);
					}
				});	
			});
		}
		
		this.setState(s);
	}
	onChangeNome(nome)
	{
		let s = this.state;
		this.props.onChangeNome(nome);
		s.nome = nome;
		this.setState(s);
	}
	onChangeSobrenome(sobrenome){
		let s = this.state;
		this.props.onChangeSobrenome(sobrenome);
		s.sobrenome = sobrenome;
		this.setState(s);
	}
	onChangeEmail(email)
	{
		let s = this.state;
		this.props.onChangeEmail(email);
		s.email = email;
		this.setState(s);
	}
	retornaNumero(str) {
	    str = str.toString();
	    return str.replace(/\D/g,'');
	}
	onChangeCPF(string)
	{
		let s = this.state;
		let cpf = this.retornaNumero(string);
		this.props.onChangeCPF(cpf);
		s.cpf = cpf;
		this.setState(s);
	}
	onChangeCEP(string)
	{
		let s = this.state;
		let cep = this.retornaNumero(string);
		this.props.onChangeCEP(cep);
		s.cep = cep;
		this.setState(s);
	}
	onChangeLogradouro(logradouro)
	{
		let s = this.state;
		this.props.onChangeLogradouro(logradouro);
		s.logradouro = logradouro;
		this.setState(s);
	}
	onChangeBairro(bairro)
	{
		let s = this.state;
		this.props.onChangeBairro(bairro);
		s.bairro = bairro;
		this.setState(s);
	}
	onChangeCidade(cidade)
	{
		let s = this.state;
		this.props.onChangeCidade(cidade);
		s.cidade = cidade;
		this.setState(s);
	}
	onChangeEstado(estado)
	{
		let s = this.state;
		this.props.onChangeEstado(estado);
		s.estado = estado;
		this.setState(s);
	}
	onChangePais(pais)
	{
		let s = this.state;
		this.props.onChangePais(pais);
		s.pais = pais;
		this.setState(s);
	}
	//renderização condicional para caso não hajo produtos no carrinho
	render()
	{
		if(this.state.produtos.length > 0)
		{
			return(
				<div className="container">
					<Header 
	                    procurar={this.props.procurar} 
	                    onChangeProcurar={this.props.onChangeProcurar}
	                    produtos={this.props.carrinho_data.produtos}
	                    valor={this.props.carrinho_data.valor}
	                    all_produtos={this.props.produtos}
	                    produto_page={false}
	                    checout_page={true}
                    />
                    <section className="checkout-section spad">
				        <div className="container">
				            <div className="checkout-form">
				                <div className="row">
				                    <div className="col-lg-6">
				                        <h4>Dados do usuário</h4>
				                        <div className="row">
				                            <div className="col-lg-6">
				                                <label htmlFor="fir">Nome<span>*</span></label>
				                                <input 
				                                	type="text" 
				                                	value={this.state.nome} 
				                                	onChange={(e)=>{this.onChangeNome(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-6">
				                                <label htmlFor="last">Sobrenome<span>*</span></label>
				                                <input 
				                                	type="text" 
				                                	value={this.state.sobrenome} 
				                                	onChange={(e)=>{this.onChangeSobrenome(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="last">E-mail<span>*</span></label>
				                                <input 
				                                	type="email" 
				                                	value={this.state.email} 
				                                	onChange={(e)=>{this.onChangeEmail(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="last">CPF<span>*</span></label>
				                                <input 
				                                	type="text" 
				                                	maxLength="11"
				                                	value={this.state.cpf} 
				                                	onChange={(e)=>{this.onChangeCPF(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="zip">CEP</label>
				                                <input 
				                                	type="text" 
				                                	maxLength="8"
				                                	value={this.state.cep} 
				                                	onChange={(e)=>{this.onChangeCEP(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="street">Logradouro<span>*</span></label>
				                                <input 
				                                	type="text" 
				                                	className="street-first" 
				                                	value={this.state.logradouro} 
				                                	onChange={(e)=>{this.onChangeLogradouro(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="street">Bairro<span>*</span></label>
				                                <input 
				                                	type="text"
				                                	className="street-first" 
				                                	value={this.state.bairro} 
				                                	onChange={(e)=>{this.onChangeBairro(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="town">Cidade<span>*</span></label>
				                                <input 
				                                	type="text" 
				                                	value={this.state.cidade} 
				                                	onChange={(e)=>{this.onChangeCidade(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="street">Estado<span>*</span></label>
				                                <input
				                                	type="text" 
				                                	className="street-first" 
				                                	value={this.state.estado} 
				                                	onChange={(e)=>{this.onChangeEstado(e.target.value)}}/>
				                            </div>
				                            <div className="col-lg-12">
				                                <label htmlFor="cun">País<span>*</span></label>
				                                <input
				                                	type="text" 
				                                	value={this.state.pais} 
				                                	onChange={(e)=>{this.onChangePais(e.target.value)}}/>
				                            </div>
				                        </div>
				                    </div>
				                    <div className="col-lg-6">
				                        <div className="place-order">
				                            <h4>Carrinho</h4>
				                            <div className="order-total">
				                                <ul className="order-table">
				                                	<li>Product <span>Total</span></li>
				                                	{
										    			this.state.produtos.map((prod,index)=>{
										    				return <CheckoutProduto 
										    					key={index} 
										    					data={prod} 
										    					produtos={this.props.carrinho_data.produtos}
										    					onChangeCarrinhoProduto={this.props.onChangeCarrinhoProduto}/>
										    			})
										    		}
										    		<li className="fw-normal">Subtotal <span>R$ {this.props.carrinho_data.valor}</span></li>
                                    				<li className="total-price">Total <span>R$ {this.props.carrinho_data.valor}</span></li>
				                                </ul>
				                                <div className="order-btn">
				                                    <button 
														className="site-btn place-btn"
														onClick={this.props.comprarCarrinho}
													>
														Comprar
													</button>
				                                </div>
				                            </div>
				                        </div>
				                    </div>
				                </div>
				            </div>
				        </div>
				    </section>
				</div>
			);
		}else {
			return(
				<div className="container">
					<Header 
	                    procurar={this.props.procurar} 
	                    onChangeProcurar={this.props.onChangeProcurar}
	                    produtos={this.props.carrinho_data.produtos}
	                    valor={this.props.carrinho_data.valor}
	                    all_produtos={this.props.produtos}
	                    produto_page={false}
	                    checout_page={true}
	                />
					<section className="checkout-section spad">
				        <div className="container">
				            <div className="checkout-form">
				                <div className="row">
									<div className="place-order">
			                            <h4>Carrinho</h4>
			                            <div className="order-total">
			                                Seu Carrinho está vazio <br/>
			                                <Link to="">
			                                	Clique aqui para acessar a loja
			                                </Link>
			                            </div>
			                        </div>
				                </div>
				            </div>
				        </div>
				    </section>
			    </div>
			);
		}
	}
}