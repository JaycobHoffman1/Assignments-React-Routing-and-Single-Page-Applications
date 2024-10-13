import { useParams, useNavigate } from "react-router-dom";
import CharacterDetail from "./character-detail";
function CharacterDetailsWrapper() {
    let params = useParams();
    const {id} = params;
    console.log(id);
    let navigate = useNavigate();
    return <CharacterDetail characterID={id} />
};
export default CharacterDetailsWrapper;