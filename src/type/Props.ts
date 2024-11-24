export type Props = {
PersonalityProps : {
  Education: EducationProps;
  Exp: ExpProps;
  Others: OthersProps;
  title: string;
  firstName: string;
  lastName: string;
  age: number;
  adresse: string;
  permis: string;
  city: string;
  telephone: string;
  email: string;
  github: string;
  linkedin: string;
  facebook: string;
  hobbies: string;
  instagram: string;
  personality: string;
  img: string;
};

EducationProps : {
  wild: string;
  remap: string;
  tdra: string;
  bacc: string;
}
  
ExpProps : {
  bleulib: string;
  biomotors: string;
  kia1: string;
  mecaperfs: string;
  kia2: string;
  delko: string;
  kia: string;
}
  
OthersProps : {
  logiciels: string;
  francais: string;
  anglais: string;
  espagnol: string;
  }
}