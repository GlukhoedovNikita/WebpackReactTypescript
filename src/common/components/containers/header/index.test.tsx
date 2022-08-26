import { render, screen } from '@testing-library/react'

import Header from './index'

describe('Header', () => {
    it('Header render', () => {
        render(<Header />)
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })
})
