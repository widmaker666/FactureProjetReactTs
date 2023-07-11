import { EstimateCtx } from "../App";
import { useContext} from "react"
import { EstimateService } from "../services/estimateService";

const MyEstimate = () => {

    const estimateSrv = useContext<EstimateService>(EstimateCtx)
    const estimates = estimateSrv.readEstimate()

    return (
        <>
            <h3>all my estimates</h3>
            <div>lister les estimates</div>
            {JSON.stringify(estimates, null, 2)}
        </>
    );
};

export default MyEstimate;