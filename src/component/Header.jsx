import logoTitle from '../images/vyorius_logo.png';
import logo from '../images/logo.png';
import '../index.css'

const Header = () =>{
    return(
        <div id = 'Head' className = 'HeaderCls'>
            <div  className ='logo'>
            <img src = {logo} id = 'log' alt ='Vyorius Logo' />
            <img src = {logoTitle}  id = 'log_name' alt ='Vyorius Logo' />
            </div>
            <ul className = 'Menu_item'>
                <li><a href="">WhyVyourius?</a></li>
                <li><a href="">Solutions</a></li>
                <li><a href="">Product</a></li>
                <li><a href="">Use Cases</a></li>
                <li><a href="">Team</a></li>
                <li><a href="">Partners</a></li>
                <li><a href="">Contact Us</a></li>
            </ul>
            <button className = 'head_launchBtn'>Lunch Vyourius &gt;</button>
        </div>
    );

}

export default Header;