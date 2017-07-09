#!/usr/bin/env Rscript
#Hello World R command-line tool
#


suppressPackageStartupMessages(library("optparse"))
parser <- OptionParser()
parser <- add_option(parser, c("-c", "--count"), type = "integer",
                     help = "Number of times to print phrase",
                     metavar = "number")
parser <- add_option(parser, c("-p", "--phrase"),
                    help = "Phrase to print")

args <- parse_args(parser)


# Function to Generate Phrases
phrasegen <- function(arguments){
    for (count in 1:arguments$count) {
        cat(paste(arguments$phrase, "\n"))
    }
}

#Run the program
phrasegen(args)