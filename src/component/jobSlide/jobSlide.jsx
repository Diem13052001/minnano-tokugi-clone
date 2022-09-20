import PropTypes from 'prop-types';
import JobSlideItem from './jobSlideItem'
import '../../css/jobSlide.scss'

import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation} from "swiper";
SwiperCore.use([Navigation]);




function JobSlide (props) {
    const { arr } = props;
    return (
        <section className="jobSlide">
            <h2 className="jobSlide__heading">Công việc mới</h2>
            <div className="jobSlide__list">
                {/* <JobSlideContainer /> */}
                <div className="jobSlide__inner">
                    <div className='swiper-button-prev'></div>
                    <div className='swiper-button-next'></div>
                    <Swiper
                        navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev'}}
                        slidesPerView= {"auto"}
                        loop={"true"}
                    >
                        {arr.map((item, index) => (
                            <SwiperSlide 
                            className="jobSlide__slider"
                            key={index}
                            >
                                <JobSlideItem 
                                {...item}
                                />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </section>
    )
}
export const itemJobTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    salary: PropTypes.string.isRequired,
}
JobSlide.prototype = {
    arr: PropTypes.arrayOf(PropTypes.shape(itemJobTypes))
}
export default JobSlide