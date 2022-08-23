import { FC } from 'react'
import cn from 'classnames'

import { Header, Footer } from '@common/components/containers'

import { MainLayoutProps } from './interfaces'

import styles from './styles.module.scss'

const MainLayout: FC<MainLayoutProps> = ({
    className,
    children,
    ...props
}) => {
    return (
        <section
            className={cn(styles.container, className)}
            {...props}
        >
            <Header />
            <div className={styles.body}>
                {children}
            </div>
            <Footer />
        </section>
    )
}

export default MainLayout
