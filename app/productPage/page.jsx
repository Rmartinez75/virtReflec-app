
import ProdHomePage from "@/components/ProdHomePage";
import { prodHomecompData } from '@/components/prodHomeCompData'


function ProductPage() {
  return (
    <>
     
      <div>
          {prodHomecompData.map((data, index) => (
            <ProdHomePage key={index}{...data} />
          ))}        
      </div>
    </>
  )
}

export default ProductPage
