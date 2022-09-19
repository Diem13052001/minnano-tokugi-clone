import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import '../css/base.scss';



import Header from './header/header'
import Footer from './footer'
import Home from '../page/home'
import Login from '../page/login'

const arrCountry = [
  {
      id: 1,
      name: "Việt Nam",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_vn.png",
  },
  {
      id: 2,
      name: "Indonesia",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_idn.png",
      
  },
  {
      id: 3,
      name: "Philippin",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_ph.png",
      
  },
  {
      id: 4,
      name: "Trung Quốc",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_cn.png",
      
  },
  {
      id: 5,
      name: "Thái Lan",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_tha.png",
      
  },
  {
      id: 6,
      name: "Mianma",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_mmr.png",
      
  },
  {
      id: 7,
      name: "Campuchia",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_khm.png",
  
  },
  {
      id: 8,
      name: "Khác",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/country_other.png",
      
  }
]
const arrIndustry = [
  {
      id: 1,
      name: "Ngành chăm sóc điều dưỡng",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_1.png"
  },
  {
      id: 2,
      name: "Kinh doanh vệ sinh tòa nhà",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_2.png"
  },
  {
      id: 3,
      name: "Công nghiệp chế biến vật liệu",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_3.png"
  },
  {
      id: 4,
      name: "Công nghiệp sản xuất máy móc công nghiệp",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_4.png"
  },
  {
      id: 5,
      name: "Thông tin điện / điện tử liên quan",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_5.png"
  },
  {
      id: 6,
      name: "Ngành xây dựng",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_6.png"
  },
  {
      id: 7,
      name: "Đóng tàu / công nghiệp hàng hải",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_7.png"
  },
  {
      id: 8,
      name: "Ngành bảo dưỡng ô tô",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_8.png"
  },
  {
      id: 9,
      name: "Nghiệp vụ hàng không",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_9.png"
  },
  {
      id: 10,
      name: "Khách sạn",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_10.png"
  },
  {
      id: 11,
      name: "Nông nghiệp",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_11.png"
  },
  {
      id: 12,
      name: "Ngư nghiệp",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_12.png"
  }, 
  {
      id: 12,
      name: "Công nghiệp sanr xuất thực phẩm và đồ uống",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_13.png"
  },
  {
      id: 12,
      name: "Nhà hàng, ăn uống",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/industry_icon_14.png"
  }
]


const arrArea = [
  {
      id: 1,
      className: "hokkaido",
      name: "Sapporo - Hokkaido",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_hokkaido.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_hokkaido_on.png",
      text1: "Thiên nhiên hùng vĩ trên quy mô lớn",
      text2: "Các thành phố du lịch nổi tiếng như Sapporo / Hakodate / Otaru",
      text3: "Rất nhiều hải sản ngon",
      text4: "Mùa hè mát mẻ dễ tiêu"
  },
  {
      id: 2,
      className: "kansai",
      name: "Osaka - Kansai",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kansai.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kansai_on.png",
      text1: "Osaka là một thành phố lớn và cuộc sống thuận tiện",
      text2: "Kyoto và Nara là những địa điểm du lịch nổi tiếng như chùa chiền",
      text3: "Hãy yên tâm rằng nhiều người nước ngoài sống ở đây",
      text4: "Khí hậu ấm áp nên rất dễ sống"
  },
  {
      id: 3,
      className: "kanto",
      name: "Tokyo - Kanto",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kanto.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kanto_on.png",
      text1: "Cuộc sống thuận tiện vì gần thành phố lớn",
      text2: "Tôi không bao giờ cảm thấy mệt mỏi với nhiều điểm du lịch",
      text3: "Khí hậu ấm áp nên rất dễ sống",
      text4: "Hãy yên tâm rằng nhiều người nước ngoài sống ở đây"
  },
  {
      id: 4,
      className: "hokuriku",
      name: "Kanazawa - Hokuriku",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_hokuriku.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_hokuriku_on.png",
      text1: "Ngắm biển và núi",
      text2: "Bạn có thể đến Tokyo hoặc Osaka bằng tàu hỏa ngay lập tức",
      text3: "Mùa hè mát mẻ dễ tiê",
      text4: "Có nhiều điểm du lịch như lâu đài"
  },
  {
      id: 5,
      className: "kyusyu",
      name: "Fukuika - Kyusyu",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kyusyu.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_kyusyu_on.png",
      text1: "Dễ sống với khí hậu ấm áp",
      text2: "Đồ ăn ngon và giá rẻ",
      text3: "Fukuoka là một thành phố lớn và cuộc sống thuận tiện",
      text4: "Ngắm biển và núi"
  },
  {
      id: 6,
      className: "touhoku",
      name: "Sendai - Touhoku",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_touhoku.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_touhoku_on.png",
      text1: "Thiên nhiên tươi đẹp, nơi bạn có thể cảm nhận được sự thay đổi của bốn mùa",
      text2: "Nhiều sự kiện như lễ hội lớn",
      text3: "Các món thịt và hải sản rất ngon",
      text4: "Nhiều người có tính cách ấm áp"
  },
  {
      id: 7,
      className: "toukai",
      name: "Aichi - Toukai",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_toukai.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_toukai_on.png",
      text1: "Nagoya là một thành phố lớn và cuộc sống thuận tiện",
      text2: "Bạn cũng có thể đến Tokyo và Osaka bằng Shinkansen",
      text3: "Hãy yên tâm rằng nhiều người nước ngoài sống ở đây",
      text4: "Khí hậu ấm áp nên rất dễ sống"
  },
  {
      id: 8,
      className: "tyugoku",
      name: "Hiroshima - Chugoku/Shikoku",
      img: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_tyugoku.png",
      isActive: false,
      imgActive: "https://minnano-tokugi.com/file/box/minnanotokugi/img/map_tyugoku_on.png",
      text1: "Khí hậu ấm áp và hầu như không có tuyết",
      text2: "Dễ sống với ít mưa",
      text3: "Có nhiều thiên nhiên phong phú và nhiều danh lam thắng cảnh",
      text4: "Có nhiều thành phố lớn như Hiroshima và Okayama"
  },
]

const arrJob = [
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

function App() {

  return (
    <Router>
        <div className="App">
            <Header arrLaguages={arrCountry}/>
            <Routes>
                <Route path="/" element={< Home arrCountry={arrCountry} arrIndustry={arrIndustry} arrArea={arrArea} arrJob={arrJob}/>} />
                <Route path="/login" element={< Login />} />
            </Routes>

            <Footer />
        </div>
    </Router>
    
  );
}

export default App;

