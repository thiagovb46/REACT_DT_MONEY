import { Container } from "./style";
import incomeimg from "../../assets/income.svg"
import outcomeimg from "../../assets/outcome.svg"
import totalimg from "../../assets/total.svg"
import { useTransactions } from '../../hooks/useTransactions';

export function Summary ()
{
    const {transactions} = useTransactions();

    // const totalDeposits = transactions.reduce((acc,transaction) => {
    //     if(transaction.type === 'deposit'){
    //         return transaction.ammount+acc;
    //     } 
    //      return acc;
    // },0)

    const summary = transactions.reduce((acc, transaction)=>{
        if(transaction.type==='deposit'){
            acc.deposits += transaction.ammount;
            acc.total += transaction.ammount;
        }
            
        else{
            acc.withdraws += transaction.ammount;
            acc.total -= transaction.ammount;

        }
        return acc;
            
    },
    {
        deposits:0,
        withdraws: 0,
        total: 0,
    })

    return (
    
    <Container>
        <div>
            <header>
                <p>Entradas</p>
                <img src={incomeimg} alt=""></img>
            </header>

            <strong>
                { 
                    new Intl.NumberFormat('pt-BR',{ 
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.deposits)
                }
            </strong>
        </div>

        <div>
            <header>
                <p>Saidas</p>
                <img src={outcomeimg} alt=""></img>
            </header>

            <strong>
                { 
                    new Intl.NumberFormat('pt-BR',{ 
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.withdraws)
                }
            </strong>
        </div>

        <div className = "highlight-background">
            <header>
                <p>Total</p>
                <img src={totalimg} alt=""></img>
            </header>

            <strong>
                { 
                    new Intl.NumberFormat('pt-BR',{ 
                        style: 'currency',
                        currency: 'BRL',
                    }).format(summary.total)
                }
            </strong>
        </div>
    </Container>);
    
    
}