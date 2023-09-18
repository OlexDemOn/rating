import { FirstLevelMenuItem, MenuItem, PageItem } from '../../../../../interfaces/menu.interface'
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { ThirdLevel } from './ThirdLevel';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export const SecondLevel = (menuItem: MenuItem[], menu: FirstLevelMenuItem) => {

    const router = usePathname()

    return (
        <div className={styles.secondBlock}>
            {menuItem[menu.id].pages.map((el: PageItem) => {
                el.isOpened = el.alias.includes(router.split('/')[2]) ? true : false;
                return (
                    <div key={el.title} className={styles.secondCategory}>
                        <Link href={`/${menu.route}/${el.alias}`}>
                            <div className={styles.secondLevel}>{el.title}</div>
                        </ Link>
                        <div className={cn(styles.secondLevelBlock, {
                            [styles.secondLevelBlockOpened]: el.isOpened
                        })}>
                            {ThirdLevel(el.pages, `/${menu.route}/${el.alias}`)}
                        </div>
                    </div>

                )
            }
            )}
        </div>
    )
}