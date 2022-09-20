import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import HeaderSite from './headerSite'
const navList = [
    "Tim kiem de dang",
    "Tim kiem theo quoc tich nguoi dang lam viec",
    "Tim kiem theo nganh",
    "Tim kiem theo vi tri co quan"
]
function NavMenu(props) {
    const {isOpen} = props;
    
    return (
        <nav className={`nav__menu ${isOpen ? 'active' : ''}`}>
            <div className="nav__menu-list">
                <div className="nav__header">
                    <HeaderSite />
                </div>
                <div className="nav__list">
                    {navList.map((item, index) => (
                        // <NavItem key={index} title={item}/>
                        <div className="nav__item" key={index}>
                            <a href="" className="nav__arrow">{item}</a>
                        </div>
                    ))}
                </div>
                <div className="nav__sub">
                    <div className="nav__sub__item">
                        <a href="">Tìm kiếm chi tiết</a>
                    </div>
                    <div className="nav__sub__item">
                        <a href="">Liên hệ</a>
                    </div>
                </div>
                <div className="nav__bg--top">
                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/gnav_top.png"></img>
                </div>
                <div className="nav__bg--bottom">
                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/gnav_bottom.png"></img>
                </div>
            </div>
        </nav>
    )
}
NavMenu.propTypes = {
    isOpen: PropTypes.bool,
}
export default NavMenu;