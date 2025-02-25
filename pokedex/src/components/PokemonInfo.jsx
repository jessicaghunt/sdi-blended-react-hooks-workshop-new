function PokemonInfo({pokemon}){
    return(
        <div className = "Pokemon Info">
            <img src={pokemon.sprites.front_default}/>
            <p>{pokemon.id}</p>
            <em><p>{pokemon.name}</p></em>
            <p>Weight: {pokemon.weight} Hectograms 
            <p>Height: {pokemon.height} </p>
            </p>
            {/* <p>{pokemon.types}</p> */}
            {/* pokemon.moves.map() */}
        </div>
    )
}

export default PokemonInfo

{/* id	
The identifier for this resource.

integer
name	
The name for this resource.

string
base_experience	
The base experience gained for defeating this Pokémon.

integer
height	
The height of this Pokémon in decimetres.

integer
is_default	
Set for exactly one Pokémon used as the default for each species.

boolean
order	
Order for sorting. Almost national order, except families are grouped together.

integer
weight	
The weight of this Pokémon in hectograms.

integer
abilities	
A list of abilities this Pokémon could potentially have.

list PokemonAbility
forms	
A list of forms this Pokémon can take on.

list NamedAPIResource (PokemonForm)
game_indices	
A list of game indices relevent to Pokémon item by generation.

list VersionGameIndex
held_items	
A list of items this Pokémon may be holding when encountered.

list PokemonHeldItem
location_area_encounters	
A link to a list of location areas, as well as encounter details pertaining to specific versions.

string
moves	
A list of moves along with learn methods and level details pertaining to specific version groups.

list PokemonMove
past_types	
A list of details showing types this pokémon had in previous generations

list PokemonTypePast
sprites	
A set of sprites used to depict this Pokémon in the game. A visual representation of the various sprites can be found at PokeAPI/sprites

PokemonSprites
cries	
A set of cries used to depict this Pokémon in the game. A visual representation of the various cries can be found at PokeAPI/cries

PokemonCries
species	
The species this Pokémon belongs to.

NamedAPIResource (PokemonSpecies)
stats	
A list of base stat values for this Pokémon.

list PokemonStat
types	
A list of details showing types this Pokémon has.

list PokemonType */}