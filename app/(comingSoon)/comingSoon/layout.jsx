import HeadNav from '@components/NavBar'
// import ProductPageFooter from "/components/ProductPageFooter";
// import Footer from '@/components/Footer';
import Footer from '@components/Footer'

import '@styles/globals.css'


const Layout = ({ children }) => {
  return (       
    <>
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
      {/* <ProductPageFooter /> */}
    </>
    )
}

export default Layout
