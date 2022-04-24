import { Button, Paper, Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Typography } from "@material-ui/core";
import axios from "axios";
import { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next';
import FlashMessage from "../../../components/FlashMessage";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const { t } = useTranslation();

    useEffect(() => {
        axios.get("/api/admin/products").then((resp) => {
            setProducts(resp.data.products);
        }).catch(() => {
            console.log("ERROR");
        });
    }, [])

    return <>
        <Typography component="h1" variant="h4">{t('admin.products.title')}</Typography>
        <FlashMessage location={props.location} />
        <Button component={Link} to="/admin/products/create" variant="contained" color="primary" startIcon={<AddIcon />}>{t('admin.products.addButton')}</Button>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>{t('admin.products.fields.id')}</TableCell>
                        <TableCell>{t('admin.products.fields.name')}</TableCell>
                        <TableCell>{t('admin.products.fields.brand')}</TableCell>
                        <TableCell>{t('admin.products.fields.category')}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {products.map((product) => {
                        return <TableRow key={product.id}>
                            <TableCell component="th" scope="row">{product.id}</TableCell>
                            <TableCell>{product.name}</TableCell>
                            <TableCell>Test</TableCell>
                            <TableCell>Test</TableCell>
                        </TableRow>
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    </>

}

export default Products;