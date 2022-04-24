import { Switch, Route } from "react-router-dom";
import NotFound from "./pages/NotFound";
import AdminTemplate from "./layout/AdminTemplate";
import Products from "./pages/admin/products/Products";
import ProductsForm from "./pages/admin/products/ProductsForm";

function Admin(){
    return <AdminTemplate>
        <Switch>
            <Route exact path="/admin/products" component={Products} />
            <Route exact path="/admin/products/create" component={ProductsForm} />
            <Route component={NotFound} />
        </Switch>
    </AdminTemplate>
}

export default Admin;