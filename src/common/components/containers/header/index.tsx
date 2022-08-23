import { FC } from 'react'

import styles from './styles.module.scss'

const Header: FC = () => {
    return (
        <header className={styles.header} data-testid="header">
            Header
        </header>
    )
}

export default Header
