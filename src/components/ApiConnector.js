import React, {Component} from 'react';
import '../App.css';
import ProductPrice from "./ProductPrice";

var standardHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

class ApiConnector extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount () {
        fetch ('https://feik.herokuapp.com/v1/users/list',standardHeaders)
            .then ( result => result.json())
            .then ( json => {
                this.setState ({items: json}) ;
                console.log ('data',json,'\nstate: ',this.state);
            })
            .catch ( err => {console.log(err)} )
    }

    render() {
        return (
            <div className="ApiResult">
                {this.state.items.map((item,index)=>{
                    return <ProductPrice product={item} />
                })}
            </div>
        );
    }
}

export default ApiConnector