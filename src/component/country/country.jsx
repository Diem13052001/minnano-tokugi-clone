import CountryContainer from "./countryContainer"
import CountryItem from './countryItem'
import '../../css/country.scss'

function Country (props) {
    const {arr} = props;
    return (
        <section className="country">
            <h2 className="country__heading">Tìm kiếm theo quốc tịch của người đang làm việc</h2>
            <div className="country__inner">
                {/* <CountryContainer arr={arr}/> */}

                {arr.map((item, index) => 
                    <CountryItem {...item} key={index}/> 
                )}
            </div>
        </section>
    )
}
export default Country