import PropTypes from 'prop-types';
import { itemJobTypes } from './jobSlide'
function JobSlideItem (props) {
    return (
        <div className="jobSlide__item">
            <a href="#">
                <div className="jobSlide__item__img">
                    <img src={props.img}></img>
                </div>
                <div className="jobSlide__block">
                    <h3 className="jobSlide__item__name">{props.name}</h3>
                    <div className="jobSlide__item__data">
                        <div className="jobSlide__item__address">{props.address}</div>
                        <div className="jobSlide__item__salary">{props.salary}</div>
                    </div>
                </div>
            </a>
        </div>
    )
}
// JobSlideItem.propTypes = itemJobTypes
export default JobSlideItem;