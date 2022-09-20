import PropTypes from 'prop-types';
import { itemAreaTypes } from '../area/area'

import AreaSelect from './areaSelect'
import '../../css/modal.scss'


function ModalContainer (props) {
    const {arr, isShow, showModal} = props;

    const _onClick = () => {
        showModal()
    }

    return (
        <div className={`modal-container ${isShow ? 'active' : ''}`}>
            <div className="modal-body">
                <div 
                onClick={_onClick}
                className="modal-close">
                    x
                </div>
                <div className="modal-content">
                    {arr.map((item, index) => (
                        <AreaSelect {...item} key={index}/>
                    ))}
                    
                </div>
            </div>
        </div>
    )
}
// ModalContainer.propTypes = {
//     arr: PropTypes.array.isRequired, 
//     isShow: PropTypes.bool, 
//     showModal: PropTypes.bool
// }
ModalContainer.defaultProps = {
    isShow: false,
    showModal: false
}
export default ModalContainer;