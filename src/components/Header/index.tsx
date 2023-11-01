import SearchBar from '../SearchBar'
import styles from './styles.module.sass'

const Header = () => {

    return (
        <div className={styles['header-container']}>
            <div className={styles['header-wrapper']}>
                <div className={styles['header-logo']}>
                    LOGO
                </div>
                <SearchBar />
                <div className={styles['header-profile-wrapper']}>
                    profile
                </div>
            </div>
        </div>
    )
}

export default Header