'use client'
import { FirstLevelMenuItem, MenuItem } from '../../../../../interfaces/menu.interface'
import { AiFillSetting, AiOutlineSolution } from 'react-icons/ai'
import { FaBook } from 'react-icons/fa'
import { BsFillBoxFill } from 'react-icons/bs'
import { TopLevelCategory } from '../../../../../interfaces/page.interface'
import Link from 'next/link'
import styles from './Sidebar.module.scss';
import { SecondLevel } from './SecondLevel'
import cn from 'classnames';
import { useState } from 'react'



export const FirstLevel = (MenuFL: MenuItem[]) => {

    const [firstLevelMenu, setFirstLevelMenu] = useState<FirstLevelMenuItem[]>([
        { route: 'courses', name: 'Courses', icon: <AiOutlineSolution />, id: TopLevelCategory.Courses, isActive: true },
        { route: 'services', name: 'Services', icon: <AiFillSetting />, id: TopLevelCategory.Services, isActive: false },
        { route: 'books', name: 'Books', icon: <FaBook />, id: TopLevelCategory.Books, isActive: false },
        { route: 'products', name: 'Products', icon: <BsFillBoxFill />, id: TopLevelCategory.Products, isActive: false },
    ])

    function onClick(index: number) {
        firstLevelMenu.forEach((el: FirstLevelMenuItem) => {
            el.isActive = el.id === index ? true : false
        })
        setFirstLevelMenu([...firstLevelMenu])
    }

    return (
        <nav>{firstLevelMenu.map((menu: FirstLevelMenuItem) =>
            <section key={menu.id}>
                <Link href={`/${menu.route}`}>
                    <div className={cn(styles.firstLevel, {
                        [styles.firstLevelActive]: menu.isActive
                    })}
                        onClick={() => onClick(menu.id)}
                    >
                        {menu.icon}
                        <span>{menu.name}</span>
                    </div>
                </Link>
                {menu.isActive && SecondLevel(MenuFL, menu)}
            </section>)}
        </nav>)
}