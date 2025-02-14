import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";

const Admin: React.FC = () => {
  const [isAdmin, setIsAdmin] = useState<boolean | null>(null);

  useEffect(() => {
    const role = localStorage.getItem("isAdmin");
    // Vérification du rôle après le montage du composant
    setIsAdmin(role === "admin");
  }, []); // Cette dépendance vide [] permet de n'effectuer cette vérification qu'une fois au montage du composant

  if (isAdmin === null) {
    // Si l'état n'a pas encore été déterminé, on peut éventuellement afficher un loader ou rien
    return null;
  }

  if (!isAdmin) {
    // Si l'utilisateur n'est pas admin, on le redirige
    return <Navigate to="/" replace />;
  }

  // Si l'utilisateur est admin, on rend les enfants de la route admin
  return <Outlet />;
};

export default Admin;
