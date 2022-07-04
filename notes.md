# Note: For my rough work

## Requirements

Want to display a simple Counter in HTML
First only one component, append everything into root div
Later will think about composing multiple components

## Starting limitations:

- No parentless elements, eg. use span for strings. Don't pass without parent (DONE)
- No self-closing tags eg. img
- No state changes

## Plans:

- JSX without hierarchy (DONE)
- Remove wrapper div inside compile function (DONE)
- Also removes spaces(eg. 'div>\n \t\t\t\t\t') - use trim() (DONE)
- Add hierachy (DOM childs) (DONE)
- Handle loose element in b/w two tags eg. `<p></p>a<span></span>` (DONE)
- Add onclick listeners
- Pass on initialCount prop
- Reuse the Counter component, initialize with diff initial count
- If tagName starts with caps, then call the function. Else it's HTML DOM tag.
- Bug : You can only pass one element only to ReactElement (Must use wrapper component)
- Add margin-right (Inline styles)
- React fragment (Dummy container component)

## Design decisions

test.html: Used to checkout how it would look if we parse the actual html
As I am trying to parse HTML from JSX string, I need to handle weird edge cases eg. `<p>a</p>b`

## Rough work

1: "div>"
2: "span>Hi"
3: "/span>"
4: "button>Click me"
5: "/button>"
6: "/div>"
