import styled from 'styled-components';

export const Container = styled.div `
    background-image: url(${ props => props.background });
    background-position: center; /* Center the image */
    background-repeat: repeat; /* Do not repeat the image */
    background-size: cover; /* Resize the background image to cover the entire container */
    height: auto;
    min-height: 100vh;
    width: 100%;
`