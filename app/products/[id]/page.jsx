import Carousel from '@/components/Carousel';
import Image from 'next/image';
import fs from 'fs';
import path from 'path';

const ProductDetails = async ({ params }) => {
  // Await the params object
  const { id } = await params;

  // Read and parse products.json
  const filePath = path.join(process.cwd(), 'public', 'products.json');
  const jsonData = fs.readFileSync(filePath, 'utf-8');
  const products = JSON.parse(jsonData);

  // Find the specific product by id
  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found.</p>;

  const renderCarousel = (slides, width, interval, altPrefix) => (
    <Carousel autoSlide={true} autoSlideInterval={interval}>
      {slides?.map((src, i) => (
        <Image 
          src={src} 
          key={i} 
          alt={`${altPrefix} ${i}`} 
          width={width} 
          height={0} 
          className="max-w-full" 
          priority  
        />
      ))}
    </Carousel>
  );

  return (
    <div className='flex justify-center items-center max-w-full'>
      <div className="flex min-w-0 max-w-full">
        <div className="block ml-10" style={{ width: '75%' }}>
          <div className="flex">
            <div className='flex min-w-0'>
              {product.imageCount === 3 ? (
                <>
                  <div className="flex w-[900px] mt-8">
                    {renderCarousel(product.largeImageSlides, product.width, 8500, "Large product slide")}
                  </div>
                  <div className="mt-8 ml-2">
                    <div className='mb-2 w-[319px]'>
                      {renderCarousel(product.smallTopSlides, 319, 8250, "Small top slide")}
                    </div>                    
                    <div className='mb-2 w-[319px]'>
                      {renderCarousel(product.smallBottomSlides, 319, 8000, "Small bottom slide")}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="w-[465px] mt-8">
                    {renderCarousel(product.largeImageSlides, 465, 9000, "Large Slide")}
                  </div>
                  <div className="w-[465px] mt-8 ml-2">
                    {renderCarousel(product.largeImageSlides2, 465, 10000, "Large Slide")}
                  </div>
                  <div className="mt-8 ml-2">
                    <div className='mb-2 w-[316px]'>
                      {renderCarousel(product.smallTopSlides, 316, 8250, "Small Top Slide")}
                    </div>
                    <div className='mb-2 w-[316px]'>
                      {renderCarousel(product.smallBottomSlides, 316, 8000, "Small Bottom Slide")}
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
          <div className="mt-5 w-auto">
            {product.schematics && (
              <Image 
                src={product.schematics} 
                alt={product.schematicalt} 
                width={product.schemaWidth} 
                height={300} 
                priority  
              />
            )}
          </div>
        </div>

        {/* Right column with product details (shared) */}
        <div className='w-auto ml-5 mr-10'>
          <div className="mt-8 overflow-scroll h-[1050px] no-scrollbar">
            <p className="font-bold" style={{ fontSize: '14px' }}>{product.productName}</p>
            <br />
            <p style={{ fontSize: '12px' }}>DESCRIPTION</p>
            <br />
            <p style={{ fontSize: '12px' }}>{product.productDesc}</p>
            <br /><br />
            <p style={{ fontSize: '12px' }}>TEXTILE</p>
            <br />
            <p style={{ fontSize: '12px' }}>{product.textile}</p>
            <br /><br />
            <p style={{ fontSize: '12px' }}>TECHNOLOGY</p>
            <br />
            <p style={{ fontSize: '12px' }}>{product.technology?.join(', ')}</p>
            <br /><br />
            <div className='flex' style={{ fontSize: '12px' }}>
              <p>
                SIZE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TYPE:&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <a href='/register' className='flex'>GET NOTIFIED:</a>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; EMAIL HERE
              </p>
            </div>
            <br />
            <p style={{ fontSize: '12px' }}>DOWNLOAD OPTIONS: FOR OPEN SOURCE ADD EMAIL FOR DOWNLOAD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
