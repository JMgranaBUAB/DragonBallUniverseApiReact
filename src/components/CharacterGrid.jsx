import { useState, useEffect } from 'react';
import axios from 'axios';
import CharacterCard from './CharacterCard';

const CharacterGrid = () => {
    const [characters, setCharacters] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get('https://dragonball-api.com/api/characters?page=1&limit=100', {
                    headers: {
                        'Authorization': 'Bearer your_access_token'
                    }
                });
                if (response.data && Array.isArray(response.data.items)) {
                    console.log('Respuesta de la API:', response.data);
                    setCharacters(response.data.items);
                } else {
                    setCharacters([]);
                }
                setLoading(false);
            } catch (err) {
                console.error('Error detallado:', err);
                setError('Error al cargar los personajes. Por favor, verifica tu token de acceso.');
                setLoading(false);
            }
        };

        fetchCharacters();
    }, []);

    if (loading) return <div className="loading">Cargando personajes...</div>;
    if (error) return <div className="error-message">{error}</div>;

    return (
        <div className="character-grid">
            {characters && characters.length > 0 ? (
                characters.map((character) => (
                    <CharacterCard key={character.id} character={character} />
                ))
            ) : (
                <div className="no-results">No se encontraron personajes</div>
            )}
        </div>
    );
};

export default CharacterGrid;
