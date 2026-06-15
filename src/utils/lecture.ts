// Petites fonctions partagées.

export function tempsLecture(texte: string): string {
  const mots = texte.trim().split(/\s+/).length;
  const minutes = Math.max(1, Math.round(mots / 200)); // ~200 mots/min
  return `${minutes} min de lecture`;
}

export function formaterDate(date: Date): string {
  return new Intl.DateTimeFormat('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
