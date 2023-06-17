import { Rule, SchemaTypeDefinition } from 'sanity';

const wilayah: SchemaTypeDefinition = {
    name: 'wilayah',
    title: 'Wilayah',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul',
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
            title: 'Konten',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                },
            ],
            validation: (Rule: Rule) => Rule.required().min(1),
        },
    ],
};

export default wilayah;
