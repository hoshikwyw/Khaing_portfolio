import React, { createContext, useEffect, useState } from 'react'

export const ThemeContext = createContext()

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
    useEffect(() => {
        const themeListener = () => {
            setTheme(localStorage.getItem('theme'))
        }
        window.addEventListener('storage', themeListener)
        return () => { window.removeEventListener('storage', themeListener) }
    }, [])
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}
