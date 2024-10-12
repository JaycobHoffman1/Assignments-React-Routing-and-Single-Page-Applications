import { useParams, useNavigate } from "react-router-dom";
import CharacterDetails from "./character-details";
function CharacterDetailsWrapper() {
    let params = useParams();
    let navigate = useNavigate();
    return <CharacterDetails params={params} navigate={navigate} />
};
export default CharacterDetailsWrapper;