


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
export default IndustryItem;