import SearchContainer from "./searchContainer";
import SearchItem from "./searchItem";
import '../../css/search.scss'

function Search (props) {
    const {arrCountry, arrIndustry, arrArea} = props;
    return (
        <section className="search">
            <div className="search__content">
                <h2 className="search__heading">Tìm kiếm dễ dàng</h2>

                <div className="search__list">
                    {/* <SearchContainer arrCountry={arrCountry} arrIndustry={arrIndustry} arrArea={arrArea}/> */}

                    <div className="search__inner">
                        <SearchItem label="Quốc tịch của những người đang làm việc" arr={arrCountry}/>
                        <SearchItem label="Địa điểm làm việc" arr={arrArea}/>
                        <SearchItem label="Công nghiệp" arr={arrIndustry}/>
                    </div>
                </div>

                <div className="search__btn">
                    <div className="search__btn-submit">
                        <input type="submit" value="Tìm kiếm" className=""></input>
                    </div>
                    <div className="search__btn-regist">
                        <a href="#" className="">Tìm kiếm chi tiết</a>
                    </div>
                </div>
            </div>
            <div className="pattern-1">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_1.png"></img>
            </div>
            <div className="pattern-2">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_2.png"></img>
            </div>
            <div className="pattern-3">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_3.png"></img>
            </div>
        </section>
    )
}
export default Search;