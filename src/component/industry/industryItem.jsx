
import PropTypes from 'prop-types';
import { itemIndustryTypes } from './industry'
function IndustryItem (props) {

    return (
        <div className="industry__item">
            <a href="#">
                <div className="industry__item__icon">
                    <img src={props.img}></img>
                </div>
                <div className="industry__item__name">{props.name}</div>
            </a>
        </div>
    )
}
// IndustryItem.propTypes = itemIndustryTypes
export default IndustryItem;