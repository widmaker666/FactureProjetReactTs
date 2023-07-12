import { Link } from "react-router-dom";
import { Estimate } from "../App";
import styles from "./EstimateSummary.module.css";

type EstimateSummaryProps = {
  data: Estimate;
};

export default function EstimateSummary({ data }: EstimateSummaryProps) {
  return (    
      <div className={styles.summary}>
        <h4>{data.title} </h4>
        <div>
          Estimate date:{" "}
          {new Date(data.estimateDate).toLocaleDateString("en-US")}
        </div>
        <Link to={`/my-estimates/${data?.id}`}>see details</Link>
      </div>    
  );
}
