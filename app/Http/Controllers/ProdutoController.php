<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Produto;

class ProdutoController extends Controller
{
	private $array = ['error' => true, 'error_msg' => '', 'result'=>[]];
	
    public function all()
    {
    	$produtos = Produto::all();

    	foreach($produtos as $prod)
    	{
    		$this->array['result'][] = [
    			'id' => $prod->id,
    			'nome' => $prod->nome,
    			'valor' => $prod->valor,
    			'img' => $prod->img,
    			'descricao' => $prod->descricao
    		];
    	}
        $this->array['error'] = false;

    	return $this->array;
    }
    public function pegarProduto($id)
    {
        $produto = Produto::find($id);
        if($produto)
        {
            $this->array['result'] = $produto;
        }else {
            $this->array['error'] = true;
            $this->array['error_msg'] = 'Produto inexistente existe!';
        }
        return $this->array;
    }
}
