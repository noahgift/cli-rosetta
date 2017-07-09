# GO Hello World Command-line tool

## Running program

Run `make all`

Then run program

```
➜  hello-world git:(master) ✗ hello-world --phrase "hello world" --count 5
hello world
hello world
hello world
hello world
hello world
```

## Environment

* Setup on mac with homebrew:
    - https://stackoverflow.com/questions/12843063/install-go-with-brew-and-running-the-gotour

Setting these variables:

``` 
        export GOPATH="${HOME}/.go"                                                      
        export GOROOT="$(brew --prefix golang)/libexec"                                  
        export PATH="$PATH:${GOPATH}/bin:${GOROOT}/bin"                                  
        export GOBIN=$GOPATH/bin     
```

* Write first program with Go
    - https://golang.org/doc/code.html

* Using cli:
    - https://github.com/urfave/cli


* Running lint:
    `make lint`

* Installing dependencies:
    `make install`
