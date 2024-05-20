import pipoLogoFooter from '../assets/pipo-app-footer-b.svg'
import '../styles/footer.css'


const Footer = () => {
    return (
        <footer className="footer mt-auto bg-body-tertiary footer-expand-lg footer-light">
            <div className="d-flex justify-content-center align-items-center">
                <a className="footer-brand" href="/">
                    <img src={pipoLogoFooter} alt="Logo" className='img-logo m-3' />
                </a>

            </div>
        </footer>
    )
}

export default Footer