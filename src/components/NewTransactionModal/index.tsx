import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, RadioBox, TransactionTypeContainer} from './styles';
import  closeImg from '../../assets/close.svg';
import { useState } from 'react';

interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps)
{
    
    const [type, setType]  = useState('deposit');
    return (
         
        <Modal isOpen= {isOpen} onRequestClose = {onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
                <button type = "button" 
                    onClick={onRequestClose} 
                    className='react-modal-close'>
                    <img 
                        src = {closeImg} 
                        alt ="Fechar Modal"
                    > 
                    </img>
                </button>
                
            <Container>
                <h2>Cadastrar Transação</h2>
                <input 
                    placeholder='Titulo'
                />

                <input 
                    type="number"
                    placeholder="Valor"
                />
                <TransactionTypeContainer>
                   
                    <RadioBox  
                        onClick={()=>{setType('deposit')}}
                    > 
                        <img src={incomeImg} alt='Entrada'></img>
                        <span>Entrada</span>
                    </RadioBox>
                    
                    <RadioBox  
                        onClick={()=>{setType('withdraw')}} 
                    > 
                        <img src={outcomeImg} alt='Saida'></img>
                        <span>Saída</span>
                    </RadioBox>
                </TransactionTypeContainer>

                <input 
                    placeholder = "Categoria"
                />

                <button
                    type = "submit"
                >
                    Cadastrar
                </button>  
            </Container>
     </Modal>
);
}