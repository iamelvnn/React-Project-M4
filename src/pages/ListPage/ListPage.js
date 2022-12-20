import './ListPage.css';
import { useSelector } from 'react-redux';

function ListPage() {
    let card = useSelector(state => state.card)
        return (
            <div className="list-page">
                <h1 className="list-page__title">Мой список</h1>
                <ul>
                    {card.map((item) => {
                        return (
                            <li key={item.imdbID}>
                                <a target="_blank" href={`https://www.imdb.com/title/${item.imdbID}/` }>{item.Title} ({item.Year})</a>
                            </li>
                        );
                    })}
                </ul>
            </div>
        );
                }
 
export default ListPage;