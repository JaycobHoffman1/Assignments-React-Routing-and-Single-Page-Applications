import axios from 'axios';
import React, { useEffect, useState } from 'react';
import CharacterDetail from './character-detail';
import { Link } from 'react-router-dom';
const ts = 1;
const publicKey = '4d52fb3fa1ef52af3d6b38218aff5477';
const hash = 'a80ea7d0806646c1f3b6bf37422fc6fd';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
function CharacterList() {
    const [characters, setCharacters] = useState([]);
    const [selectedCharacter, setSelectedCharacter] = useState(null);
    useEffect(() => {
        const fetchCharacters = async () => {
            try {
                const response = await axios.get(apiUrl);
                setCharacters(response.data.data.results);
            } catch (error) {
                console.error('Error fetching characters', error);
            };
        };
        fetchCharacters();
    }, []);
    const handleSelectedCharacter = (character) => {
        setSelectedCharacter(character);
    };
    return (
        <div>
            <ul className="unordered-list">
                {characters.map(character => (
                    <div>
                        <Link to={`/character-details/${character.id}`}>
                            <li className="list-item" key={character.id}>
                                <img className="image" src={`${character.thumbnail.path}.${character.thumbnail.extension}`} alt={character.name}></img>
                                {character.name}
                            </li>
                        </Link>
                        {selectedCharacter && selectedCharacter.name == character.name && <CharacterDetail characterName={selectedCharacter.name}/>}
                    </div>
                ))}
            </ul>
        </div>
    );
};
export default CharacterList;