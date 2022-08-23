import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'

export interface MainLayoutProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
    className?: string,
    children: ReactNode,
}
