```
randpass

  Generates a random, password-like string. This uses the MersenneTwister19937
  algorithm, re-seeded each time the program runs.

Options

  -l, --length number        Length of password
  -a, --alphanumeric-only    Only use alphanumeric characters
  -h, --help                 Display this usage guide.

Examples

  Random string                    randpass
  Random string of length 16       randpass -l 16
  Random string of alphanumerics   randpass -a
```
