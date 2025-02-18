import { createContext, useContext, useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import { useNavigate } from "react-router-dom";
import Data from "../data/datas.json";

const UserContext = createContext<UserContextType | undefined>(undefined);

type UserContextType = {
  userData: UserData[];
  setUserData: Dispatch<SetStateAction<UserData[]>>;
  autreData: AutreData[];
  setAutreData: Dispatch<SetStateAction<AutreData[]>>;
  handleAdminConnect: () => void;
  certData: CertData[];
  setCertData: Dispatch<SetStateAction<CertData[]>>;
  expData: expProps[];
  setExpData: Dispatch<SetStateAction<expProps[]>>;
  projData: projectsProps[];
  setProjData: Dispatch<SetStateAction<projectsProps[]>>;
};

type AutreData = {
  id: number;
  /*  user_id: number; */
  intitule: string;
  description: string;
};

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

type ContextProviderProps = {
  children: React.ReactNode;
};

type CertData = {
  id: number;
  /* user_id: number; */
  diplome: string;
  annee_obtention: number;
  description: string;
  localisation: string;
};

type expProps = {
  id: number;
  user_id: number;
  entreprise: string;
  lieu: string;
  date_debut: string;
  date_fin: string;
  poste: string;
  description: string;
};

type projectsProps = {
  id: number;
  /*  user_id: number; */
  nom: string;
  img: string;
  info: string;
  url: string;
};

function ContextProvider({ children }: ContextProviderProps): JSX.Element {
  //fonctions et variables à insérer
  const [userData, setUserData] = useState<UserData[]>(Data.user);
  const [certData, setCertData] = useState<CertData[]>(Data.certificat);
  const [expData, setExpData] = useState<expProps[]>(Data.experiences);
  const [projData, setProjData] = useState<projectsProps[]>(Data.projets);
  const [autreData, setAutreData] = useState<AutreData[]>(Data.autres);

  const navigate = useNavigate();

  //fetch toutes les données USER au chargement de la homepage.
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/user`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const [respUserData] = await response.json();
          setUserData(respUserData);
        }
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
      }
    };
    fetchData();
  }, []); */

  //fetch toutes les données AUTRE au chargement de la homepage.
  /*  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/autres`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const respAutreData = await response.json();

          setAutreData(respAutreData);
        }
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
      }
    };
    fetchData();
  }, []);
 */

  //fetch toutes les données EXPERIENCES au chargement de la homepage.
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/exp`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const expData = await response.json();

          console.info("données fetchées expData =>", expData);
          setExpData(expData);
          console.info("données fetchées expData =>", expData);
        }
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
      }
    };
    fetchData();
  }, []); */

  //fetch toutes les données PROJETS au chargement de la homepage.
  /* useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/projets`,
          {
            method: "GET",
            headers: { "Content-Type": "application/json" },
          },
        );

        if (response.ok) {
          const projData = await response.json();
          setProjData(projData);
        }
      } catch (err) {
        console.error("Erreur lors de la connexion :", err);
      }
    };
    fetchData();
  }, []); */

  const handleAdminConnect = () => {
    const isConfirm = window.confirm(
      "Souhaitez vous vous connecter en tant qu'administrateur du site ?",
    );

    if (isConfirm) {
      const inputPass = window.prompt(
        "veuillez saisir le mot de passe administrateur",
      );
      const mdp = import.meta.env.VITE_PASSWORD;
      if (inputPass === mdp) {
        window.alert("connexion acceptée");
        localStorage.setItem("isAdmin", "admin");
        navigate("formations");
      } else {
        alert("Connexion refusée");
        localStorage.removeItem("isAdmin");
        navigate("/");
      }
    }
  };

  return (
    <UserContext.Provider
      value={{
        userData,
        setUserData,
        autreData,
        setAutreData,
        handleAdminConnect,
        certData,
        setCertData,
        expData,
        setExpData,
        projData,
        setProjData,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

function useContextProvider() {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error(
      "useContextProvider doit être utilisé à l'intérieur de <ContextProvider>",
    );
  }
  return context;
}

export { ContextProvider, useContextProvider };
