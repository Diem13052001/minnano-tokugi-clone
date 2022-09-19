import Search from '../component/search/search'
import Country from '../component/country/country'
import Interview from '../component/interview'
import Industry from '../component/industry/industry';
import Area from '../component/area/area'
import JobSlide from '../component/jobSlide/jobSlide';
import EntryFooter from '../component/entryFooter'
import Cm from '../component/cm'
import '../css/home.scss'

function Home (props) {
    const {arrCountry, arrIndustry, arrArea, arrJob} = props;

    return (
        <div id="home">
            <section className="hero">
                <div className="hero__img">
                <img width="100%" src="https://minnano-tokugi.com/file/box/minnanotokugi/img/hero_sp.png"></img>

                <h2 className="hero__caption">Tokugi (kỹ năng - trường phái) của bạn sẽ được phát huy.</h2>
                </div>
                
                <Cm />

            </section>

            <div className="container">
                <Search arrCountry={arrCountry} arrIndustry={arrIndustry} arrArea={arrArea}/>
                <Country arr={arrCountry}/>
                <Interview />
                <Industry arr={arrIndustry}/>
                <Area arr={arrArea}/>
                <JobSlide arr={arrJob}/>
                <EntryFooter />
            </div>
        </div>
    )
}
export default Home;