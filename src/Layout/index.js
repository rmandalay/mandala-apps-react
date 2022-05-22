import Footer from "../Components/Footer";
import Header from "../Components/Header";

import './style.css';

export default function Layout({children}) {
  return (
    <div className="container">
      
<Header />  
        
        <main>
          <div className="mandala">
            {children}
          </div>
        </main>

        <Footer />
    </div>
  )
}