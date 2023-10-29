
import axios from 'axios';
import { useState, useEffect } from 'react';
import Book from '../Book/Book';

export default function BookList(){

    const [livros, setLivros] = useState([])

    useEffect(() => {
      axios.get('http://localhost:3000/items')
        .then(response => {
          setLivros(response.data);
        })
        .catch(error => {
          console.error('Erro ao buscar os livros:', error);
        });
    }, []);

    return (
        <div className='books'>
          {livros.map((item) => {
            return(
              <ul key={item.id}>
                <Book title={item.titulo} autor={item.autor} img={item.capa} preco={item.preço.toString()} editora={item.editora} id={item.id} />
              </ul>
            )
          })}
        </div>
      );
}