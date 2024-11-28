import { useState } from 'react'
import logo from 'C:/Users/1/Desktop/Git/react-vite-intro/public/vite.svg'

export default function Header() {
    const [now, setNow] = useState(new Date())

    setInterval(() => setNow(new Date()), 1000)

    return (
        <header>
            <img src={logo} alt='Result' />
            {/* <h3>Result University</h3> */}
            <span>Время сейчас: {now.toLocaleString()} </span>
        </header>
    )
}