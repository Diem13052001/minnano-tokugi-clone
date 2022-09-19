import '../css/login.scss'
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import googleLogo from '../assets/google.png';
import githubLogo from '../assets/github-sign.png';
import facebookLogo from '../assets/facebook.png';
import userApi from '../js/userApi';


function Login () {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [showError, setShowError] = useState(false)

    const navigate = useNavigate();
    
    const handleSubmit = async e => {
        e.preventDefault();
        try {
            const response = await userApi.checkUser();
            console.log('Sucess')
            const userLogin = {
                email,
                password
            };
            console.log(userLogin)
            navigate('/');
        } catch (error) {
            setShowError(true)
            console.log('Error', error);
        }
    }
    
    return (
        <div id="login">
            <div className="container">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/page_head.png"></img>
                <h2 className="login__title">Đăng nhập</h2>

                <section className="login__inner">
                    <form name="form">
                        <div className="login__form">
                            <div className="login__bg--top">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_bg_top_list.png"></img>
                            </div>
                            <div className="login__bg--bottom">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_bg_bottom_list.png"></img>
                            </div>

                            <div className="login__item">
                                <input type="text" name="email" placeholder="Enter your email" 
                                onChange={(e) => setEmail(e.target.value)}
                                ></input>
                                <input type="password" name="pass" placeholder="Enter your password" 
                                onChange={(e) => setPassword(e.target.value)}
                                ></input>
                                <p>Quên mật khẩu?</p>
                            </div>

                            {/* <div className="login__terms">
                                <p className="login__terms__text">Vui lòng kiểm tra các điều khoản và điều kiện và kiểm tra "Tôi chấp nhận các điều khoản sử dụng".</p>
                                <ul className="login__terms__link">
                                    <li className="login__terms__link__item">
                                        <a href="#">Minnano Tokugi Minnano Tokugi Điều khoản dịch vụ của người dùng</a>
                                    </li>
                                    <li className="login__terms__link__item">
                                        <a href="#">Chính sách bảo mật</a>
                                    </li>
                                </ul>
                                <div className="login__terms__check">
                                    <label>
                                        <input type="checkbox"></input>
                                        Tôi đồng ý với Điều khoản & Điều kiện
                                    </label>
                                </div>
                            </div> */}
                            <div className={`${showError ? 'showMessageError' : 'hideMessageError'}`}>
                                <div className="alert alert__danger">
                                    Email or password is incorrect!
                                </div>
                            </div>

                            <div className="login__btn">
                                <input type="submit" value="Đăng nhập" 
                                onClick={handleSubmit}
                                >
                                </input>
                            </div>
                            
                            {/* <div className="login__text">
                                <a href="#">Nhấp vào đây nếu bạn quên ID / mật khẩu của mình</a>
                            </div> */}

                            <div className="login__with">
                                <div className="login__with__title">Hoặc đăng nhập với</div>
                                <div className="login__with__btn">
                                    <div className="login__with__item">
                                        <a href="#">
                                            <img src={facebookLogo}></img>
                                        </a>
                                    </div>
                                    <div className="login__with__item">
                                        <a href="#">
                                            <img src={googleLogo} alt=""></img>
                                        </a>
                                    </div>
                                    <div className="login__with__item">
                                        <a href="#">
                                            <img src={githubLogo}></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="not-a-account">
                                Chưa có tài khoản?
                                <a href="#">Đăng ký</a>
                            </div>
                        </div>
                    </form>
                </section>
            </div>

        </div>
    )
}
export default Login;