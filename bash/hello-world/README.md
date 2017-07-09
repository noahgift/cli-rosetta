# Bash Hello-World

## Overview

To lint:  `make lint` (note still working through some ruby lint issues..not recognizing gems)
To run: 

```
➜  hello-world git:(master) ✗ ./hello-world.rb --count 5 --phrase "hello world"       
hello world
hello world
hello world
hello world
hello world
```
## Environment

* Installed https://github.com/koalaman/shellcheck in VSCode
* On Homebrew you can install:  `brew install shellcheck`

You may need to also do:

```
$ echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> ~/.zshenv
$ echo 'eval "$(rbenv init -)"' >> ~/.zshenv
$ echo 'source $HOME/.zshenv' >> ~/.zshrc
$ exec $SHELL
```


## References

* http://tldp.org/LDP/abs/html/complexfunct.html
* https://stackoverflow.com/questions/6212219/passing-parameters-to-a-bash-function
* https://stackoverflow.com/questions/192249/how-do-i-parse-command-line-arguments-in-bash