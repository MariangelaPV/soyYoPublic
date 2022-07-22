import { Container, Spinner } from "react-bootstrap";
import style from "../styles/loading.module.css";
export default function Loading(){
    return (
        <Container fluid className={style.containerLoading}> 
        <Spinner animation="grow" className={style.mySpinner} />  
        </Container>   
    );
}