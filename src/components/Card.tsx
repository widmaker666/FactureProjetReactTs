import { Estimate } from "../App";
import styles from "./Card.module.css";

type cardProps = {
  data: Estimate;
};

const Card = ({ data }: cardProps) => {
  function calculateSubTotal(quantity: number, unitPrice: number) {
    return (quantity * unitPrice).toFixed(2);
  }
  function calculateTotalWithoutTaxes() {
    const totalBeforeTaxes = data.tasks.reduce((acc, curr) => {
      return (acc += curr.quantity * curr.unitPrice);
    }, 0);
    return totalBeforeTaxes;
  }

  function calculateTaxes() {
    const totalTaxes = data.tasks.reduce((acc, curr) => {
      return (acc += (curr.quantity * curr.unitPrice * curr.vat) / 100);
    }, 0);
    return totalTaxes;
  }

  return (
    <div className={styles.card}>
      <h3>{data.title}</h3>
      <div className={styles.container}>
        <div className={styles.estimateheader}>
          <div>reference</div>
          <div>description</div>
          <div>quantity</div>
          <div>Unit price</div>
          <div>Deposite</div>
          <div>VAT</div>
          <div>Sub-Total</div>
        </div>
        {data.tasks.map((t) => {
          return (
            <div key={t.reference} className={styles.details}>
              <div className={styles.details}>{t.reference}</div>
              <div className={styles.desc}>{t.description}</div>
              <div className={styles.qty}>{t.quantity}</div>
              <div className={styles.uprice}>{t.unitPrice}</div>
              <div className={styles.depo}>{t.deposit}</div>
              <div className={styles.vat}>{t.vat}%</div>
              <div className={styles.subto}>
                {calculateSubTotal(t.quantity, t.unitPrice)}€
              </div>
            </div>
          );
        })}
        <div>
          <div className={styles.total}>
            <div>total(without taxes)</div>
            <div>{calculateTotalWithoutTaxes().toFixed(2)}€</div>
            <div>Total Taxes</div>
            <div>{calculateTaxes().toFixed(2)}€</div>
            <div>Total taxes includes</div>
            <div className={styles.totalwithtaxes}>
              {(calculateTotalWithoutTaxes() + calculateTaxes()).toFixed(2)}€
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
