import IndustryContainer from './industryContainer'
import IndustryItem from './industryItem'
import '../../css/industry.scss'

function Industry (props) {
    const { arr } = props;
    return (
        <section className="industry">
            <h2 className="industry__heading">Tìm kiếm theo ngành</h2>
            <div className="industry__inner">
                {/* <IndustryContainer arr={arr}/> */}

                {arr.map((item, index) => 
                    <IndustryItem {...item} key={index}/> 
                )}
            </div>
        </section>
    )
}

export default Industry;