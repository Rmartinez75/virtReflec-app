
import ProdTree from "@/components/ProdTree";
import ProdHomePage from "@/components/ProdHomePage";
import { prodHomecompData } from '@/components/prodHomeCompData'


function HomePage() {
  return (
    <>
      <ProdTree />
      <div>
          {prodHomecompData.map((data, index) => (
            <ProdHomePage key={index}{...data} />
          ))}        
      </div>
    </>
  )
}

export default HomePage
