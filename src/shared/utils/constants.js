export const INITIAL_TEXT = `
# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

function anotherExample(firstLine, lastLine) {
  if (firstLine == '\`\`\`' && lastLine == '\`\`\`') {
    return multiLineCode;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
> Block Quotes!

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!
1. And last but not least, let's not forget embedded images:

![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)
`

export const keyMap = [
  { id: 'clear', number: 'AC', handler: 'clearHandler' },
  { id: 'divide', number: '/', handler: 'operatorHandler' },
  { id: 'multiply', number: '*', handler: 'operatorHandler' },
  { id: 'seven', number: '7', handler: 'operandHandler' },
  { id: 'eigth', number: '8', handler: 'operandHandler' },
  { id: 'nine', number: '9', handler: 'operandHandler' },
  { id: 'subtract', number: '-', handler: 'operatorHandler' },
  { id: 'four', number: '4', handler: 'operandHandler' },
  { id: 'five', number: '5', handler: 'operandHandler' },
  { id: 'six', number: '6', handler: 'operandHandler' },
  { id: 'add', number: '+', handler: 'operatorHandler' },
  { id: 'one', number: '1', handler: 'operandHandler' },
  { id: 'two', number: '2', handler: 'operandHandler' },
  { id: 'three', number: '3', handler: 'operandHandler' },
  { id: 'equals', number: '=', handler: 'operateHandler' },
  { id: 'zero', number: '0', handler: 'operandHandler' },
  { id: 'decimal', number: '.', handler: 'operandHandler' }
]
