import Links from "./Links/Links";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";
import logo from '../../assets/images/logo.png';

const Header = (props) => {
	return(
		<header className={style.header}>
			<div className={style.container}>
				<img className={style.img} src={logo} alt='logo'/>
				<div className={style.inputWrapper}> 
					<input className={style.input} type='text' placeholder='Search...' />
					<button className={style.button}></button>
				</div>
				<Links />
				<div className={style.wrapper}>
					<img className={style.avatar} src='' alt=''/>
					{ props.isAuth 
						? <div>
								<div className={style.name}>{props.login}&#9662;</div>
								<div className={style.popup}>
									<button className={style.btnPopup} onClick>Setting</button>
									<button className={style.btnPopup} onClick>Account Setting</button>
									<button className={style.btnPopup} onClick>Privacy</button>
									<button className={style.btnPopup} onClick>Faqs</button>
									<button className={style.btnPopup} onClick>Terms & Conditions</button>
									<button className={style.btnPopup} onClick={() => props.logoutTC()}>Logout</button>
								</div>
							</div>
						: <NavLink to='/login' className={style.name}>Log in</NavLink> }
				</div>
			</div>
		</header>
	)
}

export default Header;