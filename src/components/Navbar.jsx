
import "../App.css"
import logo from "../assets/airbnb-logo.png"

export default function Navbar(){
    return(
        <>

            <div className="nav">
                <div className="nav-img">
                    <img src={logo} width={200}/>
                </div>
            </div>

        </>
    )
}