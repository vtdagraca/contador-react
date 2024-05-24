import { useState } from "react"
import './index.css'

export default function App() {

let [numero, setNumero] = useState(0)

function aumentar() {
  setNumero (numero + 1)
}
function diminuir() {
  setNumero (numero - 1)

}
  return <section>
    <div class="contador">
      <h1>Contador</h1>
      <h3>em react</h3>
    </div>
    <div class="numero">
      <p>{numero}</p>
    </div>
    <div class="botao">
      <button id="um" onClick={diminuir}>-</button>
      <button id="dois" onClick={aumentar}>+</button>
    </div>
  </section>
 }
