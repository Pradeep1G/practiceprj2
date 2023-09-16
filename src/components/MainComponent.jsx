
import gridpic from "../assets/photo-grid.png"
import shirt from "../assets/Katie-zaferes.png"
import wedding from "../assets/wedding-photography.png"
import bike from "../assets/mountain-bike.png"

import CardUI from "./CardUI"

export default function MainComponent(){


    const data = [
        {
            image:shirt,
            name:"Life Lessons with Katie Zaferes",
            cost:"$136",
            ratings:"5",
            raters:"6",
            place:"Online",
            avaialability:"SOLD OUT"
        },
        {
            image:wedding,
            name:"Learn Wedding Photography",
            cost:"$125",
            ratings:"5",
            raters:"30",
            place:"Online",
            avaialability:"ONLINE"
        },
        {
            image:bike,
            name:"Group Mountain Bikes",
            cost:"$50",
            ratings:"4.8",
            raters:"2",
            place:"Norway",
            avaialability:""
        }
    ]



    return(
        <>

            <div className="container">

                <div className="gridimage">

                    <img src={gridpic} />

                </div>

            

                <div>
                    <h2>Online Experiences</h2>
                </div>

                <div>
                    <p>Join unique interactive activities led by ane-of-a-kind hosts-all without leaving home.</p>
                </div>

            </div>


            <div className="cardContainer">
            <div className="cardList">
                {data.map((d,index)=>{
                    return (<CardUI key={index} info={d} />)
                })}
            </div>
            </div>

                    
        </>
    )
}