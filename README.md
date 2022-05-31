# ColdEnv
Utility to encrypt and decrypt JSON file for .env assembly

## Installation

```bash
$ yarn add https://github.com/Cold927/coldenv
```
or

## How to use

ColdEnv is created to help hide your ``development.json`` file that create ``.env`` and keep your data safe in group project.

For example, you have data about your database and server connections in your ``development.json`` like this:

```
{
  "node": {
    "env": "development"
  },
  "mongo": {
    "host1": "127.0.0.1",
    "port1": "8000",
    "replica": false,
    "user": "user",
    "password": "password",
    "database": "example_db",
    "root": {
      "user": "root",
      "password": "root"
    }
  }
}
```

You can encrypt your file with ``private.key`` to keep your data safe while share it to others.

Private key can be anything, just a word or UUID for example.``private.key`` file must be in your root of the project directory.

### Encrypt file
```bash
$ coldenv playground encrypt
```
The encrypted file will be located in the root of the project with the name ``secret.txt``.

### Decrypt file
```bash
$ coldenv playground decrypt
```
For decryption, the following files must be in the root of the project directory:

- ``private.key`` - private key
- ``secret.txt`` - encrypted data file

## Author

[Roman Cold](https://github.com/Cold927)

## License

ColdEnv is [MIT licensed](LICENSE)