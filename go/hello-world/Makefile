install-go:
	#assuming Mac
	brew install go
	go get golang.org/x/tools/cmd/godoc
	go get github.com/golang/lint/golint
	go get golang.org/x/tour/gotour
	#gotour

install:
	go get gopkg.in/urfave/cli.v1

build:
	#Make and install binary
	go install

all: install build
