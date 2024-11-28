import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import { differences } from './data'
import Button from './components/Button/Button'
import { useState } from 'react'
import TeachingSection from './components/TeachingSection'

function App() {
  const [contentType, setContentType] = useState(null)

  function handleClick(type) {
    setContentType(type)
  }
  const [count, setCount] = useState(0)
  return (
    <>
      <div>
        <Header />
        <main>
          <TeachingSection />
          <section>
            <h3>Чем мы отличаемся от других</h3>
            <Button isActive={contentType === 'way'} onClick={() => handleClick('way')}>Подход</Button>
            <Button isActive={contentType === 'easy'} onClick={() => handleClick('easy')}>Доступность</Button>
            <Button isActive={contentType === 'program'} onClick={() => handleClick('program')}>Концентрация</Button>

            {!contentType && <p>Нажми на кнопку</p>}
            {contentType && <p>{differences[contentType]}</p>}

          </section>
        </main>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more!!
      </p>
    </>
  )
}

export default App
