import styleFooter from "../styles/footer.module.css";
import logo from '../assets/img/logo-mt-corp.svg';

export default function Footer() {
  return (
    <div className={styleFooter.footerContainer}>
    <a
       rel="noreferrer"
       target="_blank"
       className={styleFooter.footerLinkContainer}
       href="https://mtcorplatam.com/"
       >
         {""}
        <img src={logo} alt="MTCorp logotipo" className={styleFooter.footerLinkImg}/>
    </a>

  </div>
  );
}
