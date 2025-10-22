import {useState} from "react";

import "./imcCalc.css"
import Button from './button'

const ImcCalc = ({ calcImc }) => {
    const [height, setHeight] = useState("");
    const [weight, setWeight] = useState("");

    const clearForm = (e) => {
        e.preventDefault();
        setHeight("");
        setWeight("");
    }

    const validDigito = (text) => {
        return text.replace(/[^0-9,]/g, "")
    }

    const handleHeightChange = (e) => {
        const updatedValue = validDigito(e.target.value)

        setHeight(updatedValue);
    }

    const handleWeightChange = (e) => {
        const updatedValue = validDigito(e.target.value)

        setWeight(updatedValue);
    }

  return <div id="calc-container">
    <h2>Calculadora de IMC</h2>
    <form id="imc-form">
        <div className="form-inputs">
            <div className="form-control">
                <label htmlFor="height">Altura:</label>
                <input type="text" name="height" id="height" placeholder="exemplo 1,75" onChange={(e) => handleHeightChange(e)} value={height}/>
            </div>
            <div className="form-control">
                <label htmlFor="weight">Peso:</label>
                <input type="text" name="weight" id="weight" placeholder="exemplo 70,5" onChange={(e) => handleWeightChange(e)} value={weight}/>
            </div>
        </div>
        <div className="action-control">
            <Button id="calc-btn" action={(e) => calcImc(e, height, weight)}>Calcular</Button>
            <Button id="clear-btn" action={clearForm}>Limpar</Button>
        </div>
    </form>
    </div>

}

export default ImcCalc;