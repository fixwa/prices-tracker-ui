import React, {Component} from 'react';
import '../App.css';
import ProductListItem from "./ProductListItem";
import Link from '@mui/material/Link';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Title from './Title';

var standardHeaders = {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
}

class ProductsList extends Component {

    constructor(props) {
        super(props);
        this.state = {items: []};
    }

    componentDidMount () {
        fetch ('https://prices-tracer-api.herokuapp.com/v1/products',standardHeaders)
            .then ( result => result.json())
            .then ( json => {
                this.setState ({items: json}) ;
                console.log ('data',json,'\nstate: ',this.state);
            })
            .catch ( err => {console.log(err)} )
    }


    preventDefault(event) {
        event.preventDefault();
    }

    render() {
        return (
            <React.Fragment>
                <Title>Todos los productos</Title>
                <Table size="small">
                    <TableHead>
                        <TableRow>
                            <TableCell>Nombre</TableCell>
                            <TableCell>Descripción</TableCell>
                            <TableCell>Foto</TableCell>
                            <TableCell align="right">Precio</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {this.state.items.map((item,index)=>{
                            return <ProductListItem product={item} />
                        })}
                    </TableBody>
                </Table>
                <Link color="primary" href="#" onClick={this.preventDefault} sx={{ mt: 3 }}>
                    See more orders
                </Link>
            </React.Fragment>
        );
    }
}

export default ProductsList