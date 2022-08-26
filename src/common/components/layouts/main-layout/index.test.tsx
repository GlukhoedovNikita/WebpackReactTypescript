import { render, screen } from '@testing-library/react'

import MainLayout from './index'

describe('Main Layout', () => {
    beforeEach(() => {
        render(
            <MainLayout>
                Body
            </MainLayout>
        )
    })

    it('Header render', () => {
        const header = screen.getByTestId('header')
        expect(header).toBeInTheDocument()
    })

    it('Footer render', () => {
        const footer = screen.getByTestId('footer')
        expect(footer).toBeInTheDocument()
    })
})
