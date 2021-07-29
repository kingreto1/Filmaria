import { useEffect, useState } from 'react';
import {} from 'react-router-dom';
import { toast } from 'react-toastify';
import { DetailButton, RemoveButton } from '../../styles'
import './salvos.css';

export default function Salvo() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        let myList = localStorage.getItem('filmes');
        setFilmes(JSON.parse(myList) || []);

    }, []);

    function remove(id) {
        let myList = JSON.parse(localStorage.getItem('filmes'));

        let newList = myList.filter(filme => filme.id !== id);

        localStorage.setItem('filmes', JSON.stringify(newList));
        setFilmes(newList);
        toast.error('Filme excluído com sucesso!');
    }

    return(
        <div className="container">
            <h1 className="title">Filmes Favoritos</h1>

            {filmes.length === 0 && <span className="semFilmes">Você não possui filmes salvos...</span>}

            <ul className="list">
                {filmes.map((filme) => {
                    return(
                        <li className="itemList" key={filme.id}>
                            <h2 className="item">{filme.nome} -</h2>
                            <div>
                                <DetailButton href={`/filme/${filme.id}`}>Ver Detalhes</DetailButton>

                                <RemoveButton onClick={() => remove(filme.id)}>Remover</RemoveButton>
                            </div>
                        </li>
                    )
                })}
            </ul>
        </div>
    )
}
