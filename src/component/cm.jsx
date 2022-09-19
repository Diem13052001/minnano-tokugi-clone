import React, { useEffect, useState } from 'react';

function Cm () {
    const [isShow, setIsShow] = useState(true)
    const _onClick = () => {
        setIsShow(!isShow)
    }

    return (
        <div className={`cm ${isShow ? 'open' : ''}`}>
          <div className="cm__inner">
            <h2 className="cm__heading">
              Click vào đây để xem quảng cáo
              <div className="cm__close" onClick={_onClick}>X</div>
            </h2>
            <div className="cm__movie">
              <div className="movieContainer">
                <div data-url="https://www.youtube.com/watch?v=X8b9iH1d5xA&t=8s">
                  <img className="thumnail" src="https://minnano-tokugi.com/file/box/minnanotokugi/img/cm_movie.png"></img>
                </div>
              </div>
            </div>
          </div>
        </div>
    )
}

export default Cm;