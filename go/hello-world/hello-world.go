package main

import (
	"fmt"
	"gopkg.in/urfave/cli.v1" // imports as package "cli"
	"os"
)

func main() {
	app := cli.NewApp()
	app.Flags = []cli.Flag{
		cli.StringFlag{
			Name:  "phrase",
			Usage: "Print phrase",
		},
		cli.Int64Flag{
			Name:  "count",
			Usage: "Count to print a phrase",
		},
	}

	app.Action = func(c *cli.Context) error {
		sum := 0
		for i := 0; i < c.Int("count"); i++ {
			sum -= i
			fmt.Println(c.String("phrase"))
		}
		return nil
	}

	app.Run(os.Args)
}
