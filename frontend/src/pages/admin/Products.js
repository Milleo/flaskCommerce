import { Button, Paper, Table, TableContainer, TableHead, TableRow, TableBody, TableCell, Typography } from "@material-ui/core";
import axios from "axios";
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";
import FlashMessage from "../../components/FlashMessage";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const formik = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (values) => {
            axios.post("/api/admin/products", values).then(() => {
                console.log("OK");
            }).catch(() => {
                console.error("ERROR");
            })
        }
    });

    useEffect(() => {
        axios.get("/api/admin/products").then((resp) => {
            setProducts(resp.data.products);
        }).catch(() => {
            console.log("ERROR");
        });
    }, [])

    return <>
        <Typography component="h1" variant="h4">Products</Typography>
        <FlashMessage location={props.location} />
        <Button component={Link} to="/admin/products/create" variant="contained" color="primary" startIcon={<AddIcon />}>Add product</Button>
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Brand</TableCell>
                        <TableCell>Category</TableCell>
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