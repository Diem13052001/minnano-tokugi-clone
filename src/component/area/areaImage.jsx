import PropTypes from 'prop-types';
import { itemAreaTypes } from './area'


function AreaImage (props) {
    
    return (
        <img src={`${props.isActive ? props.imgActive : props.img}`}></img>
    )
}
// AreaImage.propTypes = itemAreaTypes
AreaImage.defaultProps = {
    isActive: false
};
export default AreaImage