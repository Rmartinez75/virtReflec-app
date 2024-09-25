
import NavBar from "@/components/NavBar";
import ProdTree from "@/components/ProdTree";
import Footer from "@/components/Footer";
import ScrollToTopButton from "@/components/ScrollToTopButton";

function HomePage() {
  return (
    <div>
        <NavBar />
        <ProdTree />
        <ScrollToTopButton />
        <Footer />
    </div>
  )
}

export default HomePage