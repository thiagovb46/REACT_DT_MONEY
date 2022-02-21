import {createContext, ReactNode, useEffect, useState} from 'react'
import { api } from './services/api';

// interface TransactionInput {

//     title: string, 
//     ammount: number,
//     type: string,
//     category: string,
//     createdAt: string

// }

type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>

interface Transaction {

    id: number,
    title: string, 
    ammount: number,
    type: string,
    category: string,
    createdAt: string
}

interface TransactionsProviderProps {
    children: ReactNode;
}

interface TransactionsContextData{
    transactions: Transaction[],
    createTransaction: (transactionInput:TransactionInput) => Promise<void>;
}

export const TransactionsContext = createContext<TransactionsContextData>({} as TransactionsContextData);

export function TransactionsProvider({children}: TransactionsProviderProps){
    
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(()=>{
        api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    },[]);

    async function createTransaction(transactionInput: TransactionInput){
       
        const response =  await api.post('/transactions',{
            ...transactionInput,
            createdAt: new Date()
            
        });
        const {transaction} = response.data;

        setTransactions([...transactions, transaction]);
    }

    return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
            {children}
    </TransactionsContext.Provider>);
}