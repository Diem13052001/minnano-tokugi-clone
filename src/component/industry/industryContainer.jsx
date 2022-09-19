import IndustryItem from './industryItem'



function IndustryContainer (props) {
    const {arr} = props;
    return (
        arr.map((item, index) => 
            <IndustryItem {...item} key={index}/> 
        )
    )
}

export default IndustryContainer;