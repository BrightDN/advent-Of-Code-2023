const answerButtons = document.querySelectorAll("button");
answerButtons[0].addEventListener("click", ()=>solvePuzzle(1));
answerButtons[1].addEventListener("click", ()=>solvePuzzle(2));

function solvePuzzle(part) {
  const givenInput = document.getElementsByTagName("textarea")[0].value.split("\n");
  const maxValues = [12, 14, 13]; // [red, blue, green]
  const checkUp = [] 
const filteredVals = [redVals = [], blueVals = [], greenVals = []]
givenInput.forEach(el => filteredVals[0].push(el
    .replace(/Game (\d+):|,|(\d+) blue|(\d+) green|red| |^(\D)*(\D)$/g, "")
    .split(/;/)
    )
    )    
givenInput.forEach(el => filteredVals[1].push(el
    .replace(/Game (\d+):|,|(\d+) red|(\d+) green|blue| |^(\D)*(\D)$/g, "")
    .split(/;/)
    )
    )
givenInput.forEach(el => filteredVals[2].push(el
        .replace(/Game (\d+):|,|(\d+) blue|(\d+) red|green| |^(\D)*(\D)$/g, "")
        .split(/;/)
        )
    )
checkUp.push(validate(filteredVals[0], maxValues[0]), validate(filteredVals[1], maxValues[1]), validate(filteredVals[2], maxValues[2]))

  let counter = 0
  if(part == 1){
  for(let i = 0; i < givenInput.length; i++) {
   if(
    !checkUp[0][i].includes("invalid")
    &&!checkUp[1][i].includes("invalid")
    &&!checkUp[2][i].includes("invalid"))counter = counter + (i+1)
    }}


if(part == 2){
    function compareNumbersBigToSmall(a, b){return b-a}
    for(let i = 0; i < givenInput.length; i++) {
        for(let j = 0; j < checkUp.length; j++){
            if(checkUp[j][i].includes("invalid"))checkUp[j][i].pop()
            checkUp[j][i].sort(compareNumbersBigToSmall)  
        }
        counter +=( checkUp[0][i][0] * checkUp[1][i][0] * checkUp[2][i][0])
    }
}   
    createResult(counter)
}

function validate(filteredVals, maxVal){
    for(let i = 0; i < filteredVals.length; i++)
    {
        for(let j = 0; j < filteredVals[i].length; j++)
        {
        if(filteredVals[i][j] > maxVal){
            filteredVals[i].push("invalid")
            }
        }
    }
    return filteredVals
}

function createResult(dataToShow){
    const createParagraph = document.createElement("p");
    createParagraph.innerHTML = `The answer, based on the given input, is: ${dataToShow}`
    createParagraph.setAttribute("name", "answer");
    if(document.querySelectorAll("[name=answer]").length > 0)document.querySelector("body").removeChild(document.querySelector("[name=answer]"));
    document.querySelector("body").appendChild(createParagraph);
  }