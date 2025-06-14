
function Card ({cardTitle, cardImg}) {

    return (
        <div className="card-content">
            <img 
                src= {cardImg}
                alt= ''
            />
            <h2>
                {cardTitle}
            </h2>
            
        </div>
    )

}

export default Card