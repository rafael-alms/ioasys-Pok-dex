import styled from "styled-components";

export const Container = styled.header `
    .barra {
        background-color: #EC0344;
        margin: 0;
        height: 15px;
        width: 100%;
    }
`;

export const Logo = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between; 
    margin-top: 60px;
    margin-left: 305px;
    margin-right: 305px;

    .logo{
        display: flex;
        align-items: center;
    }

    img {
        width: 28.65px;
        height: 22.28px;
    }

    p {
        color: #EC0344;
        font-size: 28px;
        font-weight: bold;
        line-height: 32px;
        margin-left: 11.85px;
        white-space: nowrap;
    }
`;

export const Switch = styled.div `
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-top: -195px;
    margin-right: 710px;

    .switch {
        position: absolute;
        visibility: hidden;
    }

    .switch + label {
        display: block;
        position: relative;
        cursor: pointer;
        outline: none;
        user-select: none;
    }

    .switch--shadow + label {
        width: 39px;
        height: 27px;
        background-color: transparent;
        border: 1px solid #EC0344;
        box-sizing: border-box;
        border-radius: 40px;
    }

    .switch--shadow + label:before,
    .switch--shadow + label:after {
        display: block;
        position: absolute;
        top: 6px;
        left: 18px;
        content: '';
    }

    .switch--shadow + label:before {
        right: 1px;
        border-radius: 60px;
        transition: all 0.4s;
    }

    .switch--shadow + label:after {
        width: 15px;
        height: 15px;
        background-color: #EC0344;
        border-radius: 100%;
        transition: all 0.4s;
    }

    .switch--shadow:checked + label:before {
        background-color: #EC0344;
    }

    .switch--shadow:checked + label:after {
        background-color: #8D8B92;
        transform: translateX(-15px);
    }
`;