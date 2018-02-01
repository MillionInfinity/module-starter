// Tree DOM interactions

{
  let randomVar = "protected";
  const outputToDOM = () => {
    let myTree = tree.getTreeSpecies();
    document.getElementById("myTree").innerHTML = `I love a good ${myTree} tree`;
  };

  //add method to tree object in mainTree.js
  tree.outputToDOM = outputToDOM;
}

// tree.outputToDOM();

// var tree = (function(originalTree) {
//     let randomVar = "protected";
  
//     originalTree.outputToDOM = () => {
//       let myTree = tree.getTreeSpecies();
//       document.getElementById("myTree").innerHTML = `My fave tree is a ${
//         myTree
//       } tree`;
//     };
  
//     return originalTree;
//   })(tree || {});