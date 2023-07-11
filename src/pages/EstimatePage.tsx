import { useContext } from "react";
import { Estimate, EstimateCtx } from "../App";
import EstimateForm from "../components/EstimateForm";
import { EstimateService } from "../services/estimateService";

const EstimatePage = () => {
  const estimateSrv = useContext<EstimateService>(EstimateCtx);

  function handleEstimateCreate(data: Estimate) {
    console.log(data);
    estimateSrv.createEstimate(data);
  }

  return (
    <div>
      <h3>creer un nouveau devis</h3>
      <EstimateForm onEstimateCreate={handleEstimateCreate} />
    </div>
  );
};

export default EstimatePage;
