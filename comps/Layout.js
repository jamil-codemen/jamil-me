import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
const Layout =({children})=>{
    return(
        <div>
            <Navbar />

            { children }

            <Footer />
            
            </div>
    )
}
export default Layout;