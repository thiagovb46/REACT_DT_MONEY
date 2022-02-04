import { Container } from "./style";
import incomeimg from "../../assets/income.svg"
import outcomeimg from "../../assets/outcome.svg"
import totalimg from "../../assets/total.svg"

export function Summary ()
{
    return (
    
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeimg} alt=""></img>
            </header>
            <strong>R$1000,00</strong>
        </div>

        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeimg} alt=""></img>
            </header>
            <strong>R$1000,00</strong>
        </div>

        <div className = "highlight-background">
            <header>
                <p>Total</p>
                <img src={totalimg} alt=""></img>
            </header>
            <strong>R$ - 1000,00</strong>
        </div>
    </Container>);
    
    
}