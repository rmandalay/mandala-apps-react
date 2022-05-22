// import other files
import ButtonText from "../Button";
import Navbar from "../Navbar";
import Logo from "./logo";

// import css
import './style.css';

export default function Header() {
  const eventLogin = () => alert('halo login');
  const eventRegister = () => alert('halo register');
  return (
    <header>
      <div className="mandala">
        <Logo />
        <div className="menu mandala">
          <Navbar />
          <ButtonText text="login" clickMe={eventLogin} color='login'/>
          <ButtonText text="Register" clickMe={eventRegister} color="register"/>
        </div>
      </div>
    </header>
  )
}
  