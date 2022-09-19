import CountryItem from './countryItem'



function CountryContainer (props) {
    const { arr } = props

    return (
        arr.map((item, index) => 
            <CountryItem {...item} key={index}/> 
        )
    )
}

export default CountryContainer;