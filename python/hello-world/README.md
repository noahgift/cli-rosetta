# Hello World Command-line Tool

## Recommended environment
Python 3.6.1

## Running

Steps to Run:

Install packages:

`make install`

Activate Virtual Env:

`source ~/.hello-world-py-cli/bin/activate`

Run Tool:

`./hello-world.py --phrase "hello world" --count 3`

The output should be:

`hello world hello world hello world`

# Full example of lint and run:

    (.hello-world-py-cli) ➜  hello-world git:(master) ✗ ./hello-world.py hello --phrase "hello world" --count 3
    hello world
    hello world
    hello world
    (.hello-world-py-cli) ➜  hello-world git:(master) ✗ make lint
    pylint hello-world.py

    -------------------------------------------------------------------
    Your code has been rated at 10.00/10 (previous run: 7.50/10, +2.50)