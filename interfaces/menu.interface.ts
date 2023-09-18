import { TopLevelCategory } from './page.interface';

export interface PageItem {
    alias: string;
    title: string;
    category?: string;
    isOpened?: boolean
    pages: [{
        alias: string;
        title: string;
    }]
}

export interface MenuItem {
    pages: PageItem[]
}

export interface FirstLevelMenuItem {
    route: string;
    name: string;
    icon: JSX.Element;
    id: TopLevelCategory;
    isActive: boolean
}