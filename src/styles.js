import styled from 'styled-components';

// filme.css
export const FilmContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 650px;
`;

export const Films = styled.article`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
`;

export const FilmTitle = styled.strong`
    font-size: 1.5rem;
    font-style: italic;

    color: #3d3d3d;
    
    margin: 2rem 0 1rem 0;
`;

export const FilmImg = styled.img`
    width: 100%;
    border-radius: 10px;
`;

export const Sinopse = styled.h2`
    font-size: 1rem;

    color: #3d3d3d;

    margin: 1rem 0;    
`;

export const SinopseContent = styled.p`
    font-size: 0.9rem;
`;

export const FilmButtons = styled.div`
    margin: 1rem;
`;

export const SaveButton = styled.a`
    background-color: #f0f0f0;
    color: #5d5d5d;

    padding: .4rem;
    margin-right: .5rem;

    font-size: 1rem;
    font-weight: 700;

    transition: all .5s;

    cursor: pointer;

    &:hover {
        background-color: brown;
        color: #f0f0f0;
    }
`;

export const TrailerButton = styled.a`
    background-color: #f0f0f0;
    color: #5d5d5d;

    padding: .4rem;
    margin-right: .5rem;

    font-weight: 600;

    transition: all .5s;

    cursor: pointer;

    &:hover {
        background-color: brown;
        color: #f0f0f0;
    }
`;

export const RemoveButton = styled.button`
background-color: #f0f0f0;
color: #5d5d5d;

padding: .4rem;
margin-right: .5rem;

transition: all .5s;

cursor: pointer;

font-size: 1rem;
font-weight: bold;
width: 100px;

&:hover {
    background-color: brown;
    color: #f0f0f0;
}
`;

export const DetailButton = styled.a`
background-color: #f0f0f0;
color: #5d5d5d;

padding: .4rem;
margin-right: .5rem;

font-weight: 600;

transition: all .5s;

cursor: pointer;

&:hover {
    background-color: brown;
    color: #f0f0f0;
}
`;








