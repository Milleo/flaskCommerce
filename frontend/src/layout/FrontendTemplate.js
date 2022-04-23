import Container from '@material-ui/core/Container';
import Header from "./Header";
import Footer from "./Footer";

function FrontendTemplate(props){
    return <Container>
        <Header/>
            { props.children }
        <Footer />
    </Container>
}

export default FrontendTemplate;
