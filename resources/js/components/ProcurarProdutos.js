import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class ProcurarProdutos extends Component {
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (
            <div className="input-group">
                <input 
                    type="text" 
                    value={this.props.procurar} 
                    onChange={(e)=>this.props.onChangeProcurar(e.target.value)} />
                <div className="input-group-append">
                    <span id="basic-addon2">
                        <AiOutlineSearch className="ti-search"/>
                    </span>
                </div>
            </div>
        );
    }
    
}
