import SearchItem from "./searchItem";


function SearchContainer (props) {
    const {arrCountry, arrIndustry, arrArea} = props;

    return (
        <div className="search__inner">
            <SearchItem label="Quốc tịch của những người đang làm việc" arr={arrCountry}/>
            <SearchItem label="Địa điểm làm việc" arr={arrArea}/>
            <SearchItem label="Công nghiệp" arr={arrIndustry}/>
        </div>
    )
}
export default SearchContainer