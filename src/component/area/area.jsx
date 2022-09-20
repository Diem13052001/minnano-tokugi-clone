import '../../css/area.scss'

import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import ModalContainer from '../modal/modalContainer'
import AreaImage from "./areaImage";
import AreaMap from './areaMap'

export const itemAreaTypes = {
    id: PropTypes.number.isRequired,
    className:PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    isActive: PropTypes.bool,
    imgActive: PropTypes.string.isRequired,
    text1: PropTypes.string.isRequired,
    text2: PropTypes.string.isRequired,
    text3: PropTypes.string.isRequired,
    text4: PropTypes.string.isRequired,
}
Area.prototype = {
    arr: PropTypes.arrayOf(PropTypes.shape(itemAreaTypes))
}

function Area (props) {
    const {arr}= props;

    const [isShow, setIsShow] = useState(false)
    const [arrArea, setArrArea] = useState(arr)
    
    const _showModal = () => {
        setIsShow(!isShow);
    }

    const _setActive = (id) => {
        const indexActive = arrArea.findIndex(item => item.isActive === true)
        if(indexActive !== -1) {
            arrArea[indexActive].isActive = !arrArea[indexActive].isActive
            setArrArea([...arrArea])
        }

        const index = arrArea.findIndex(item => item.id === id)
        
        arrArea[index].isActive = !arrArea[index].isActive
        setArrArea([...arrArea])

        _showModal()    
    }

    return (
        <section className="area">
            <div className="area__content">
                <h2 className="area__heading">Tìm kiếm từ vị trí cơ quan</h2>
                <div className="area__inner">
                    {/* <AreaContainer arr={arr} showModal={_showModal}/> */}
                    <div className="area__field">
                        <div className="area__field__inner">
                            <div className="area__img">
                                {arrArea.map((item, index) => (
                                    <AreaImage {...item} key={index} />
                                ))}
                            </div>
                        </div>
                        
                        <div className="area__field__inner">
                            <div className="area__map">
                                {arrArea.map((item, index) => (
                                    <AreaMap {...item} setActive={_setActive} key={index}/>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="pattern-1">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_6.png"></img>
            </div>
            <div className="pattern-2">
                <img src="https://minnano-tokugi.com/file/box/minnanotokugi/img/pattern_7.png"></img>
            </div>
            <ModalContainer arr={arr} isShow={isShow} showModal={_showModal}/>
        </section>
    )
}

// Area.prototype = {
//     arr: PropTypes.arrayOf(PropTypes.shape(itemAreaTypes))
// }
export default Area;
