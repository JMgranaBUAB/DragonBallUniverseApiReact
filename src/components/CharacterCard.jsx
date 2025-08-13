const CharacterCard = ({ character }) => {
    return (
        <div className="character-card">
            <img src={character.image || character.imageUrl} alt={character.name} />
            <h3>{character.name}</h3>
            <p data-label="Ki:">{character.ki || 'Desconocido'}</p>
            <p data-label="Raza:">{character.race || character.specie || 'Desconocida'}</p>
            <p data-label="Género:">{character.gender || 'Desconocido'}</p>
        </div>
    );
};

export default CharacterCard;
