CREATE TABLE user (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  prenom VARCHAR(255) NOT NULL,
  nom VARCHAR(255) NOT NULL,
  adresse VARCHAR(255) NOT NULL,
  permis VARCHAR(255) NOT NULL,
  ville VARCHAR(255) NOT NULL,
  telephone VARCHAR(20) NOT NULL,
  email VARCHAR(255) NOT NULL UNIQUE,
  password VARCHAR(255) NOT NULL,
  date_de_naissance DATE NOT NULL,
  nationalite VARCHAR(255) NOT NULL,
  github VARCHAR(255) DEFAULT NULL,
  linkedin VARCHAR(255) DEFAULT NULL,
  facebook VARCHAR(255) DEFAULT NULL,
  instagram VARCHAR(255) DEFAULT NULL,
  hobbies TEXT NOT NULL,
  img VARCHAR(255) DEFAULT NULL,
  INDEX (email),
  INDEX (ville)
);

CREATE TABLE certificat (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  diplome VARCHAR(255) NOT NULL,
  annee_obtention YEAR NOT NULL,
  description TEXT DEFAULT NULL,
  localisation VARCHAR(255) DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE experiences (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  entreprise VARCHAR(255) NOT NULL,
  lieu VARCHAR(255) NOT NULL,
  date_debut DATE DEFAULT NULL,
  date_fin DATE DEFAULT NULL,
  poste VARCHAR(255) DEFAULT NULL,
  description TEXT DEFAULT NULL,
  CHECK (date_debut IS NULL OR date_fin IS NULL OR date_debut <= date_fin),
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE autres (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  intitule VARCHAR(255) NOT NULL,
  description TEXT DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

CREATE TABLE projets (
  id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
  user_id INT UNSIGNED NOT NULL,
  nom VARCHAR(255) NOT NULL,
  img VARCHAR(255) DEFAULT NULL,
  info TEXT DEFAULT NULL,
  url VARCHAR(255) DEFAULT NULL,
  FOREIGN KEY (user_id) REFERENCES user(id) ON DELETE CASCADE ON UPDATE CASCADE
);

-- Insertion des données
INSERT INTO user (id, prenom, nom, adresse, permis, ville, telephone, email, password, date_de_naissance, nationalite, github, linkedin, facebook, instagram, hobbies, img)
VALUES
  (1, "Raphaël", "Rivière", "13 rue des estivenques", "A et B", "Gallargues le Montueux", "0663778677", "raphaelriviere87@gmail.com", "raphael974", "1987-10-14", "française",
  "https://github.com/rivraph",
  "https://www.linkedin.com/in/rivière-raphaël-130b78151/",
  "https://www.facebook.com/raphael.riviere.58",
  "https://www.instagram.com/therrelylifephotography/",
  "photographie, videos, sports, simracing, moto, informatique, découvrir le monde, la nature ...",
  "/IMG_3880.webp");

INSERT INTO certificat (id, user_id, diplome, annee_obtention, description, localisation)
VALUES
  (1, 1, "BAC S", 2005, "Baccalauréat Scientifique option Sciences de l'Ingénieur au lycée de la Rivière", "Réunion"),
  (2, 1, "GUCD", 2008, "Gestionnaire d'Unité Commerciale et de Distribution niveau Bac+2 à la Chambre des Commerces Sud", "Réunion"),
  (3, 1, "TDRA", 2010, "Technicien de Diagnostic et Réparateur Automobile niveau Bac à l'AFPA", "Chartres"),
  (4, 1, "Remappeur", 2015, "Reprogrammateur moteur essence et diesel", "Alby"),
  (5, 1, "DWWA", 2025, "Developpeur Web et Web Application avec la Wild Code School", "Remote");

INSERT INTO experiences (id, user_id, entreprise, lieu, date_debut, date_fin, poste, description)
VALUES
  (1, 1, "SOGELEC INFORMATIQUE", "Saint Pierre (97410)", "2006-09-01", "2007-06-30", "Conseiller en informatique", "Vente, gestion des stocks, facturation, réparation, montage ..."),
  (2, 1, "HyperCrack", "Saint Pierre (97410)", "2007-09-01", "2008-06-30", "Conseiller rayon multimédia", "gestion du rayon, merchandising, conseiller clientèle ..."),
  (3, 1, "Feu Vert", "Tours (37000)", "2009-12-14", "2009-12-24", "Mécanicien multimarques", "Mécanicien, monteur de pneus, accessoiriste ...");

INSERT INTO autres (id, user_id, intitule, description)
VALUES
  (1, 1, "Français", "Langue courante"),
  (2, 1, "Automobile", "Divers valises de diagnostic multimarques, reprogrammation moteur, logiciels constructeur ..."),
  (3, 1, "Informatique", "Suite Office, Photoshop, Lightroom, DaVinci Resolve, Trello, Slack ..."),
  (4, 1, "Dev Web", "VsCode, GitHub, Figma, Wireframe.cc, Terminal ...");

INSERT INTO projets (id, user_id, nom, img, info, url)
VALUES
  (1, 1, "Solo Rush", "/solo_rush_preview.png", "Projet challenge 1 journée réalisé en solo en HTML et CSS après 7 jours d'apprentissage au sein de la WCS (Wild Code School). Projet réalisé en 5H", "https://github.com/rivraph/SoloRush1-WCS"),
  (2, 1, "Html & CSS", "/Bienvenue-a-Bord.png", "Premier projet réalisé en 5 jours après 15 jours de formation", "https://github.com/rivraph/Html-Css-Bienvenue-bord"),
  (3, 1, "Les Petits Frappés", "/Les-petits-frappes.png", "Premier projet de groupe mettant en œuvre l'apprentissage du JS", "https://github.com/rivraph/JS-RemoteFR-Vendangeurs-P1-Les-Frappes"),
  (4, 1, "DevRap", "/DevRAP.png", "Second projet de groupe développé en AGILE, REACT, Express, les API ... ", "https://github.com/rivraph/P2-DevRAP"),
  (5, 1, "Arcadia", NULL, "En cours de développement : 3e projet fullstack Backend et Frontend, BDD MySQL, CRUD, BREAD ...", "Bientôt disponible");
