// import { Meta } from "antd/es/list/Item";
import "./cards.css"
// import { ClickableCard } from "./ClickableCard";
import { NoCards } from "./NoCards";

// let loading = false;


// const dataArray = data.map((card,ind)=>{
//     return <ClickableCard url = {card.url} key = {ind}>
//     <Meta
//     title={<h2>{card.title}</h2>}
//     description={<p>{card.description}</p>}
//     />
// </ClickableCard>
// });

function StatsProbCards(){
    return <NoCards></NoCards>
    // return <div className="cards-holder">
    //     <NoCards></NoCards>
    // </div>
}

export default StatsProbCards;