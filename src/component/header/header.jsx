import { NavLink } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { itemCountryTypes } from '../country/country'

import NavMenu from './navMenu'
import HeaderSite from './headerSite'
import '../../css/header.scss'


function Header (props) {
    const {arrLaguages} = props;
    const [openMenu, setOpenMenu] = useState(false)
    const [showAdviser, setShowAdviser] = useState(false)


    const _onClickMenu = () => {
        setOpenMenu(!openMenu);
    }
    const _onClickAdviser = () => {
        setShowAdviser(!showAdviser);
    }

    return (
        <header>
            <div className="header__inner">
                <HeaderSite />
                <div className="header__block">
                    <div className="header__btn">
                        <NavLink className="header__btn__item--login" to="/login">
                            <a href="#">
                            <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/btn_icon_login.png"></img>
                            Đăng nhập
                            </a>
                        </NavLink>
                        <div className="header__btn__item--regist">
                            <a href="#">
                            <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/btn_icon_regist.png"></img>
                            Đăng ký thành viên
                            </a>
                        </div>
                    </div>
                </div>

                <div className="header__language__sp">
                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/header_language_icon.png"></img>
                    <select>
                        <option>Chon ngon ngu</option>
                        {arrLaguages.map((item, index) => (
                            <option key={index}>{item.name}</option>
                        ))}
                    </select>
                </div>
                <div className={`header__menu ${openMenu ? 'open' : ''}`} onClick={_onClickMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <NavMenu isOpen={openMenu}/>
            </div>


            <div className="adviser-slide">
                <div className={`adviser-slide__btn ${showAdviser ? 'active' : ''}`}>
                    <a href="#">Tham khảo ý kiến một cố vấn</a>
                </div>
                <div className="adviser-slide__arrow" onClick={_onClickAdviser}></div>
            </div>
        </header>
    )
}
// Header.propTypes = itemCountryTypes
export default Header;