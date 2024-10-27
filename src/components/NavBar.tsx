type Pokemon = {
	name: string;
	imgSrc?: string;
};

type NavBarProps = {
	pokemonIndex: number;
	setPokemonIndex: (index: number) => void;
	pokemonList: Pokemon[];
};
function NavBarProps({
	pokemonIndex,
	setPokemonIndex,
	pokemonList,
}: NavBarProps) {
	return (
		<div>
			{pokemonIndex > 0 && (
				<button type="button" onClick={() => setPokemonIndex(pokemonIndex - 1)}>
					Précédent
				</button>
			)}
			{pokemonIndex < pokemonList.length - 1 && (
				<button type="button" onClick={() => setPokemonIndex(pokemonIndex + 1)}>
					Suivant
				</button>
			)}
		</div>
	);
}
export default NavBarProps;
