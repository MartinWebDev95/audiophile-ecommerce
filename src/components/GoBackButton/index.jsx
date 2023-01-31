import { useNavigate } from 'react-router-dom';
import styles from './GoBackButton.module.css';

function GoBackButton() {
  const navigate = useNavigate();

  return (
    <button
      type="button"
      className={styles.buttonGoBack}
      onClick={() => navigate(-1)}
    >
      Go Back
    </button>
  );
}

export default GoBackButton;
