import "./styles/index.scss";

const elvenShieldRecipe = {
  leatherStripe: 2,
  ironIngot: 1,
  refinedMoonstone: 2,
};

const elvenGauntletsRecipe = {
  ...elvenShieldRecipe,
  leather: 1,
  refinedMoonstone: 4,
};

console.log(elvenShieldRecipe);
console.log(elvenGauntletsRecipe);
