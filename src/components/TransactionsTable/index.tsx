import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { Container } from "./style";

interface Transaction {

    id: number,
    title: string, 
    ammount: number,
    type: string,
    category: string,
    createdAt: string
}

export function TransactionTable()
{

    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    },[])
    
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                         <th>Título</th>
                         <th>Valor</th>
                        <th>Categoria</th>
                        <th>Tipo</th>
                        <th>Data</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                        transactions.map(transaction => (
                            <tr key={transaction.id}>
                                <td>{transaction.title}</td>
                                <td className = {transaction.type}>{new Intl.NumberFormat('pt-BR', {
                                    style:'currency',
                                    currency:'BRL',
                                }).format(transaction.ammount)}</td>
                                <td>{transaction.type}</td>
                                <td>{transaction.category}</td>
                                <td>{transaction.createdAt}</td>
                            </tr>
                        ))
                    }
                </tbody>
            </table>

            </Container>
       
        );
}