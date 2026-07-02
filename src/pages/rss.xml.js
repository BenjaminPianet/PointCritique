import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';

export async function GET(context) {
  const essais = await getCollection('essais', ({ data }) => !data.brouillon);
  const pensees = await getCollection('pensees', ({ data }) => !data.brouillon);

  const items = [
    ...essais.map((e) => ({
      title: e.data.titre,
      description: e.data.description,
      pubDate: e.data.date,
      link: `/essais/${e.id}/`,
    })),
    ...pensees.map((p) => ({
      title: p.data.titre ?? 'Pensée',
      pubDate: p.data.date,
      link: `/pensees/#${p.id}`,
    })),
  ].sort((a, b) => b.pubDate.valueOf() - a.pubDate.valueOf());

  return rss({
    title: 'Point Critique',
    description:
      'Cheminons aux côtés des processus. Essais et pensées sur la philosophie et la science.',
    site: context.site,
    items,
    customData: '<language>fr-fr</language>',
  });
}
