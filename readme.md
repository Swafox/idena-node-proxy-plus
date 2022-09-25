# Setup

## 1. Modify config.json
Lines 23 & 24, put IDENA URL and Key (just like in .env)
Example:
```
IDENA_URL="http://localhost:9009"
IDENA_KEY="123"
```

## 2. Modify keys.json
Simply put keys in json format:
`["key1", "key2", "keyN"]`

## optional: bootstrap script
Execute the following command if you currently do NOT have a node running:
```
chmod +x script.sh && ./script.sh
```

# Usage

## Testing keys
Run `npm test` to validate keys

## Running
Run `npm start` to start both servers

## Stopping
Run `npm stop all` to stop both servers

# Further configuration

To configure proxy you can use `config.json` file or set custom path with `CONFIG_PATH` environmental variable.

Log can have `stdout` or `file` output.

Default configuration:

```
{
    "port": 3000,
    "rateLimit": {
        "windowMs": 1000,
        "max": 10
    },
    "apiKeys": [],
    "remoteKeys": {
        "enabled": false,
        "url": null,
        "authorization": null,
        "interval": 300000
    },
    "godApiKey": null,
    "check": {
        "key": "check-status-key",
        "methods": [
            "dna_epoch",
            "bcn_syncing"
        ]
    },
    "node": {
        "url": null,
        "key": null
    },
    "logs": {
        "output": "stdout",
        "format": ":date[iso] - :apiKey - :status - :response-time ms - :body - :res[content-length]",
        "file": "access.log"
    },
    "methods": [
        "dna_identity",
        "dna_ceremonyIntervals",
        "dna_epoch",
        "dna_isValidationReady",
        "dna_wordsSeed",
        "dna_getBalance",
        "dna_version",
        "dna_signatureAddress",
        "dna_sendToIpfs",
        "dna_globalState",
        "flip_getRaw",
        "flip_getKeys",
        "flip_words",
        "flip_shortHashes",
        "flip_longHashes",
        "flip_privateEncryptionKeyCandidates",
        "flip_sendPrivateEncryptionKeysPackage",
        "flip_sendPublicEncryptionKey",
        "flip_wordPairs",
        "flip_rawSubmit",
        "bcn_lastBlock",
        "bcn_blockAt",
        "bcn_block",
        "bcn_transaction",
        "bcn_txReceipt",
        "bcn_syncing",
        "bcn_feePerGas",
        "bcn_getRawTx",
        "bcn_sendRawTx",
        "bcn_estimateRawTx",
        "bcn_burntCoins",
        "bcn_keyWord",
        "ipfs_cid",
        "ipfs_get",
        "contract_getStake",
        "contract_readData",
        "contract_readonlyCall",
        "contract_readMap",
        "contract_iterateMap"
    ]
}
```