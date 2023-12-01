const submitBtn = document.getElementsByTagName("button")
submitBtn[0].addEventListener("click", function(){solvePuzzle(1)})
submitBtn[1].addEventListener("click", function(){solvePuzzle(2)})

function solvePuzzle(part){
  const textInput = document.getElementsByTagName("textarea")[0].value 
  showSolution(transformData(textInput, part))
}

function transformData(dataToTransform, part){
  if(part == 2){
const workableData = dataToTransform
.replace(/(oneight)/gi, "oneeight")
.replace(/(twone)/gi, "twoone")
.replace(/(threeight)/gi, "threeeight")
.replace(/(fiveight)/gi, "fiveeight")
.replace(/(sevenine)/gi, "sevennine")
.replace(/(eightwo)/gi, "eighttwo")
.replace(/(eighthree)/gi, "eightthree")
.replace(/(nineight)/gi, "nineeight")
.replace(/(one)/gi, 1)
.replace(/(two)/gi, 2)
.replace(/(three)/gi, 3)
.replace(/(four)/gi, 4)
.replace(/(five)/gi, 5)
.replace(/(six)/gi, 6)
.replace(/(seven)/gi, 7)
.replace(/(eight)/gi, 8)
.replace(/(nine)/gi, 9)

dataToTransform = workableData
  }
  const newArray = []
  let summedUp = 0;
dataToTransform
  .replace(/([a-zA-Z])/g, "")
  .split("\n")
  .forEach(element => newArray.push(`${element.charAt(0)}${element.charAt((element.length-1))}`))
  
  newArray.forEach(element => summedUp += parseInt(element))
  return summedUp
}

function showSolution(dataToShow){
  createResult(dataToShow)
}

function createResult(dataToShow){
  const createParagraph = document.createElement("p");
  createParagraph.innerHTML = `The answer, based on the given input, is: ${dataToShow}`
  createParagraph.setAttribute("name", "answer");
  if(document.querySelectorAll("[name=answer]").length > 0)document.querySelector("body").removeChild(document.querySelector("[name=answer]"));
  document.querySelector("body").appendChild(createParagraph);
}
