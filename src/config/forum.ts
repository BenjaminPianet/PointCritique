// Configuration du forum (giscus — https://giscus.app).
// Le forum s'appuie sur les Discussions GitHub du dépôt : aucune base de
// données, aucune inscription hors GitHub, tout reste sous votre contrôle.
//
// Mise en route (une seule fois, ~2 minutes) :
//   1. Sur GitHub : Settings du dépôt → Features → cocher « Discussions ».
//   2. Installer l'application giscus sur le dépôt :
//      https://github.com/apps/giscus
//   3. Ouvrir https://giscus.app, renseigner « BenjaminPianet/PointCritique »,
//      choisir la catégorie (créez p. ex. « Forum » de type Announcements ou
//      Open-ended), puis recopier ci-dessous les valeurs `data-repo-id` et
//      `data-category-id` générées en bas de la page.

export const FORUM = {
  repo: 'BenjaminPianet/PointCritique',
  // À compléter depuis giscus.app :
  repoId: '',
  category: 'Forum',
  categoryId: '',
  // Apparence
  lang: 'fr',
  theme: 'light',
};

export const forumConfigure = FORUM.repoId !== '' && FORUM.categoryId !== '';
