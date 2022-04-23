import Products from "./pages/admin/Products";
import NotFound from "./pages/NotFound";
import { Switch, Route } from "react-router-dom";

function Admin(){
    return <Switch>
        <Route path="/products" component={Products} />
        <Route component={NotFound} />
    </Switch>
}

export default Admin;