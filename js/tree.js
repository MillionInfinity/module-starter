// example one
// props of tree are still exposed
// let tree = {
//   height: 10,
//   species: "fir",
//   addStuffToTree: (color, smell) => {
//     tree.color = color;
//     tree.smell = smell;
//   }
// };
// console.log("global from other file", outside);

// We want a public AND a private interface for our modules
// Tree with block scope


//// example two
let tree;
// var tree;
//make var to add more files and methods

{
  let height = 10;
  let species = "maple";

  const getHeight = () => {
    return height;
  };

  const getTreeSpecies = () => species;
//same as
//   const getTreeSpecies = () => {
//       return species;
//   }

  const growTree = (inches) => {
    height = height + inches;
  };

  tree = { getHeight, growTree, getTreeSpecies };
  //tree has been defined outside. now attach private methods to it
}