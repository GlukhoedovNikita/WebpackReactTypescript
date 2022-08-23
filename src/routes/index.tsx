import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MainPage } from '@pages/index'

import '@styles/global.scss'

const App: FC = () => {
    return (
        <Routes>
            <Route path="/" element={<MainPage />} />
        </Routes>
    )
}

export default App
