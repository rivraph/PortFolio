import type { ResultSetHeader, RowDataPacket } from "mysql2";
import databaseClient from "../../database/client";

import type { Result, Rows } from "../../database/client";

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

class expRepository {
  async readAll() {
    // Execute the SQL SELECT query to retrieve all items from the "item" table
    const [rows] = await databaseClient.query<Rows>(
      "SELECT id, user_id, entreprise, lieu, DATE_FORMAT(date_debut, '%d-%m-%Y') AS date_debut, DATE_FORMAT(date_fin, '%d-%m-%Y') AS date_fin, poste, description FROM experiences",
    );

    // Return the array of items
    return rows as expProps[];
  }

  async read(id: number) {
    const [rows] = await databaseClient.query<Rows>(
      "select id, user_id, entreprise, lieu, DATE_FORMAT(date_debut, '%d-%m-%Y') AS date_debut, DATE_FORMAT(date_fin, '%q-%m-%Y') AS date_fin, poste from experiences where id = ?",
      [id],
    );

    return rows[0] as expProps;
  }

  async edit(id: number, updateExp: Partial<expProps>) {
    try {
      const query = `
        UPDATE experiences SET
          entreprise = ?,
          lieu = ?,
          date_debut = ?,
          date_fin = ?,
          poste = ?,
          description = ?
        WHERE id = ?
      `;

      const values = [
        updateExp.entreprise,
        updateExp.lieu,
        updateExp.date_debut,
        updateExp.date_fin,
        updateExp.poste,
        updateExp.description,
        id,
      ];

      const [result] = await databaseClient.query<ResultSetHeader>(
        query,
        values,
      );

      if (result.affectedRows === 0) {
        console.error(`Certificat avec ID ${id} non trouvé pour mise à jour`);
        return undefined;
      }

      return this.read(id); // Retourner l'élément mis à jour
    } catch (error) {
      console.error("Error updating certificate:", error);
      throw error;
    }
  }

  async delete(id: number) {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "DELETE FROM certificat WHERE id = ?",
        [id],
      );

      if (result.affectedRows === 0) {
        console.error(`Certificat avec ID ${id} non trouvé pour suppression`);
        return undefined;
      }

      console.info("Suppression validée pour certificat ID", id);
      return { id }; // Retourne l'ID du certificat supprimé
    } catch (error) {
      console.error(
        "Erreur lors de la suppression dans certRepository.delete :",
        error,
      );
      throw error;
    }
  }

  async find(date_debut: string) {
    try {
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT * FROM certificat WHERE diplome = ?",
        [date_debut],
      );

      // Si un certificat est trouvé, retourner les résultats, sinon, retourner undefined
      if (rows.length > 0) {
        console.info(
          `une expérience existe déjà à cette date du  ${date_debut}`,
        );
        return rows[0] as expProps;
      }

      return undefined;
    } catch (error) {
      console.error("Erreur lors de recherche find certRepository :", error);
      throw error;
    }
  }

  // The C of CRUD - Create operation
  async create(u: Omit<expProps, "id">): Promise<expProps> {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "INSERT INTO experiences ( user_id, entreprise, date_debut, date_fin, poste, description) VALUES (?, ?, ?, ?, ?, ?)",
        [
          u.user_id,
          u.entreprise,
          u.date_debut,
          u.date_fin,
          u.poste,
          u.description,
        ],
      );

      console.info(
        "Données ajoutées dans la base de données pour certificat",
        result,
      );
      return { ...u, id: result.insertId } as expProps;
    } catch (error) {
      console.error("Erreur lors de la création du certificat :", error);
      throw error;
    }
  }
}

export default new expRepository();
