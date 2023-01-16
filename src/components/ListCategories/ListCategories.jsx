import { Link } from 'react-router-dom';
import styles from './ListCategories.module.css';

function ListCategories({ type = '' }) {
  return (
    <ul className={styles.navigationList} type={type}>
      <li className={styles.navigationItem} type={type}>
        <Link to="/">
          <span className={styles.itemTitle} type={type}>
            Home
          </span>
        </Link>
      </li>
      <li className={styles.navigationItem} type={type}>
        <Link to="/headphones">
          <img src="./images/shared/desktop/image-headphones.png" alt="" />
          <span className={styles.itemTitle} type={type}>
            Headphones
          </span>
          <span className={styles.itemShop} type={type}>
            Shop
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
          </span>
        </Link>
      </li>
      <li className={styles.navigationItem} type={type}>
        <Link to="/speakers">
          <img src="./images/shared/desktop/image-speakers.png" alt="" />
          <span className={styles.itemTitle} type={type}>
            Speakers
          </span>
          <span className={styles.itemShop} type={type}>
            Shop
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
          </span>
        </Link>
      </li>
      <li className={styles.navigationItem} type={type}>
        <Link to="/earphones">
          <img src="./images/shared/desktop/image-earphones.png" alt="" />
          <span className={styles.itemTitle} type={type}>
            Earphones
          </span>
          <span className={styles.itemShop} type={type}>
            Shop
            <svg width="8" height="12" xmlns="http://www.w3.org/2000/svg"><path d="M1.322 1l5 5-5 5" stroke="#D87D4A" strokeWidth="2" fill="none" fillRule="evenodd" /></svg>
          </span>
        </Link>
      </li>
    </ul>
  );
}

export default ListCategories;
