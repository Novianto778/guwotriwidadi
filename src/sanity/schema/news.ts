const news = {
    name: 'news',
    title: 'Berita',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Judul',
            type: 'string',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },

        {
            name: 'publishedAt',
            title: 'Published at',
            type: 'datetime',
            initialValue: () => new Date().toISOString(),
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
            title: 'Content',
            type: 'array',
            of: [
                {
                    title: 'Block',
                    type: 'block',
                },
                {
                    type: 'image',
                },
            ],
        },
    ],
};

export default news;
