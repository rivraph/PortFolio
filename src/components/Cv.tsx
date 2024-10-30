function Resume ({education, experience, others}) {
    
    return (
        <>
            <div className="infos">
            <h2 className="titleCard">Formations</h2>
                <div> 
                    <span>{education.wild}</span><br />
                    <span>{education.remap}</span><br />
                    <span>{education.tdra}</span><br />
                    <span>{education.bacc}</span><br />
                </div>
            </div>
            <div className="infos">
            <h2 className="titleCard">Expériences Pro</h2>
                <div> 
                    <span>{experience.bleulib}</span><br />
                    <span>{experience.biomotors}</span><br />
                    <span>{experience.kia1}</span><br />
                    <span>{experience.mecaperfs}</span><br />
                    <span>{experience.kia2}</span><br />
                    <span>{experience.delko}</span><br />
                    <span>{experience.kia}</span><br />
                </div>
            </div>
            <div className="infos">
            <h2 className="titleCard">Autres compétences</h2>
                <div> 
                    <span>{others.logiciels}</span><br />
                    <span>{others.francais}</span><br />
                    <span>{others.anglais}</span><br />
                    <span>{others.espagnol}</span><br />
                    
                </div>
           </div>
        </>
    )
}

export default Resume