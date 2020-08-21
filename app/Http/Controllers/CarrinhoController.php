<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Carrinho;
use App\Produto;
use Illuminate\Support\Facades\DB;

class CarrinhoController extends Controller
{
	private $array = ['error' => true, 'error_msg' => '', 'result'=>[]];

    public function pegarCarrinho($id_user)
    {
    	$carrinho = DB::table('carrinhos')->where('id_user', $id_user)->where('status', 0)->first();
    	if($carrinho)
        {
    		$this->array['result'] = $carrinho;
            $this->array['error'] = false;
    	}else {
    		$car = $this->criarCarrinho($id_user);

    		if($car)
    		{
    			$this->array['result'] = $car;
    			$this->array['error'] = false;
    		}else {
    			$this->array['error_msg'] = 'Não foi possível criar o carrinho!';
    		}
    	}
    	return $this->array;
    }

    public function updateCarrinho(Request $request, $id)
    {
        $id = $request->input('id');
        $carrinho = Carrinho::find($id);
        if($carrinho)
        {
            $id_user = $request->input('id_user');
            $valor = $request->input('valor');
            $nome = $request->input('nome');
            $sobrenome = $request->input('sobrenome');
            $email = $request->input('email');
            $cpf = $request->input('cpf');
            $cep = $request->input('cep');
            $logradouro = $request->input('logradouro');
            $bairro = $request->input('bairro');
            $cidade = $request->input('cidade');
            $estado = $request->input('estado');
            $pais = $request->input('pais');
            $produtos = $request->input('produtos');
            $status = $request->input('status');
            
            $carrinho->id_user = $id_user;
            $carrinho->valor = $valor;
            $carrinho->nome = $nome;
            $carrinho->sobrenome = $sobrenome;
            $carrinho->email = $email;
            $carrinho->cpf = $cpf;
            $carrinho->cep = $cep;
            $carrinho->logradouro = $logradouro;
            $carrinho->bairro = $bairro;
            $carrinho->cidade = $cidade;
            $carrinho->estado = $estado;
            $carrinho->pais = $pais;
            $carrinho->produtos = $produtos;
            $carrinho->status = $status;
            
            $carrinho->save();

            $this->array['error'] = false;
        }else {
            $this->array['error_msg'] = 'Carrinho inexistente!';
        }
        

    	return $this->array;
    }

    public function obterIP()
    {
    	$ip = $this->getClientIp();
    	if($ip)
    	{
    		$this->array['error'] = false;
    		$this->array['result'] = $ip;
    	}
    
    	return $this->array;
    }

    private function getClientIp() 
    {
	    $ipaddress = '';
	    if (isset($_SERVER['HTTP_CLIENT_IP']))
	        $ipaddress = $_SERVER['HTTP_CLIENT_IP'];
	    else if(isset($_SERVER['HTTP_X_FORWARDED_FOR']))
	        $ipaddress = $_SERVER['HTTP_X_FORWARDED_FOR'];
	    else if(isset($_SERVER['HTTP_X_FORWARDED']))
	        $ipaddress = $_SERVER['HTTP_X_FORWARDED'];
	    else if(isset($_SERVER['HTTP_FORWARDED_FOR']))
	        $ipaddress = $_SERVER['HTTP_FORWARDED_FOR'];
	    else if(isset($_SERVER['HTTP_FORWARDED']))
	        $ipaddress = $_SERVER['HTTP_FORWARDED'];
	    else if(isset($_SERVER['REMOTE_ADDR']))
	        $ipaddress = $_SERVER['REMOTE_ADDR'];
	    else
	        $ipaddress = 'UNKNOWN';
	    return $ipaddress;
	}

    private function criarCarrinho($id_user)
    {
    	$carrinho = new Carrinho;

    	$carrinho->id_user = $id_user;
        $carrinho->status = 0;
    	$carrinho->save();

    	return $carrinho;
    }
}
