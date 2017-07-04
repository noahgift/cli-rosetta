#!/usr/bin/env python
import click

@click.version_option("0.1")
@click.group()
def cli():
    """Hello World"""

@cli.command("hello")
@click.option("--phrase", help="phrase to print")
@click.option("--count", help="Number of times to repeat phrase", type=int)
def hello(phrase, count):
    """Hello World Command-line tool"""

    while count:
        count -= 1
        click.echo(phrase)


if __name__ == '__main__':
    cli()
