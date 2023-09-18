'use client'

import { useEffect, useState } from 'react';
import Button from '../Button/Button';
import { BsFillSunFill, BsFillMoonFill } from 'react-icons/bs'

export default function ThemeChange() {

    const [theme, setTheme] = useState<string | null>();


    const handleThemeChange = () => {
        theme === 'dark' ? setTheme('light') : setTheme('dark');
        localStorage.setItem('theme', theme === 'dark' ? 'light' : 'dark');
    };

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        localTheme && setTheme(localTheme);
    }, []);

    useEffect(() => {
        document.documentElement.style.setProperty('--app-bg', theme === 'dark' ? '#0F0E0E' : '#ffffff');
        document.documentElement.style.setProperty('--app-text', theme === 'dark' ? '#ffffff' : '#0F0E0E');
    }, [theme]);


    return (
        <span onClick={handleThemeChange} style={{ cursor: "pointer", display: "inline-block" }}>
            {theme && theme === 'light' ?
                <BsFillSunFill onClick={handleThemeChange} size={20} /> :
                <BsFillMoonFill size={20} />}
        </span>

    )

}