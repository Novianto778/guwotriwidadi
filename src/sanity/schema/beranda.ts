import { Rule, SchemaTypeDefinition } from 'sanity';

const beranda: SchemaTypeDefinition = {
    name: 'beranda',
    title: 'Beranda',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string',
        },
        {
            name: 'subtitle',
            title: 'Subjudul',
            type: 'string',
        },
        {
            name: 'mainImage',
            title: 'Gambar Utama',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'content',
            title: 'Tentang',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                },
            ],
            validation: (Rule: Rule) => Rule.required().min(1),
        },
        {
            name: 'tentangImage',
            title: 'Gambar Tentang',
            type: 'image',
            options: {
                hotspot: true,
            },
        },
    ],
};

export default beranda;
