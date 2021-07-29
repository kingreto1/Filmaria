import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Api from '../../services/api'
import './home.css'

export default function Home() {
    const [filmes, setFilmes] = useState([])

    useEffect(() => {

        async function loadFilmes(){
            const response = await Api.get('r-api/?api=filmes/')
            setFilmes(response.data)
        }

        loadFilmes();

    }, []);

    return(
        <div className="container">
            <div className="lista-filmes">
                {filmes.map((filme) => {
                    return(
                        <article className="filmeCard" key={filme.id}>
                            <strong>{filme.nome}</strong>
                            <Link className='img' to={`/filme/${filme.id}`}><img src={filme.foto} alt={filme.nome}/></Link>
                            <Link className="acesso" to={`/filme/${filme.id}`}>Acessar</Link>
                        </article>
                    )
                })}
            </div>
        </div>
    )

};