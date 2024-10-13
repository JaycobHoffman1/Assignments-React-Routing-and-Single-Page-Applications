import axios from 'axios';
import React, { useEffect, useState } from 'react';
const ts = 1;
const publicKey = '0d4e958ce6713eb63a3561d0cb643646';
const hash = '3579dd3f63df9edc785414bdc554c1ce';
const apiUrl = `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}`;
function CharacterDetail({ characterID }) {
    const [characterDetails, setCharacterDetails] = useState(null);
    useEffect(() => {
        const fetchCharacterDetails = async () => {
            try {
                const response = await axios.get(`${apiUrl}&id=${characterID}`);
                console.log('API response: ', response.data)
                setCharacterDetails(response.data.data.results[0]);
                console.log(characterDetails);
            } catch (error) {
                console.error('Error fetching characters', error);
            };
        };
        fetchCharacterDetails();
    }, [characterID]);
    return (
        <div>
            <ul>
                { characterDetails && (
                    <><li className="character-list-item">Name: {characterDetails.name}</li><li className="character-list-item">Description: {characterDetails.description || 'No description available.'}</li></>
                )
                }
            </ul>
        </div>
    );
};
export default CharacterDetail;