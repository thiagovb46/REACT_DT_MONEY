import Modal from 'react-modal';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import { Container, TransactionTypeContainer} from './styles';
import  closeImg from '../../assets/close.svg';
interface NewTransactionModalProps{
    isOpen:boolean;
    onRequestClose: () => void;
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps)
{
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
                   
                    <button type="button"> 
                        <img src={incomeImg} alt='Entrada'></img>
                        <span>Entrada</span>
                    </button>
                    
                    <button type="button"> 
                        <img src={outcomeImg} alt='Saida'></img>
                        <span>Saída</span>
                    </button>
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