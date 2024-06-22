import HeroImage from '../../../assets/image/hero.png'

const hero = () => {
  return (
    <div className="bg-[#314747] w-screen py-10 2xl:px-56 xl:px-44 lg:px-32 md:px-20 xs:max-md:flex-col-reverse xs:max-md:text-center m-auto flex justify-between items-center">
         <div className='w-5/12 xs:max-md:w-4/5 text-[#FFD700]'>
            <h1 className='mb-2'>UDBAROKAH Solusi Terbaik untuk Mesin Tembakau dan Suku Cadang</h1>
            <p><span>UD.BAROKAH</span> menawarkan <span>mesin tembakau rokok dan suku cadang</span> berkualitas tinggi
               yang dirancang untuk meningkatkan efisiensidan kinerja produksi Anda.
               Temukan solusi terbaik untuk kebutuhan industri tembakau Anda di sini.</p>
         </div>
         <img src={HeroImage} className='md:max-xl:w-1/2 xs:max-md:w-4/5' alt="masin rokok" />
    </div>
  )
}

export default hero