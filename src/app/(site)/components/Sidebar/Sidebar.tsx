import { SidebarProps } from './Sidebar.props';
import styles from './Sidebar.module.scss';
import cn from 'classnames';
import { getMenu } from '../../../../../api/menu'
import { MenuItem } from '../../../../../interfaces/menu.interface';
import ThemeChange from '../Theme/Theme';
import { FirstLevel } from './FirstLevel';
import { AiFillStar } from 'react-icons/ai';
import Htag from '../Htag/Htag';

export default async function Sidebar({ className }: SidebarProps) {

    let MenuFL: MenuItem[] = await getMenu();

    return (
        <div className={cn(className, styles.sidebar)}>
            <section className={styles.logoBlock}>
                <AiFillStar size={25} />
                <Htag tag='h1'>T-O-P</Htag>
                <AiFillStar size={25} />
            </section>
            <section className={styles.searchBlock}>
                Search
            </section>
            {<FirstLevel {...MenuFL} />}
            <ThemeChange />
        </div>
    )
}

