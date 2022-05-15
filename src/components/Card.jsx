import "../assets/css/card.css"
import Dropdown from './Dropdown';

const Card = ({author}) => {
    const createColor = () => {
        let color = []
        let r = Math.floor(Math.random() * 255)
        let g = Math.floor(Math.random() * 255)
        let b = Math.floor(Math.random() * 255)
        color.push(r,g,b)
        return color
    }

    return (
        <>
            <div className="card-wrapper">
            <div className="card" style={{borderTop:`5px solid rgb(${createColor()})`}}>
                <div className="card-header">{author[0] || "data is missing"}</div>
                    <div className="card-content">
                        {author[1] && author[1].map((item,index) => (
                            <Dropdown item={item} key={index}/>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Card;