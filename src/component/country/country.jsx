import PropTypes from 'prop-types';

import CountryItem from './countryItem'
import '../../css/country.scss'

export const itemCountryTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
}
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

Country.prototype = {
    arr: PropTypes.arrayOf(PropTypes.shape(itemCountryTypes))
}
export default Country