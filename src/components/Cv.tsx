import type { Props } from "../type/Props.ts"
import Datas from "../datas/datas.json";


function Resume () {
    const p = Datas;
    console.log(p);

    return (
        <>
            <div className="infos">
            <h2 className="titleCard">Formations</h2>
                <div className="cv-contener"> 
                    <span>{p.education?.wild}</span><br />
                    <span>{p.education?.remap}</span><br />
                    <span>{p.education?.tdra}</span><br />
                    <span>{p.education?.bacc}</span><br />
                </div>
            </div>
            <div className="infos">
                <h2 className="titleCard">Expériences Pro</h2>
                <div className="cv-contener"> 
                    <span>{p.experience?.bleulib}</span><br />                    
                    <span>{p.experience?.biomotors}</span><br />
                    <span>{p.experience?.kia1}</span><br />
                    <span>{p.experience?.mecaperfs}</span><br />
                    <span>{p.experience?.kia2}</span><br />
                    <span>{p.experience?.delko}</span><br />
                    <span>{p.experience?.kia}</span><br />
                </div>
            </div>
            <div className="infos">
            <h2 className="titleCard">Autres compétences</h2>
                <div className="cv-contener"> 
                    <span>{p.others?.logiciels}</span><br />
                    <span>{p.others?.francais}</span><br />
                    <span>{p.others?.anglais}</span><br />
                    <span>{p.others?.espagnol}</span><br />    
                </div>
            </div>
        </>
    )
}

export default Resume;