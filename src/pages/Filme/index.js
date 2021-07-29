import { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Api from '../../services/api';
import { toast } from 'react-toastify';
import { FilmContainer, Films, FilmTitle, FilmImg, Sinopse, SinopseContent, FilmButtons, SaveButton, TrailerButton } from '../../styles'

export default function Filme() {

    const { id } = useParams()

    const [filmes, setFilmes] = useState([])
    const [loading, setLoading] = useState(true)
    const history = useHistory()

    useEffect(() => {

        async function loadFilmes(){
            const response = await Api.get(`r-api/?api=filmes/${id}`)

            if(response.data.length === 0){
                setLoading(false);
                history.replace('/');
                return;
            }

            setFilmes(response.data)
            setLoading(false)
        }

        loadFilmes();

        return () => {
            
        }

    }, [id, history]);

    function saveFilm() {
        const myList = localStorage.getItem('filmes');

        let savedFilms = JSON.parse(myList) || [];

        const hasFilms = savedFilms.some((filmeSalvo) => filmeSalvo.id === filmes.id)

        if(hasFilms){
            toast.info('Você já possui esse filme salvo.');
            return;
        }

        savedFilms.push(filmes);
        localStorage.setItem('filmes', JSON.stringify(savedFilms));
        toast.success('Filme salvo com sucesso!')
    }

    if(loading){
        return(
            <div Style="margin-top: 2rem;">
                <h1>Carregando seu filme...</h1>
            </div>
        )
    }

    return(
        <FilmContainer>
            <div>
                <Films key={filmes.id}>
                    <FilmTitle>{filmes.nome}</FilmTitle>
                    <FilmImg src={filmes.foto} alt={filmes.nome}/>
                    <Sinopse>Sinopse</Sinopse>
                    <SinopseContent>{filmes.sinopse}</SinopseContent>
                    <FilmButtons>
                        <SaveButton onClick={saveFilm}>Salvar</SaveButton>
                        <TrailerButton href={`https://www.youtube.com/results?search_query=${filmes.nome}+trailer`} target="_blank">Trailer</TrailerButton>
                    </FilmButtons>
                </Films>
            </div>
        </FilmContainer>
    )

};