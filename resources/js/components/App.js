import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './Home';
import ProdutoPage from './ProdutoPage';
import CheckoutPage from './CheckoutPage';

export default class App extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            produtos:[],
            showProds:[],
            procurar:'',
            carrinho_data:{},
            userData:{}
        };
        this.iniciarProdutos = this.iniciarProdutos.bind(this);
        this.onChangeProcurar = this.onChangeProcurar.bind(this);
        this.setShowProds = this.setShowProds.bind(this);
        this.pegarIPUser = this.pegarIPUser.bind(this);
        this.iniciarCarrinho = this.iniciarCarrinho.bind(this);
        this.onChangeCarrinhoProduto = this.onChangeCarrinhoProduto.bind(this);
        this.updateCarrinho = this.updateCarrinho.bind(this);
        this.carrinhoDataUpdate = this.carrinhoDataUpdate.bind(this);
        this.onChangeNome = this.onChangeNome.bind(this);
        this.onChangeSobrenome = this.onChangeSobrenome.bind(this);
        this.onChangeEmail = this.onChangeEmail.bind(this);
        this.onChangeCPF = this.onChangeCPF.bind(this);
        this.onChangeCEP = this.onChangeCEP.bind(this);
        this.onChangeLogradouro = this.onChangeLogradouro.bind(this);
        this.onChangeBairro = this.onChangeBairro.bind(this);
        this.onChangeCidade = this.onChangeCidade.bind(this);
        this.onChangeEstado = this.onChangeEstado.bind(this);
        this.onChangePais = this.onChangePais.bind(this);
        this.comprarCarrinho = this.comprarCarrinho.bind(this);
        this.concluirCarrinho = this.concluirCarrinho.bind(this);
    }
    componentDidMount()
    {
        this.iniciarProdutos();
        this.pegarIPUser();
    }
    //retorna os dados de todos os produtos
    iniciarProdutos()
    {
        fetch('/api/produtos')
        .then(res => res.json())
        .then(res => {
            let s = this.state;
            s.produtos = res.result;
            s.showProds = res.result;
            this.setState(s);
        });
    }
    //retorna o ip do usuário
    pegarIPUser()
    {
        fetch('/api/carrinho/ip')
        .then(res => res.json())
        .then(res => {
            if(res.error == false){
                let s = this.state;
                s.userData.id = res.result;
                this.setState(s);
                this.iniciarCarrinho();
            } 
        });
    }
    //verifica se o usário já tem um carrinho referen te ao seu ip
    iniciarCarrinho()
    {
        fetch(`/api/carrinho/${this.state.userData.id}`)
        .then(res => res.json())
        .then(res => {
            if(res.error == false)
            {
                let s = this.state;
                if(res.result.produtos != null)
                {
                    s.carrinho_data = res.result;
                    s.carrinho_data.produtos = JSON.parse(res.result.produtos);
                    s.carrinho_data.id_user = s.userData.id;
                    if(res.result.nome != null){
                        s.carrinho_data.nome = res.result.nome;
                    }else {
                        s.carrinho_data.nome = '';
                    }
                    if(res.result.sobrenome != null){
                        s.carrinho_data.sobrenome = res.result.sobrenome;
                    }else {
                        s.carrinho_data.sobrenome = '';
                    }
                    if(res.result.email != null){
                        s.carrinho_data.email = res.result.email;
                    }else {
                        s.carrinho_data.email = '';
                    }
                    if(res.result.cpf != null){
                        s.carrinho_data.cpf = res.result.cpf;
                    }else {
                        s.carrinho_data.cpf = '';
                    }
                    if(res.result.bairro != null){
                        s.carrinho_data.bairro = res.result.bairro;
                    }else {
                        s.carrinho_data.bairro = '';
                    }
                    if(res.result.cep != null){
                        s.carrinho_data.cep = res.result.cep;
                    }else {
                        s.carrinho_data.cep = '';
                    }
                    if(res.result.cidade != null){
                        s.carrinho_data.cidade = res.result.cidade;
                    }else {
                        s.carrinho_data.cidade = '';
                    }
                    if(res.result.estado != null){
                        s.carrinho_data.estado = res.result.estado;
                    }else {
                        s.carrinho_data.estado = '';
                    }
                    if(res.result.pais != null){
                        s.carrinho_data.pais = res.result.pais;
                    }else {
                        s.carrinho_data.pais = '';
                    }
                    if(res.result.logradouro != null){
                        s.carrinho_data.logradouro = res.result.logradouro;
                    }else {
                        s.carrinho_data.logradouro = '';
                    }
                }else {
                    s.carrinho_data = res.result;
                    s.carrinho_data.id_user = s.userData.id;
                    if(res.result.nome != null){
                        s.carrinho_data.nome = res.result.nome;
                    }else {
                        s.carrinho_data.nome = '';
                    }
                    if(res.result.sobrenome != null){
                        s.carrinho_data.sobrenome = res.result.sobrenome;
                    }else {
                        s.carrinho_data.sobrenome = '';
                    }
                    if(res.result.email != null){
                        s.carrinho_data.email = res.result.email;
                    }else {
                        s.carrinho_data.email = '';
                    }
                    if(res.result.cpf != null){
                        s.carrinho_data.cpf = res.result.cpf;
                    }else {
                        s.carrinho_data.cpf = '';
                    }
                    if(res.result.bairro != null){
                        s.carrinho_data.bairro = res.result.bairro;
                    }else {
                        s.carrinho_data.bairro = '';
                    }
                    if(res.result.cep != null){
                        s.carrinho_data.cep = res.result.cep;
                    }else {
                        s.carrinho_data.cep = '';
                    }
                    if(res.result.cidade != null){
                        s.carrinho_data.cidade = res.result.cidade;
                    }else {
                        s.carrinho_data.cidade = '';
                    }
                    if(res.result.estado != null){
                        s.carrinho_data.estado = res.result.estado;
                    }else {
                        s.carrinho_data.estado = '';
                    }
                    if(res.result.pais != null){
                        s.carrinho_data.pais = res.result.pais;
                    }else {
                        s.carrinho_data.pais = '';
                    }
                    if(res.result.logradouro != null){
                        s.carrinho_data.logradouro = res.result.logradouro;
                    }else {
                        s.carrinho_data.logradouro = '';
                    }
                }
                
                this.setState(s);
            }
        });
    }

    onChangeProcurar(value)
    {
        let s = this.state;
        s.procurar = value;
        this.setState(s);
        this.setShowProds();
    }

    //Seta os items que é pra ser mostrado de acordo com a string state.procurar
    setShowProds()
    {
        let s = this.state;
        let res = [];

        if(s.procurar != '' && s.procurar.length > 0){
            this.state.produtos.map((prod)=>{

                const pn = prod.nome.toLowerCase();
                const pp = pn.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
                const sn = s.procurar.toLowerCase();
                const sp = sn.normalize('NFD').replace(/[\u0300-\u036f]/g, '');

                if(pp.indexOf(sp) >= 0){
                    res.push(prod);
                }   
            });
        }else {
            res = this.state.produtos;
        }

        s.showProds = res;
        this.setState(s);
    }

    onChangeCarrinhoProduto(prods)
    {
        let s = this.state;
        s.carrinho_data.produtos = prods;
        this.setState(s);

        this.updateCarrinho();
    }

    //altualiza quando houver alguma modificação nos produtos do carrinho
    updateCarrinho()
    {
        let valor = 0;
        let s = this.state;
        s.carrinho_data.produtos.map((car_prod)=>{
            s.produtos.map((prod)=>{
                if(car_prod.id === prod.id){
                    valor += parseFloat(prod.valor)*parseInt(car_prod.quant);
                }
            });  
        });
        s.carrinho_data.valor = parseFloat(valor.toFixed(2));
        this.setState(s);
        this.carrinhoDataUpdate();
    }

    //atualza o carrinho no banco de dados
    carrinhoDataUpdate()
    {

        fetch(`/api/carrinho/${this.state.carrinho_data.id}`, {
            method:'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body:JSON.stringify(this.state.carrinho_data)
        });
    }
    /* Início das funções de atualizar os dados do carrinho */
    onChangeNome(nome)
    {
        let s = this.state;
        s.carrinho_data.nome = nome;
        this.setState(s);
    }
    onChangeSobrenome(sobrenome)
    {
        let s = this.state;
        s.carrinho_data.sobrenome = sobrenome;
        this.setState(s);
    }
    onChangeEmail(email)
    {
        let s = this.state;
        s.carrinho_data.email = email;
        this.setState(s);
    }
    onChangeCPF(cpf)
    {
        let s = this.state;
        s.carrinho_data.cpf = cpf;
        this.setState(s);
    }
    onChangeCEP(cep)
    {
        let s = this.state;
        s.carrinho_data.cep = cep;
        this.setState(s);
    }
    onChangeLogradouro(logradouro)
    {
        let s = this.state;
        s.carrinho_data.logradouro = logradouro;
        this.setState(s);
    }
    onChangeBairro(bairro)
    {
        let s = this.state;
        s.carrinho_data.bairro = bairro;
        this.setState(s);
    }
    onChangeCidade(cidade)
    {
        let s = this.state;
        s.carrinho_data.cidade = cidade;
        this.setState(s);
    }
    onChangeEstado(estado)
    {
        let s = this.state;
        s.carrinho_data.estado = estado;
        this.setState(s);
    }
    onChangePais(pais)
    {
        let s = this.state;
        s.carrinho_data.pais = pais;
        this.setState(s);
    }
    /* Fim das funções de atualizar os dados do carrinho */
    //seta os state do carrinho_data.status como 1
    concluirCarrinho()
    {
        let s = this.state;
        s.carrinho_data.status = 1;
        this.setState(s);
    }
    //verificar os dados do carrinho, envia para salvar e atualizar a páginna
    comprarCarrinho()
    {
        if(
            this.state.carrinho_data.nome == null || this.state.carrinho_data.nome == '' ||
            this.state.carrinho_data.sobrenome == null || this.state.carrinho_data.sobrenome == '' ||
            this.state.carrinho_data.email == null || this.state.carrinho_data.email == '' ||
            this.state.carrinho_data.cpf == null || this.state.carrinho_data.cpf == '' ||
            this.state.carrinho_data.bairro == null || this.state.carrinho_data.bairro == '' ||
            this.state.carrinho_data.cep == null || this.state.carrinho_data.cep == '' ||
            this.state.carrinho_data.cidade == null || this.state.carrinho_data.cidade == '' ||
            this.state.carrinho_data.estado == null || this.state.carrinho_data.estado == '' ||
            this.state.carrinho_data.pais == null || this.state.carrinho_data.pais == '' ||
            this.state.carrinho_data.logradouro == null || this.state.carrinho_data.logradouro == ''
            )
        {
            alert('Preencha todos os campos para fazer o checkout');
            return false;
        }
        this.concluirCarrinho();
        fetch(`/api/carrinho/${this.state.carrinho_data.id}`, {
            method:'PUT',
            headers: {
                'Content-type': 'application/json; charset=UTF-8' // Indicates the content 
            },
            body:JSON.stringify(this.state.carrinho_data)
        })
        .then(res => res.json())
        .then(res => {
            if(res.error == false){
                window.location.reload();
            }else { 
                console.log(res.error_msg);
            }
        });
    }
    render(){
        return (
            <div>
                <Switch>
                    <Route exact path="/" title="Eleve Software">
                        <Home 
                            produtos={this.state.produtos}
                            procurar={this.state.procurar}
                            onChangeProcurar={this.onChangeProcurar}
                            showProds={this.state.showProds}
                            carrinho_data={this.state.carrinho_data}
                            onChangeCarrinhoProduto={this.onChangeCarrinhoProduto}
                        />
                    </Route>
                    <Route path="/produto/:prodID" title="Eleve Software">
                        <ProdutoPage 
                            produtos={this.state.produtos}
                            procurar={this.state.procurar}
                            onChangeProcurar={this.onChangeProcurar}
                            carrinho_data={this.state.carrinho_data}
                            onChangeCarrinhoProduto={this.onChangeCarrinhoProduto}
                            all_produtos={this.state.produtos}
                            />
                    </Route>
                    <Route paht="/checkout" title="Checkout">
                        <CheckoutPage 
                            produtos={this.state.produtos}
                            carrinho_data={this.state.carrinho_data}
                            onChangeCarrinhoProduto={this.onChangeCarrinhoProduto}
                            onChangeNome={this.onChangeNome}
                            onChangeSobrenome={this.onChangeSobrenome}
                            onChangeEmail={this.onChangeEmail}
                            onChangeCPF={this.onChangeCPF}
                            onChangeCEP={this.onChangeCEP}
                            onChangeLogradouro={this.onChangeLogradouro}
                            onChangeBairro={this.onChangeBairro}
                            onChangeCidade={this.onChangeCidade}
                            onChangeEstado={this.onChangeEstado}
                            onChangePais={this.onChangePais}
                            comprarCarrinho={this.comprarCarrinho}
                            />
                    </Route>
                </Switch>
            </div>
        );
    }  
}

if (document.getElementById('app')) {
    ReactDOM.render(
        <Router>
            <App />
        </Router>
    , document.getElementById('app'));
}
