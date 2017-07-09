#!/usr/bin/env ruby

require 'trollop'
opts = Trollop::options do
  opt :phrase, "Phrase", :type => :string        # string --phrase <s>
  opt :count, "Number of limbs"             # integer --count <i>
end


# Generate Phrases
def phrase_generator(phrase, count)
  for _ in (1..count) do
      puts phrase
  end
end

# Run program
phrase_generator(opts.phrase, opts.count)