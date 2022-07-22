import style from "../styles/notFound404.module.css";
import styleFooter from "../styles/notFound404.module.css";
import { MdError } from "react-icons/md";
import Footer from "../components/footer";

export default function NotFound() {
  return (
    <div className={style.notFoundBack} >
      <div className={style.notFoundContainer}>
        <div className={style.notFoundText}>
          <MdError /> 404
        </div>
        <Footer></Footer>
      </div>
    </div>
  );
}
