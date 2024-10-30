
function Cards () {
    const handleClick = () => {
        window.open(url="https://rrczt974.github.io/SoloRush1-WCS/")
    }

    return (
        <figure className="card" >
            <h2 className="titleCard">solo rush 1</h2>
            <img className="cardImage" src="../src/assets/solo rush preview.png" />
            <figcaption className="cardDescription">Projet solo réalisé uniquement en utilisant html et CSS apèrs 15 jours d'apprentissage au sein de la WCS (Wild Code School)</figcaption>
            <button className="cardButton" type="button" onClick={()=>handleClick()}>Github Solo Rush link</button>
        </figure>
    );
}

export default Cards;