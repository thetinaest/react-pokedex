import Container from './container'

const PokemonDetails = (props) => {
    const {
        id,
        name,
        moves,
        sprites,
        base_experience,
        height,
        weight
    } = props.pokemon;

    return(
        <Container className='results'>
            <img 
                alt={name} 
                src={sprites.other['official-artwork'].front_default}height="auto"
                width="100%"
                />
            <h1>{id}: {name}</h1>
            <ul>
                <li>Base Experience: {base_experience}</li>
                <li>Height: {height}</li>
                <li>Weight: {weight}</li>
            </ul>
            <h2>Moves</h2>
            <ul>
                {moves.map(moveObj => (
                <li key={moveObj.move.name}>
                    {moveObj.move.name}
                </li>
                ))}
            </ul>
        </Container>
    )
}

export default PokemonDetails;