import { NavLink } from 'react-router-dom';
import styles from './ListCategories.module.css';

function ListCategories({ type = '' }) {
  return (
    <ul className={styles.navigationList} type={type}>
      <li className={styles.navigationItem} type={type}>
        <NavLink to="/">
          {({ isActive }) => (
            <span className={`${styles.itemTitle} ${isActive ? styles.linkActive : ''}`} type={type}>
              Home
            </span>
          )}
        </NavLink>
      </li>
      <li className={styles.navigationItem} type={type}>
        <NavLink to="/headphones">
          {({ isActive }) => (
            <>
              <img src="./images/shared/desktop/image-headphones.png" alt="" />
              <span className={`${styles.itemTitle} ${isActive ? styles.linkActive : ''}`} type={type}>
                Headphones
              </span>
              <span className={styles.itemShop} type={type}>
                Shop
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li className={styles.navigationItem} type={type}>
        <NavLink to="/speakers">
          {({ isActive }) => (
            <>
              <img src="./images/shared/desktop/image-speakers.png" alt="" />
              <span className={`${styles.itemTitle} ${isActive ? styles.linkActive : ''}`} type={type}>
                Speakers
              </span>
              <span className={styles.itemShop} type={type}>
                Shop
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
              </span>
            </>
          )}
        </NavLink>
      </li>
      <li className={styles.navigationItem} type={type}>
        <NavLink to="/earphones">
          {({ isActive }) => (
            <>
              <img src="./images/shared/desktop/image-earphones.png" alt="" />
              <span className={`${styles.itemTitle} ${isActive ? styles.linkActive : ''}`} type={type}>
                Earphones
              </span>
              <span className={styles.itemShop} type={type}>
                Shop
                <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
              </span>
            </>
          )}
        </NavLink>
      </li>
    </ul>
  );
}

export default ListCategories;
