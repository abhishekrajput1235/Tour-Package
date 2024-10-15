import { useState } from "react";
import './Card.css';


function Card({id,image,info,price,name,removeTour}){
    const [readmore,setReadmore] = useState(false);
    const discription = readmore ? info : `${info.substring(0,200)}....`;
                
    function readMoreHandler()
    {
        setReadmore(!readmore);
    }


    return(
        <div className="card">
            <div className="tour-info">
                <img src={image} className="image" alt="This is pics"></img>
                
                <div className="tour-details">
                    <h4 className="tour-price">$ {price}</h4>
                    
                    <h4 className="tour-name">{name}</h4>
                </div>

                <div className="description">
                    <p>{discription}
                        <span className="read-more" onClick={readMoreHandler}>
                            {readmore?' show less':'read more'}
                        </span>
                    </p>
                </div>
            </div>

            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        
        </div>
    );
}

export default Card;