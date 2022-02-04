import styled from "styled-components";

export const Container = styled.header `
    background-color: var(--blue);

`
export const Content = styled.div `
    max-width: 1120px;
    margin:0 auto;
    padding: 2rem 1rem 12rem;// 1rem = 1 fonte padrão do root
    display: flex;
    align-items:center; //alinhamento vertical da box
    justify-content: space-between;
    button
    {
        color: #fff;
        font-size: 1rem;
        background: var(--blue-light);
        border: 0; //removes the pattern border of element
        padding: 0 2rem;
        border-radius: 0.25rem;
        height: 3rem;
        
        transition: filter 0.2s; //Make a transition aways the button has is changed

        &:hover 
        {
            filter:brightness(0.9);
        }
    }
`