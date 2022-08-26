import { render, screen } from '@testing-library/react'

import MainPage from './index'

describe('Main Page', () => {
    it('Main Page render', () => {
        render(<MainPage />)
        const mainPage = screen.getByText(/mainpage/i)
        expect(mainPage).toBeInTheDocument()
    })
})
