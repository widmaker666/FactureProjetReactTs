import { Estimate } from "../../src/App";

export class EstimateService {
  estimateCollection;

  constructor(estimateCollection: Estimate[]) {
    this.estimateCollection = estimateCollection;
  }

  createEstimate(data: Estimate) {
    this.estimateCollection = [data, ...this.estimateCollection];
  }

  readEstimate(): Estimate[] {
    return this.estimateCollection;
  }
}
