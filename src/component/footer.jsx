import '../css/footer.scss'

function Footer () {
    return (
        <footer>
            <div className="footer__outer">
                <div className="footer__top">
                    <div className="footer__site">
                        <div className="footer__logo">
                            <a href="#">
                                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/header_logo.svg"></img>
                            </a>
                        </div>
                        <div className="footer__tittle">Trang web được ưa chuộng nhiều nhất về "Tôi muốn làm việc ở Nhật Bản"</div>
                    </div>
                    <div className="footer__block">
                        <div className="footer__nav">Tìm kiếm chi tiết</div>
                        <div className="footer__social-media">
                            <div className="footer__social-media__item">
                                <a href="">
                                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_facebook.png"></img>
                                </a>
                            </div>
                            <div className="footer__social-media__item">
                                <a href="">
                                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_facebook-messenger.png"></img>
                                </a>
                            </div>
                            <div className="footer__social-media__item">
                                <a href="">
                                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/sns_youtube.png"></img>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="footer__address">
                        2-4-1 Hamamatsucho, Minato-ku, Tokyo
                        <br />
                        World Trade Center Building South Tower 16F
                    </div>
                    <div className="footer__navbar">
                        <div className="footer__navbar__item">
                            <a href="#">Thông tin công ty điều hành</a>
                        </div>
                        <div className="footer__navbar__item">
                            <a href="#">Chính sách bảo mật</a>
                        </div>
                        <div className="footer__navbar__item">
                            <a href="#">Điều khoản dịch vụ</a>
                        </div>
                    </div>
                </div>
                <div className="footer__copy-right">CAMTECH INC. All Rights Reserved.</div>
            </div>
      </footer>
    )
}
export default Footer