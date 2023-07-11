import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Estimate from "./pages/EstimatePage";
import Receipt from "./pages/Receipt";
import Pricing from "./pages/Pricing";
import { EstimateService } from './services/estimateService';
import { createContext } from "react";
import MyEstimate from "./pages/MyEstimate";

export type Task = {
  reference: string
  description: string
  quantity: number
  unitPrice: number
  vat: number
  deposit: number
}

export type Estimate = {
  id?: string
  estimateNumber: string
  estimateDate: Date
  payementDate: Date
  title: string
  tasks: Task[]
}

const estimateService = new EstimateService([])
export const EstimateCtx = createContext(estimateService)

const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new-receipt" element={<Receipt />} />
        <Route path="/new-estimate" element={<Estimate />} />
        <Route path="/my-estimates" element={<MyEstimate />} />
        <Route path="/pricing" element={<Pricing />} />
      </Routes>
    </>
  );
};

export default App;
