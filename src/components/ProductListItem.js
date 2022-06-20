import React, { Component } from 'react';
import { styled } from '@mui/material/styles';
import './ProductPrice.css';
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";
import {ButtonBase} from "@mui/material";
import Grid from "@mui/material/Grid";

const Img = styled('img')({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
});

class ProductListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {product: {}};
    }

    render() {
        return (
            <TableRow key={123}>
                <TableCell><a href={this.props.product.url}>{this.props.product.title}</a></TableCell>
                <TableCell>{this.props.product.description}</TableCell>
                <TableCell>
                    <Grid item>
                        <ButtonBase sx={{ width: 128, height: 128 }}>
                            <Img alt="complex" src={this.props.product.thumbnail} />
                        </ButtonBase>
                    </Grid>
                    </TableCell>
                <TableCell>{this.props.product.price}</TableCell>
            </TableRow>
        );
    }
}

export default ProductListItem;