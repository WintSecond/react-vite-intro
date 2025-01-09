
import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import TeachingSection from './components/TeachingSection'
import DifferensesSection from './components/DifferensesSection'
import IntroSection from './components/introSection'
import TabsSection from './components/TabsSection'
import FeedbackSection from './components/FeedbackSection'

function App() {
  const [tab, setTab] = useState('feedback')

  return (
    <>
      <Header />
      <main>
        <IntroSection />
        <TabsSection active={tab} onChange={(current) => setTab(current)} />

        {tab === 'main' && (
          <>
            <TeachingSection />
            <DifferensesSection />
          </>
        )}

        {tab === 'feedback' && <FeedbackSection />}


      </main>

    </>
  )
}

export default App
