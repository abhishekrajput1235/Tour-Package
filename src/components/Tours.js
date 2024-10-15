import Card from "./Card";
function Tours({tours,removeTour}){
    return(
        <div>
            <div className="main-heading ">
                <h2 className="main-heading-txt">Plan With Abhishek</h2>
            </div>
            <div className="card-container">
               {
                tours.map( (tour) => {
                     return <Card {...tour} removeTour={removeTour}></Card>
                })
                }
            </div>
        </div>
    );
}

export default Tours;