import { useForm, useFieldArray } from "react-hook-form";
import { Estimate } from "../App";
import styles from "./EstimateForm.module.css";

type estimateFormProps = {
  onEstimateCreate: (data: Estimate) => void;
};

export default function EstimateForm({ onEstimateCreate }: estimateFormProps) {
  //! Form Submit //
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<Estimate>();
  function onSubmit(data: Estimate) {
    onEstimateCreate(data)
  }

  //! Hooks UseFieldArray //
  const { fields, append, remove } = useFieldArray({
    name: "tasks",
    control,
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
      <label htmlFor="estimateNumber" className={styles.formlabel}>
        Estimate Number
      </label>
      <input
        className={styles.forminput}
        type="text"
        placeholder="Estimate Number"
        id="estimateNumber"
        {...register("estimateNumber", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.estimateNumber && "please, enter an estimate number"}
      </span>
      <label className={styles.formlabel} htmlFor="estimateDate">
        Estimate Date
      </label>
      <input
        className={styles.forminput}
        type="date"
        id="estimateDate"
        {...register("estimateDate", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.estimateDate && "please, enter an estimate date"}
      </span>
      <label className={styles.formlabel} htmlFor="payementDate">
        Payement Date
      </label>
      <input
        className={styles.forminput}
        type="date"
        id="payementDate"
        {...register("payementDate", { required: true })}
      />
      <span className={styles.formerror}>
        {errors.payementDate && "please, enter a payement date"}
      </span>

      {/* //! Formulaire ajout // */}

      {fields.map((field, index) => {
        return (
          <div key={field.id}>
            <section className={styles.task}>
              <div>
                <label htmlFor="taskReference" className={styles.formlabel}>
                  item reference
                </label>
                <input
                  className={styles.forminput}
                  type="text"
                  id="taskReference"
                  {...register(`tasks.${index}.reference` as const, {
                    required: true,
                  })}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.reference &&
                    "please, enter a reference"}
                </div>
              </div>
              <div>
                <label htmlFor="taskDescription" className={styles.formlabel}>
                  item description
                </label>
                <input
                  type="text"
                  id="taskDescription"
                  {...register(`tasks.${index}.description` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.description &&
                    "please, enter a description"}
                </div>
              </div>
              <div>
                <label htmlFor="taskQuantity" className={styles.formlabel}>
                  Quantity
                </label>
                <input
                  type="text"
                  id="taskQuantity"
                  {...register(`tasks.${index}.quantity` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.quantity &&
                    "please, enter a Quantity"}
                </div>
              </div>
              <div>
                <label htmlFor="taskUnitPrice" className={styles.formlabel}>
                  Unit price
                </label>
                <input
                  type="text"
                  id="taskUnitPrice"
                  {...register(`tasks.${index}.unitPrice` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.unitPrice &&
                    "please, enter a UnitPrice"}
                </div>
              </div>
              <div>
                <label htmlFor="taskVat" className={styles.formlabel}>
                  Vat
                </label>
                <input
                  type="text"
                  id="taskVat"
                  {...register(`tasks.${index}.vat` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.vat && "please, enter a Vat"}
                </div>
              </div>
              <div>
                <label htmlFor="taskDeposit" className={styles.formlabel}>
                  Deposit
                </label>
                <input
                  type="text"
                  id="taskDeposit"
                  {...register(`tasks.${index}.deposit` as const, {
                    required: true,
                  })}
                  className={styles.forminput}
                />
                <div className={styles.formerror}>
                  {errors?.tasks?.[index]?.deposit && "please, enter a Deposit"}
                </div>
              </div>

              <button
                className={styles.delete}
                type="button"
                onClick={() => {
                  remove(index);
                }}
              >
                Delete
              </button>
            </section>
          </div>
        );
      })}
      <button
        className={styles.formbutton}
        type="button"
        onClick={() =>
          append({
            reference: "123456",
            description: "description here",
            quantity: 1,
            unitPrice: 100,
            vat: 20,
            deposit: 0,
          })
        }
      >
        add item
      </button>
      <input
        className={styles.formbutton}
        type="submit"
        value="create estimate"
      />
    </form>
  );
}
