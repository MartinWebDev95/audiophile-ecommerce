import styles from './QuantityInput.module.css';

function QuantityInput({ handleIncrement, handleDecrement, quantity }) {
  return (
    <div className={styles.containerQuantityInput}>
      <button type="button" onClick={handleIncrement}>
        +
      </button>

      <input
        type="number"
        id="quantity"
        name="quantity"
        value={quantity}
        readOnly
      />

      <button type="button" onClick={handleDecrement}>
        -
      </button>
    </div>
  );
}

export default QuantityInput;
