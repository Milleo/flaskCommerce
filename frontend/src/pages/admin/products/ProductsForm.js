import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useFormik } from 'formik';
import { useEffect, useState } from "react";
import AddIcon from '@material-ui/icons/Add';
import { Link } from "react-router-dom";

const Products = (props) => {
    const [products, setProducts] = useState([]);
    const formik = useFormik({
        initialValues: {
            name: ""
        },
        onSubmit: (values) => {
            axios.post("/api/admin/products", values).then((resp) => {
                props.history.push("/admin/products", { flashMessage: { message: resp.data.message, status: "success" } });
            }).catch(() => {
                console.error("ERROR");
            })
        }
    });

    return <>
        <h1>Add new product</h1>
        <form onSubmit={formik.handleSubmit}>
            <TextField value={formik.values.name} onChange={formik.handleChange} name="name" />

            <Button type="submit">Submit</Button>
        </form>
    </>

}

export default Products;