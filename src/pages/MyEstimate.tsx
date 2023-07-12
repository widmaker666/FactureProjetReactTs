import { useContext } from "react";
import { EstimateCtx } from "../App";
import { EstimateService } from "../services/estimateService";
import Card from "../components/Card";
import PDFprinter from "../services/PDFprinter";

export default function MyEstimates() {
  const estimateSrv = useContext<EstimateService>(EstimateCtx);
  const estimates = estimateSrv.readEstimate();

  return (
    <>
      <h3>All my estimates</h3>
      <PDFprinter>
        <div>
          {estimates.map((est) => (
            <Card data={est} key={est.id} />
          ))}
        </div>
      </PDFprinter>
    </>
  );
}
