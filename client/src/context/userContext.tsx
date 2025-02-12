import { createContext, useContext, useEffect, useState } from "react";

const UserContext = createContext<ContextArcadiaType | undefined>(undefined);

type ContextArcadiaType = {
  //exemples pour le typage
  /* debPoints: number;
  setDebPoints: Dispatch<SetStateAction<number>>; */
  userData: UserData | null;
  setUserData: (data: UserData) => void;
};

//tous les typages de la BDD
type UserData = {
  id: number;
  prenom: string;
  nom: string;
  adresse: string;
  permis: string;
  ville: string;
  telephone: string;
  email: string;
  password: string;
  date_de_naissance: string;
  nationalite: string;
  github: string;
  linkedin: string;
  facebook: string;
  instagram: string;
  hobbies: string;
  img: string;
};

/* type certificatData = {
    id: number,
    user_id: number,
    diplome: string,
    annee_obtention: string,
    description: string,
    localisation: string,
}

type experiencesData = {
    id: number,
    user_id: number,
    entreprise: string,
    lieu: string,
    date_debut: string,
    date_fin: string,
    poste: string,
    description: string,
}

type autresData = {
    id: number,
    user_id: number,
    intitule: string,
    description: string,
}

type projetsData = {
    id: number,
    user_id: number,
    nom: string,
    img: string,
    info: string,
    url: string,
} */
function ContextProvider({ children }: { children: React.ReactNode }) {
  //fonctions et variables à insérer
  const [userData, setUserData] = useState<UserData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/userdata`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const [respUserData] = await response.json();
          console.info(
            "Données reçues du backend après fetch userData =>",
            respUserData,
          );
          setUserData(respUserData);
          console.info("donnée stocké dans state userData", userData);
        }
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
      }
    };
    fetchData();
  }, [userData]);

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useContextProvider() {
  const context = useContext(UserContext);
  return context;
}

export { ContextProvider, useContextProvider };
