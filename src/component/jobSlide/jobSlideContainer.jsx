import { Swiper, SwiperSlide } from 'swiper/react';
import JobSlideItem from './jobSlideItem'
import SwiperCore, {Navigation} from "swiper";
SwiperCore.use([Navigation]);


const arr = [
    {
        id: 1,
        img: "https://minnano-tokugi.com/file/item_val_char/ih2q79vjw26x/a3415abe2021d4c1d8e224c65eaf9b7f.png",
        name: "Sản xuất bánh gạo",
        address: "Yamagata",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 2,
        img: "https://minnano-tokugi.com/file/item_val_char/ih4zc2n3az2r/6c96e3b19b72dd8f759e77c83e3c7d8d.jpg",
        name: "Kiểm tra và vận hành sản phẩm",
        address: "Hyogo",
        salary: "Lương hàng giờ 1,000 yên",
    },
    {
        id: 3,
        img: "https://minnano-tokugi.com/file/item_val_char/ih0kw0hnfyk6/ebc6e86a35f6af16ebe71ceeeedc4f25.jpg",
        name: "Làm tấm mặt trời",
        address: "Hyogo",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 4,
        img: "https://minnano-tokugi.com/file/item_val_char/ih2my2a5w6ij/f06920bfd714a886b2fb9572815c6dfc.jpg",
        name: "Thiết kế CAD 3D",
        address: "Aichi",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 5,
        img: "https://minnano-tokugi.com/file/item_val_char/ih5j165jodv7/434145e5ed7e482c89599471fa8730fe.jpg",
        name: "Kiểm tra các bộ phận máy ảnh",
        address: "Nagano",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 6,
        img: "https://minnano-tokugi.com/file/item_val_char/ih5gi8s3x0ay/5c989a7db76fa325d64a11c9fd8d8f0c.jpg",
        name: "Cách làm bánh kẹo Nhật",
        address: "Aichi",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 7,
        img: "https://minnano-tokugi.com/file/item_val_char/ih46okc5rnvd/3f218ad7b84fc135ad3265f8dc0662ae.jpg",
        name: "Lắp ráp máy may công nghiệp",
        address: "Niigata",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 8,
        img: "https://minnano-tokugi.com/file/item_val_char/ih5ggi86if4m/d13fd04a9776549030cea310bde73ef0.jpg",
        name: "Chế biến kim loại",
        address: "Tochigi",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 9,
        img: "https://minnano-tokugi.com/file/item_val_char/ih0kw0hvm0ns/1c7ce5ad242f5efb3989cf760fc3e095.jpg",
        name: "Bệnh trứng",
        address: "Nagano",
        salary: "Lương hàng giờ 1,100 yên",
    },
    {
        id: 10,
        img: "https://minnano-tokugi.com/file/item_val_char/ih0kw0kdp4p0/59f1be81e65277ac32a15534e31c08d7.jpg",
        name: "Lắp ráp và kiểm tra máy điện tử",
        address: "Fukushima",
        salary: "Lương hàng giờ 1,100 yên",
    }
]


function JobSlideContainer () {
    return (
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
    )
}
export default JobSlideContainer;