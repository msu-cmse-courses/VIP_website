# INSTALL INSTRUCTIONS

Note, it is very tricky to get ruby working with conda.  I had a lot of trouble. The following steps worked on my mac but I am concerned that they will change as we move forward.

conda create --prefix=./envs ruby=3.2 cmake compilers make imagemagick

conda activate ./envs

rm Gemfile.lock (may not want too)

bundle install

make

