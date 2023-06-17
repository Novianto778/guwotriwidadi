import { type SchemaTypeDefinition } from 'sanity';
import beranda from './schema/beranda';
import news from './schema/news';
import wilayah from './schema/wilayah';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [news, beranda, wilayah],
};
