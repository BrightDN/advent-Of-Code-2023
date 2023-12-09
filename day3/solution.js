const answerButtons = document.querySelectorAll("button");
answerButtons[0].addEventListener("click", ()=>solvePuzzle(1));
answerButtons[1].addEventListener("click", ()=>solvePuzzle(2));

function solvePuzzle(part) {
    const givenInput = document.getElementsByTagName("textarea")[0].value.split("\n");
    const dividedByLine = []
    givenInput.forEach(element => dividedByLine.push(element.split("")));
    for (let i = 0; i < dividedByLine.length; i++) {
        for (let j = 0; j < dividedByLine[i].length; j++) {
            if(dividedByLine[i][j].match(/[.]/)) continue
            if(dividedByLine[i][j].match(/\d/)){
                if(!dividedByLine[i][(j-1)].match(/\d/) && j != 0) console.log(dividedByLine[i][(j-1)])
                }
            }
        }
    }


function createResult(dataToShow){
    const createParagraph = document.createElement("p");
    createParagraph.innerHTML = `The answer, based on the given input, is: ${dataToShow}`
    createParagraph.setAttribute("name", "answer");
    if(document.querySelectorAll("[name=answer]").length > 0)document.querySelector("body").removeChild(document.querySelector("[name=answer]"));
    document.querySelector("body").appendChild(createParagraph);
  }