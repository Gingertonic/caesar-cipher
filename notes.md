# Ciphers
## Dan's code https://repl.it/@danielkaczmarczyk/cipher?language=nodejs

## Aim
- Build a rudimentary cipher wheel

## Example
http://inventwithpython.com/cipherwheel/ : Julius Caeser cipher wheel
- inside wheel is static
- outside moves
- to encode with key 1, transpose outer wheel by 1 space. Now every B means A and the Key is 1.
BETH with key of 1 == CFUI == 2-5-20-8


## Classroom setup
"Follow but need to copy everything. Come on a journey with me on how to build it'"
- repl.it [ read, evaluate, print, loop ]
- Node.js env


Hashing: ONE WAY only
- comparing end results

Encryption: reversible

Polymorphism: in programming, the meaning of a symbol etc is dependent on context

# Thought Process
1. See what data types we're working with
2. Signature of function - a basic outline of what we expect it to produce
```js
  function caesar(message, mode, symbols, key){
    let translated = "";
  }
```

# Brute Force Hack
iterate over all possibilities and check each one

## fun extra:
$ node dans-code.js | grep daniel
=> 38 öœ daniel is Giving A workshop on ciphers in WeWork finsbury pavement, i think the address is 131

or save it straight to a file:
$ node dans-code.js | grep daniel >> decrypted_message.txt
=>

display the text in a file in term
$ cat decrypted_message.txt
=> 38 öœ daniel is Giving A workshop on ciphers in WeWork finsbury pavement, i think the address is 131

# Turing Complete
def: Turing complete is a term used in computability theory to describe abstract machines, usually called automata. Such an automaton is Turing complete, if it can be used to emulate a Turing machine. It is also called computationally universal.

Most modern programming languages are Turing-complete. There are languages that are used to classify and describe the contents of documents; for example HTML. HTML is not Turing complete, because it cannot actively change the state of the system. HTML can be combined with a technology such as JavaScript; both together can be made Turing complete.The standard regular expressions, which most programming languages use are not Turing complete either. Most regular expression engines have been adapted to include back-references. The problem with this is that a finite automaton cannot handle back references.


SYMBOLS: https://gist.github.com/danielkaczmarczyk/cf0d17710a53b3a5a9daccaf3771b7a8
const SYMBOLS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890 !?.`~@#$%^&*()_+-=[]{}|;:<>,/'

READING LIST:
Automate the Boring Stuff with Python by Al Sweigart
