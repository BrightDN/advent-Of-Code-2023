const submitBtn = document.getElementsByTagName("button")[0]
submitBtn.addEventListener("click", solvePuzzle)

function solvePuzzle(){
  const textInput = document.getElementsByTagName("textarea")[0].value
  
  showSolution(transformData(textInput))
}

function transformData(dataToTransform){
  return 
}

function showSolution(dataToShow){
  
}
