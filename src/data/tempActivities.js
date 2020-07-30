export const tempActivities = [
    {
        id: 1,
        title: 'Título 1',
        description: 'Descripción 1',
        notes: [
            {
                id: 1,
                text: 'Una nota de prueba',
                done: false,
            },
            {
                id: 2,
                text: 'Una segunda nota de prueba',
                done: true,
            }
        ],
        messages: [
            {
                id: 1,
                text: 'Un comentario de prueba',
                user: {
                    id: 100,
                    name: 'Neeko',
                    img: 'https://nexus.leagueoflegends.com/wp-content/uploads/2018/12/Banner-1_xcfpudr9qr3a3mr4e0a4.jpg',
                },
                created_at: new Date().getTime(),
            },
        ],
        done: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    },
    {
        id: 2,
        title: 'Título 2',
        description: 'Descripción 2',
        notes: [],
        messages: [],
        done: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    },
    {
        id: 3,
        title: 'Título 3',
        description: 'Descripción 3',
        notes: [],
        messages: [],
        done: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    },
    {
        id: 4,
        title: 'Título 4',
        description: 'Descripción 4',
        notes: [],
        messages: [],
        done: true,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    },
    {
        id: 5,
        title: 'Título 5',
        description: 'Descripción 5',
        notes: [],
        messages: [],
        done: false,
        created_at: new Date().getTime(),
        updated_at: new Date().getTime(),
    },
]