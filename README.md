# Example Codewars Minimum and Maxmimum Project

This repository demonstrates the project structure I use for my Codewars kata solutions. To put simply, each solution has a source file located under the `src/` folder, and a test file located under the `test/` folder. As the names imply, the former is used for the actual implementation of the solution, and the latter is used to test that solution.

The project uses Mocha and Chai to test the output. While you can run `mocha` to run all tests (assuming a global installation of Mocha, you can also use `--grep <id or part of name>` to run them individually.
