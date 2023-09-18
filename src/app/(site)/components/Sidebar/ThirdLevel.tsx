import cn from 'classnames';
import { PageItem } from '../../../../../interfaces/menu.interface';
import Link from 'next/link';
import styles from './Sidebar.module.scss';
import { usePathname } from 'next/navigation';

export const ThirdLevel = (pages: any, route: string) => {

    const router = usePathname()

    return (
        pages?.map((p: any) =>
            <Link key={p.alias} href={`${route}/${p.alias}`} className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: p.alias === router.split('/')[3]
            })}>
                {p.title}
            </Link>
        )
    )
}