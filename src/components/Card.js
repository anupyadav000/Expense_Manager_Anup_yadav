import './card.css'


function Card(props){
    const clas = "card " + props.className;
    return (<div className={clas}>{props.children}</div>);
}

export default Card;