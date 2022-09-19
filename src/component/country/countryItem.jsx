

function CountryItem (props) {


    return (
        <div className="country__item">
            <a href="#">
                <div className="country__item__icon">
                    <img src={props.img}></img>
                </div>
                <div className="country__item__name">{props.name}</div>
            </a>
        </div>
    )
}
export default CountryItem;