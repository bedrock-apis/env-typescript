# env-types

TypeScript type definitions for environment-specific QuickJS engine that doesn't strictly follow standard ES versioning. This package provides a curated set of global types and methods tailored for non-standard runtimes, ensuring better development experience and type safety for your projects.  

> **Note:** This package is currently in **beta**. Contributions, bug reports, and suggestions are highly appreciated! Check out our [GitHub repository](https://github.com/bedrock-apis/env-types) for more information.

## Features

- Provides environment-specific TypeScript type definitions for non-standard engines.
- Covers selective feature support across different engine versions.
- Includes global classes, methods, and properties specific to each environment.
- Helps catch runtime errors early by providing accurate type safety.
- Designed to supplement and compare against TypeScript's global types.

# Installation
Install the package as a development dependency, and add it to the known types in your `tsconfig.json`:
```json
{
    "compilerOptions": {
        "noLib": true,
        "types": ["@bedrock-apis/env-types"],
        // ...
    }
    // ...
}
```

## Plan

- Generate a basic set of methods and properties for each global class.
- Compare and extend these definitions against TypeScript’s standard global types.
- Continuously update with help of contributions.

## Contributing

This package is in **beta**, and we welcome contributions from the community. You can help by:

* Adding missing type definitions.
* Fixing inconsistencies between types and engine environment apis.
* Suggesting new features or improvements.

Please visit our [GitHub repository](https://github.com/bedrock-apis/env-types) to submit issues or pull requests.