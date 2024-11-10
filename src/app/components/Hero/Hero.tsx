import React from 'react'
import Image from 'next/image'

const Hero = () => {
  return (
    <div>
        <div className='flex mx-12	my-12 font-[Libre Bodoni] '>
            <div >
                <h1 className='font-bold 	'>IMPECCABLE</h1>
                <h1 className='font-bold	'>CRAFTSMANSHIP AND</h1>
                <h1 className='font-bold  '>FINESSE</h1>     
                <br />
                <p className='mr-28 '>An example of intricate workmanship and detail, elegant <br />necklaces and long and short chains form a part of our <br />desirable collection.</p><br />
                
                <button className='text-white bg-[#A29875]	pl-2 pr-2 w-[250px] rounded-[10px] p-[10px]'>Explore Now</button>
                 </div>
  
            <div className=' w-[442px] h-[611px] pt-[10 ,10,10]  m-lr-[800] '><img src="https://s3-alpha-sig.figma.com/img/fe76/04e4/1f537eb50b863f64bbaa65861287126e?Expires=1731888000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=LJW8Rgl2FTUoU7R-DRXe2r4wqhMr3BIRIE28XRj9Crbw7dsItxqpSkSbU6EuujWzGc~m~PkvVL3wSqhUkWXlnpga7wucLht6W-QQ~5npMm1FSMbFDJ4decxfs2b~wiljgfnkNDLq2DEYO0SPzjZF97R7Yv246yKDfA7xpiXdX-w50keM0XgzZjl9zPLGuj~dY98qfyxIncPBk5jwEly0h1QeHP0OvXOFjZxOHqxqip-yOt7sRV05JHzZMuqtiLMX572v0LCQucHCAPfPX78jCCyRYDbjkKw1ZqIYHHYYYYtuBFV-BfDD-cAjZcIcmirWqAry0oKDYCFjpEzI-mz5RA__"
                      alt="image"
                      width={180}
                      height={40} />
            </div>

            





            </div>
    </div>
  )
}

export default Hero
