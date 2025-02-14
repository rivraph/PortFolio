import type { ResultSetHeader, RowDataPacket } from "mysql2";
import databaseClient from "../../../database/client";
/* import type { Result, Rows } from "../../../database/client"; */

type certProps = {
  id: number;
  user_id: number;
  diplome: string;
  annee_obtention: string;
  description: string;
  localisation: string;
};

class certRepository {
  // The R of CRUD - Read operations

  async readAll() {
    try {
      // Execute the SQL SELECT query to retrieve all items from the "certificat" table
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT id, user_id, diplome, annee_obtention, description, localisation FROM certificat",
      );

      // Return the array of items
      return rows as certProps[];
    } catch (error) {
      console.error("Error reading all certificates:", error);
      throw error;
    }
  }

  async read(id: number) {
    try {
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT id, user_id, diplome, annee_obtention, description, localisation FROM certificat WHERE id = ?",
        [id], // L'ID est passé ici dans la requête SQL
      );

      return rows.length > 0 ? (rows[0] as certProps) : undefined;
    } catch (error) {
      console.error("Error reading certificate:", error);
      throw error;
    }
  }

  async edit(id: number, updateCert: Partial<certProps>) {
    try {
      const query = `
        UPDATE certificat SET
          diplome = ?,
          annee_obtention = ?,
          description = ?,
          localisation = ?
        WHERE id = ?
      `;

      const values = [
        updateCert.diplome,
        updateCert.annee_obtention,
        updateCert.description,
        updateCert.localisation,
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

  async find(diplome: string) {
    try {
      const [rows] = await databaseClient.query<RowDataPacket[]>(
        "SELECT * FROM certificat WHERE diplome = ?",
        [diplome],
      );

      // Si un certificat est trouvé, retourner les résultats, sinon, retourner undefined
      if (rows.length > 0) {
        console.info(`Certificat ${diplome} déjà existant`);
        return rows[0] as certProps;
      }

      return undefined;
    } catch (error) {
      console.error("Erreur lors de recherche find certRepository :", error);
      throw error;
    }
  }

  // The C of CRUD - Create operation
  async create(u: Omit<certProps, "id">): Promise<certProps> {
    try {
      const [result] = await databaseClient.query<ResultSetHeader>(
        "INSERT INTO certificat ( user_id, diplome, annee_obtention, description, localisation) VALUES (?, ?, ?, ?, ?)",
        [
          u.user_id,
          u.diplome,
          u.annee_obtention,
          u.description,
          u.localisation,
        ],
      );

      console.info(
        "Données ajoutées dans la base de données pour certificat",
        result,
      );
      return { ...u, id: result.insertId } as certProps;
    } catch (error) {
      console.error("Erreur lors de la création du certificat :", error);
      throw error;
    }
  }
}

export default new certRepository();
