# Note: For my rough work

## Requirements

Want to display a simple Counter in HTML
First only one component, append everything into root div
Later will think about composing multiple components

### Starting limitations:

- No parentless elements, eg. use span for strings. Don't pass without parent
- No self-closing tags yet eg. img

### Plans:

- JSX without hierarchy (DONE)
- Remove wrapper div inside compile function (DONE)
- Also removes spaces(eg. 'div>\n \t\t\t\t\t') - use trim() (DONE)
- Add hierachy (DOM childs) (DONE)
- Bug `</p>a` (Loose element after closing tag in same line)
- Pass on initialCount prop
- Reuse the Counter component, initialize with diff initial count
- Add onclick listeners
- If tagName starts with caps, then call the function. Else it's HTML DOM tag.
- Bug : You can only pass one element only to ReactElement (Must use wrapper component)
- Add margin-right (Inline styles)
- React fragment (Dummy container component)

## Rough work

div
span -> pop
/span -> pop

1: "div>"
2: "span>Hi"
3: "/span>"
4: "button>Click me"
5: "/button>"
6: "/div>"

currP = root
1: "div>" currP = root
2: "span>Hi" currP = div
3: "/span>" currP = div
4: "button>Click me" currP = div
5: "/button>" currP = div
6: "/div>" currP = root
currP = root

Push div opening
Push span opening
Push span closing
Pop span closing -> Pop span opening -> Create span element
Push button opening
Push button closing
Pop button closing -> Pop button opening -> Create button element
Push div closing
Pop div closing -> Pop div opening -> Create div element -> append span to div -> append button to div
Append div to root

Alternate solution:
Push div element
Push span element
Pop span -> Create span element
Push button
Pop button -> Create button element
Pop div -> Create div element -> append span -> append button

Where can I keep reference to these childs?
