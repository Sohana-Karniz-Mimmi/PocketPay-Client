import slider1 from '../../assets/images/slide.jpg'
// import slider3 from '../../assets/images/slide.jpg'
// import slider4 from '../../assets/images/slide.jpg'

// Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/bundle";
import { Navigation, Autoplay, EffectFade, Pagination } from 'swiper/modules';




const Banner = () => {
    return (
        <Swiper
            navigation={true}
            pagination={true}
            modules={[Navigation, Autoplay, EffectFade, Pagination]}
            autoplay={{
                delay: 4000,
              }}
            loop={true}
        >


            <SwiperSlide>
                <section className="relative -z-50 bg-cover bg-fixed bg-center bg-no-repeat md:h-[620px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='flex items-center justify-center md:h-[540px] h-[250px]'>
                            <div className="mt-14 text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <i className="md:text-3xl text-sm mt-4max-w-2xl">
                                    It has finally started
                                </i>
                                <h1 className="text-3xl my-5 font-bold md:text-7xl uppercase">
                                    Huge Sale
                                </h1>
                                <p className="md:text-5xl text-sm mt-4 mb-10 max-w-2xl uppercase">
                                    Up to 70% off
                                </p>
                                <div className='space-x-5'>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop men </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop women </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop all </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>
            <SwiperSlide>
                <section className="relative bg-cover bg-fixed bg-center bg-no-repeat md:h-[620px] h-[500px]" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(${slider1})` }}>

                    <div
                        className="absolute inset-0 sm:bg-transparent  sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
                    >
                    </div>

                    <div
                        className="relative lg:h-screen lg:items-center"
                    >
                        <div className='flex items-center justify-center md:h-[540px] h-[250px]'>
                            <div className="mt-14 text-white mx-auto md:max-w-[820px] text-center ltr:sm:text-left rtl:sm:text-right p-10 rounded-lg">
                                <i className="md:text-3xl text-sm mt-4max-w-2xl">
                                    It has finally started
                                </i>
                                <h1 className="text-3xl my-5 font-bold md:text-7xl uppercase">
                                    Huge Sale
                                </h1>
                                <p className="md:text-5xl text-sm mt-4 mb-10 max-w-2xl uppercase">
                                    Up to 70% off
                                </p>
                                <div className='space-x-5'>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop men </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop women </button>
                                    <button className='border border-white py-[9px] bg-transparent hover:bg-transparent px-6 font-semibold uppercase'> shop all </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            </SwiperSlide>


        </Swiper>
    );
};

export default Banner;