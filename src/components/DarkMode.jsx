import React, { useEffect, useState } from 'react'
import { FaMoon } from "react-icons/fa";
import { FaSun } from "react-icons/fa";

const DarkMode = () => {
    const [theme, setTheme] = useState(localStorage.getItem("theme") ? localStorage.getItem("theme") : "dark")

    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const onWindowMatch = () => {
        if (
            localStorage.theme === "dark" ||
            (!("theme" in localStorage) && darkQuery.matches)
        ) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
    };

    onWindowMatch();

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else if (theme === "light") {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        } else {
            localStorage.removeItem("theme");
        }
    }, [theme]);

    const handleThemeSwitch = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    // console.log(theme);

    return (
        <div className=" ">
            <button
                onClick={handleThemeSwitch}
                className=" icon">
                {theme === "dark" ? (
                    <FaSun className=" innerIcon text-mainText-light dark:text-mainText-dark" />
                ) : (
                    <FaMoon className=" innerIcon text-mainText-light dark:text-mainText-dark" />
                )}
            </button>
        </div>
    )
}

export default DarkMode
