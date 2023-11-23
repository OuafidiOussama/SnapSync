import AuthForm from "../components/AuthForm"
import Navbar from "../components/partials/Navbar"


function Register() {
    return(
    <div className="relative px-20 py-10">
        <Navbar />
        <AuthForm />
    </div>
    ) 
}

export default Register