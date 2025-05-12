import Card1 from "./Card1";
import Card2 from "./Card2";
import './Cardwrapper.css';

function Cardwrapper(){
    return(
        <div className="card-wrapper">
            <Card1/>
            <Card2/>

        </div>
    )
}
export default Cardwrapper;