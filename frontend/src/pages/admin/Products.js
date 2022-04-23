import { Button, TextField } from "@material-ui/core";
import axios from "axios";
import { useFormik } from 'formik';

const Products = () => {
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
    })

    return <form noValidate autoComplete="off" onSubmit={formik.handleSubmit}>
        <TextField name="name" label="Outlined" variant="outlined" onChange={formik.handleChange} value={formik.values.name} />
        <Button type="submit" variant="contained" color="primary">Create</Button>
    </form>

}

export default Products;