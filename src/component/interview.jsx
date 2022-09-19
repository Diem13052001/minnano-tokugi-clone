import '../css/interview.scss'


function Interview () {
    return (
        <section className="interview">
            <div className="interview__content">
                <div className="interview__inner">
                    <div className="interview__icon">
                        <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/visikomi_heading.png" />
                    </div>
                    <div className="interview__block">
                        <h3 className="interview__heading">Nơi làm việc Phỏng vấn Đăng công việc Đặc biệt</h3>
                        <p className="interview__text">Cùng xem qua bài phỏng vấn các tiền bối nhé!</p>
                    </div>
                </div>
                <div className="interview__btn">
                    <a href="#" className="">Tìm kiếm chi tiết</a>
                </div>
                <div className="interview__visicomi">
                    <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/logo_visicomi.png" />
                </div>
            </div>
            <div className="pattern-1">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_4.png"></img>
            </div>
            {/* <div className="pattern-2">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_5.png"></img>
            </div> */}
        </section>
    )
}
export default Interview