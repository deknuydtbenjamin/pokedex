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
	const handleClick = (index: number) => {
		setPokemonIndex(index);
		if (pokemonList[index].name === "pikachu") {
			alert("pika pikachu !!!");
		}
	};
	return (
		<div>
			{pokemonList.map((pokemon, pokemonIndex) => (
				<button
					type="button"
					key={pokemon.name}
					onClick={() => handleClick(pokemonIndex)}
				>
					{pokemon.name}
				</button>
			))}
		</div>
	);
}
export default NavBar;
