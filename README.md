# Point Critique

Blog statique construit avec Astro. Fin, calme, contemporain.
« Cheminons aux côtés des processus. »

## Démarrer en local

```bash
npm install        # une seule fois, installe les dépendances
npm run dev        # lance le site sur http://localhost:4321
```

Laisse `npm run dev` tourner : à chaque modification, le site se met à jour
tout seul dans le navigateur.

## Les sections

Le contenu vit dans `src/content/`, un dossier par section :

- `essais/`   → les articles écrits (prose)
- `poesie/`   → les poèmes
- `recherche/`→ les travaux et publications
- `videos/`   → les vidéos YouTube, groupées par thème

Pour ajouter quelque chose, on crée un fichier dans le bon dossier. Le nom du
fichier devient l'adresse de la page (pour essais et poésie).

---

### Écrire un essai — `src/content/essais/`

Fichier `.md` :

```markdown
---
titre: "Le titre de l'essai"
description: "Une phrase de résumé (apparaît dans les listes)."
date: 2026-06-20
brouillon: false
---

Le texte commence ici. **Gras**, *italique*, > citations, ## sous-titres…
```

Pour intégrer une vidéo dans un essai : nomme le fichier en `.mdx` (au lieu de
`.md`), ajoute sous le bloc `---` la ligne
`import Video from '../../components/Video.astro';`
puis, dans le texte : `<Video id="ID_YOUTUBE" titre="Légende" />`.
Exemple complet : `src/content/essais/le-seuil-et-la-bascule.mdx`.

### Écrire un poème — `src/content/poesie/`

Fichier `.md`. Les retours à la ligne sont respectés (un vers par ligne, une
ligne vide entre les strophes) :

```markdown
---
titre: "Seuil"
date: 2026-06-12
exergue: "ce qui hésite avant de devenir"   # facultatif, montré avant dépliage
brouillon: false
---

Premier vers,
deuxième vers,

(strophe suivante après une ligne vide)
```

Sur le site, le poème apparaît replié et se déplie au survol (ordinateur) ou au
toucher (mobile).

### Ajouter une publication — `src/content/recherche/`

Fichier `.md`. Tout est dans l'en-tête (pas de corps nécessaire) :

```markdown
---
titre: "Titre de la publication"
publication: "Nom de la revue ou de la conférence"   # facultatif
annee: 2025
auteurs: "Vos noms"                                   # facultatif
type: "Article"                                        # Article, Chapitre, Thèse…
lien: "https://lien-vers-le-pdf.pdf"                  # facultatif
resume: "Une ou deux phrases de résumé."              # facultatif
---
```

### Ajouter une vidéo — `src/content/videos/`

Fichier `.md`. Les vidéos sont regroupées par `theme` :

```markdown
---
titre: "Titre de la vidéo"
youtube: "ID_YOUTUBE"          # ce qui suit watch?v= dans l'URL
theme: "Nom du thème"          # les vidéos du même thème sont regroupées
ordreTheme: 1                  # ordre d'affichage des thèmes (petit = haut)
date: 2026-06-08
description: "Phrase de présentation."   # facultatif
---
```

---

## Modifier les pages fixes

- Accueil : `src/pages/index.astro`
- À propos : `src/pages/a-propos.astro`
- Navigation (les onglets) : `src/layouts/Base.astro`
- Couleurs et polices : `src/styles/global.css` (section `:root` tout en haut)

## Publier en ligne (gratuit)

1. Mets ce dossier sur GitHub.
2. Connecte le dépôt à Netlify ou Vercel (détection Astro automatique).
3. Branche le domaine `pointcritique.com`.

Ensuite, chaque contenu ajouté et envoyé sur GitHub se publie tout seul.
