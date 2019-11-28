# v2.0.0

- Fix compatibility with eth-extended@5+, eth-lite@4+ or eth-memento@1 core plugins
- **Breaking change**: Older core plugin versions are no longer supported.
- **Breaking change**: Extra data module URI has been replaced by two separate URIs, depending on the core plugin being used:
    - `module://aleth.io/eth-ibft2/block/full/extra-data` - compatible with eth-extended and eth-memento
    - `module://aleth.io/eth-ibft2/block/lite/extra-data` - compatible with eth-lite

# v1.1.0

- Add plugin manifest (@alethio/cms@1.0.0-beta.7)
