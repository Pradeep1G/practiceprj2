
import star from "../assets/star.png"

export default function CardUI(props){
    return(
    <>

        <div className="card">



            <div className="itemImg">
                <img src={props.info.image}></img>
            </div>

            <div className="ratings">
                
                <p><img src={star}></img>
                {props.info.ratings}
                ({" "}{props.info.raters}{" "}){" "}.{props.info.place}</p>
            </div>

            <div className="description">
                <p>{props.info.name}</p>
            </div>

            <div className="cost">
                <b>From {props.info.cost}</b> / person
            </div>





        {/* {console.warn(props.info.image)} */}

        {/* <img src={props.info.image} />

        <p>{props.info.cost}</p>
        <p>{props.info.name}</p>
        <p>{props.info.ratings}</p>
        <p>{props.info.raters}</p>
        <p>{props.info.place}</p>
        <p>{props.info.availability}</p> */}



        </div>
    </>
    )
}