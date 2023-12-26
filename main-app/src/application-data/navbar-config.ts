export interface Item {
    name: string;
    offset?: number;
    contentPosition: number;
    url?: string;
    children?: Item[];
    anchor?: string;
}

export const items: Item[] = [
    {
        name: 'за нас',
        url: '/',
        //  anchor: 'main-wrapper',
        offset: 0,
        contentPosition: 1,
    },
    {
        name: 'актуални оферти',
        url: '/offers',
        // anchor: 'product-card-wrapper',
        offset: -50,
        contentPosition: 2,
    },
    // { name: 'високонапорни помпи', url: 'product-card-wrapper',offset:100, contentPosition:3 },
    {
        name: 'галерия',
        url: '/gallery',
        // anchor: 'history-gallery-wrapper',
        offset: -100,
        contentPosition: 4,
    },
    {
        name: 'контакт',
        url: '/contact',
        // anchor: 'contact-form-container',
        offset: -100,
        contentPosition: 5,
    },
];

export const itemsPrime = [
    {
        label: 'Videos',
        icon: 'pi pi-fw pi-video',
    },
    {
        label: 'Users',
        icon: 'pi pi-fw pi-users',
    },
    {
        label: 'Events',
        icon: 'pi pi-fw pi-calendar',
    },
    {
        label: 'Settings',
        icon: 'pi pi-fw pi-cog',
    },
];
