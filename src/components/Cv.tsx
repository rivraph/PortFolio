interface personalityprops {
    Education: EducationProps;
    Exp: ExpProps;
    Others: OthersProps;
}

interface EducationProps {
    wild: string;
    remap: string;
    tdra: string;
    bacc: string;
  }
  
  interface ExpProps {
    bleulib: string;
    biomotors: string;
    kia1: string;
    mecaperfs: string;
    kia2: string;
    delko: string;
    kia: string;
  }
  
  interface OthersProps {
    logiciels: string;
    francais: string;
    anglais: string;
    espagnol: string;
  }

function Resume ({Exp, Education, Others}: personalityprops) {
    
    return (
        <>
            <div className="infos">
            <h2 className="titleCard">Formations</h2>
                <div className="cv-contener"> 
                    <span>{Education.wild}</span><br />
                    <span>{Education.remap}</span><br />
                    <span>{Education.tdra}</span><br />
                    <span>{Education.bacc}</span><br />
                </div>
            </div>
            <div className="infos">
            <h2 className="titleCard">Expériences Pro</h2>
                <div className="cv-contener"> 
                    <span>{Exp.bleulib}</span><br />                    
                    <span>{Exp.biomotors}</span><br />
                    <span>{Exp.kia1}</span><br />
                    <span>{Exp.mecaperfs}</span><br />
                    <span>{Exp.kia2}</span><br />
                    <span>{Exp.delko}</span><br />
                    <span>{Exp.kia}</span><br />
                </div>
            </div>
            <div className="infos">
            <h2 className="titleCard">Autres compétences</h2>
                <div className="cv-contener"> 
                    <span>{Others.logiciels}</span><br />
                    <span>{Others.francais}</span><br />
                    <span>{Others.anglais}</span><br />
                    <span>{Others.espagnol}</span><br />
                    
                </div>
           </div>
        </>
    )
}

export default Resume;