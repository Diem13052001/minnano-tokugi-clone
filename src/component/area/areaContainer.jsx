import React, { useEffect, useState } from 'react';

import AreaImage from "./areaImage";
import AreaMap from './areaMap'

function AreaContainer (props) {
    const {arr, showModal}= props;

    const [arrArea, setArrArea] = useState(arr)
    
    const _setActive = (id) => {
        const indexActive = arrArea.findIndex(item => item.isActive === true)
        if(indexActive !== -1) {
            arrArea[indexActive].isActive = !arrArea[indexActive].isActive
            setArrArea([...arrArea])
        }

        const index = arrArea.findIndex(item => item.id === id)
        
        arrArea[index].isActive = !arrArea[index].isActive
        setArrArea([...arrArea])

        showModal()    
    }

    return (
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
    )
}
export default AreaContainer;