import { LOGO_URL } from "../utils/constant";

const Header=() =>{
    return(
        <div className="header">
            <div className="logocontainer">
                <img className="logo" src={LOGO_URL}/>
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>cart</li>
                </ul>

            </div>

        </div>
    )
 };

 export default Header;