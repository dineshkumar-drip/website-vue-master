export default function typerHelper(typedChar, typedCharIndex, self) {
  if (!document.getElementById('typewriter')) return
  if (typedCharIndex === 0) {
    self.needLineBreak = true
    self.countWord = 0
    document.getElementById('typewriter').firstChild.innerHTML = ''
  }
  var lessNodes = document.getElementById('typewriter').lastChild.childNodes
  if (typedChar === ' ' || lessNodes.length === 1) {
    var finalNodes = document.getElementById('typewriter').firstChild
    var listNodes = finalNodes.childNodes

    var newNode = document.createElement('span')

    var x = self.countWord
    var countNodes = listNodes.length
    while (x < countNodes) {
      if (listNodes[self.countWord].innerHTML != ' ')
        newNode.insertAdjacentElement('beforeend', listNodes[self.countWord])
      else self.countWord++
      x++
    }
    newNode.className = 'text-nowrap'
    finalNodes.insertAdjacentElement('beforeend', newNode)

    self.countWord++
  }
}
