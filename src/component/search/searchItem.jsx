import React, { useEffect, useState } from 'react';


function SearchItem (props) {
    const {label, arr} = props;

    const [isShow, setIsShow] = useState(false)
    const _onClick = () => {
        setIsShow(!isShow)
    }

    return (
        <div className="search__item">
            <dl>
                <dt className="search__label">
                    {label}
                    <div className="icon-wrap" onClick={_onClick}>
                        <span className={`icon ${isShow ? 'open' : ''}`}></span>
                    </div>
                </dt>
                <dd className={`${isShow ? 'show' : ''}`}>
                    <div className="search__inside">
                        {arr.map((item, index) => (
                            <label key={index}>
                                <input type="checkbox"></input>
                                {item.name}
                            </label>
                        ))}
                    </div>
                </dd>
            </dl>
        </div>
    )

}
export default SearchItem;