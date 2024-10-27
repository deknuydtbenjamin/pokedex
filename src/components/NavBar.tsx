type Pokemon = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};
function NavBar({ setPokemonIndex, pokemonList }: NavBarProps) {
	return (
		<div>
			{pokemonList.map((pokemon, pokemonIndex) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => setPokemonIndex(pokemonIndex)}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}
export default NavBar;
