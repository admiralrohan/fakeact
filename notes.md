# Note: For my rough work

## Plan

Want to display a simple Counter in HTML
First only one component, append everything into root div
Later will think about composing multiple components

Next plan passing on props
Then reusing the Counter component, initialize with diff initial count

For blog, first without hierarchy, then hierachy, then onclick listeners
For now, no parentless elements, eg. use span for strings. Don't pass without parent.

div
span -> pop
/span -> pop

React fragment: You can only pass one element only
Wrapper component

Also removes spaces(eg. 'div>\n \t\t\t\t\t')
Hierarchy
error: can only compile one element (remove wrapper div inside compile function)
Add margin-right
onClick

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
