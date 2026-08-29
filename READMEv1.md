# Babel AST — Raka Poka

## Overview

This repository is a practical exploration of JavaScript Abstract Syntax Trees (ASTs) using Babel Parser.

The main purpose of this repository is to understand how JavaScript source code can be read, parsed, inspected, and processed programmatically.

Instead of treating JavaScript as plain text, we can convert the source code into a structured AST and work with individual nodes such as imports, variables, expressions, conditions, and other JavaScript constructs.

---

## Why AST?

When working with JavaScript source code, searching and modifying text directly can become difficult and unreliable.

AST gives us a structured representation of the source code.

For example:

```js
import express from "express";

const app = express();
````

The parser can represent this code as different AST nodes:

```text
Program
 ├── ImportDeclaration
 └── VariableDeclaration
```

This allows us to understand the structure of the code instead of only reading it as text.

---

## Repository Flow

The basic flow of this repository is:

```text
JavaScript Source File
        ↓
   Read Source Code
        ↓
    Babel Parser
        ↓
        AST
        ↓
 Identify node.type
        ↓
 Process AST Nodes
        ↓
 Extract Useful Information
```

---

## Technologies

* Node.js
* JavaScript
* Babel Parser
* JavaScript AST

The main parser used in this repository is:

```text
@babel/parser
```

---

## Basic Usage

Go to the required version folder:

```bash
cd v5
```

Install dependencies:

```bash
npm install
```

Run the AST processor:

```bash
node run.js
```

The program reads the configured JavaScript source file, parses it using Babel Parser, processes the AST, and prints the extracted information.

---

## Generate AST as JSON

The repository also contains `toFile.js`.

Run:

```bash
node toFile.js
```

This reads the JavaScript source file, creates the AST, and writes it into:

```text
ast-output.json
```

The generated JSON makes it easier to inspect the complete AST structure.

---

## Understanding `node.type`

Every AST node has a `type`.

For example:

```text
ImportDeclaration
VariableDeclaration
ExpressionStatement
IfStatement
```

The `node.type` tells us what kind of JavaScript construct the node represents.

For example:

```js
import express from "express";
```

can be represented as:

```text
ImportDeclaration
```

And:

```js
const app = express();
```

can be represented as:

```text
VariableDeclaration
```

---

## What Can We Extract?

Once the source code is converted into an AST, we can extract information such as:

* Node type
* Start position
* End position
* Original source text
* Imported module
* Imported name
* Variable name
* Expressions
* Conditions
* Function-related structures
* Other JavaScript syntax structures

Example:

```text
type: ImportDeclaration
raka: express
poka: express
```

This information can then be used by other tools.

---

## What Can This Repository Be Used For?

AST processing can be used as the foundation for many developer tools.

### 1. Code Analysis

Analyze JavaScript projects programmatically.

For example:

```text
How many imports does a file have?
Which modules are being used?
Which variables are declared?
Which conditions exist?
```

---

### 2. Dependency Analysis

Imports can be analyzed to understand relationships between files and packages.

Example:

```text
app.js
 ├── express
 ├── dotenv
 ├── ./routes.js
 └── ./api/routes.js
```

This can be used to understand project dependencies.

---

### 3. Code Documentation

AST information can be used to automatically generate documentation.

For example:

```text
Source Code
    ↓
AST
    ↓
Extract functions / variables / imports
    ↓
Generate Documentation
```

---

### 4. Code Navigation

AST information can help build developer features such as:

* Go to definition
* Find references
* Symbol lists
* Code structure views
* File relationships

---

### 5. Code Transformation

AST can be used to safely transform JavaScript code.

For example:

```text
Old Syntax
    ↓
Parse
    ↓
AST
    ↓
Transform Nodes
    ↓
Generate New Code
```

This can be useful for migrations and automated refactoring.

---

### 6. Code Quality Tools

AST processing can be used to build custom checks.

For example:

```text
Find unused imports
Detect specific coding patterns
Check project conventions
Find unwanted APIs
Validate code structures
```

---

### 7. Migration Tools

Large projects often need automated changes.

Instead of searching and replacing plain text, AST allows us to understand the actual JavaScript structure before making a change.

This makes large-scale code migrations more reliable.

---

## Versions

The repository is organized into different versions as the AST processing approach evolves.

```text
v1
 ↓
Basic AST exploration

v2
 ↓
AST node handling

v3
 ↓
Orchestration and separate node handling

v4
 ↓
Further AST processing

v5
 ↓
Continued AST processing and experimentation
```

Each version is used to explore and improve the approach.

---

## Example Workflow

Suppose we have:

```js
import express from "express";

const app = express();

app.listen(3000);
```

The repository can process the source like:

```text
Source Code
     ↓
Babel Parser
     ↓
AST
     ↓
┌──────────────────────┐
│ ImportDeclaration    │
│ VariableDeclaration  │
│ ExpressionStatement  │
└──────────────────────┘
     ↓
Extract Node Information
     ↓
Developer Tool / Analysis
```

The important idea is that the same AST information can become the input for many different tools.

---

## Future Possibilities

This repository can be extended into a reusable JavaScript code analysis platform.

Possible future features include:

* AST visualizer
* Dependency graph
* Code documentation generator
* Code structure explorer
* Static analysis tools
* Custom linting rules
* Automated refactoring
* JavaScript migration tools
* Code metrics
* Developer productivity tools

---

## Key Idea

The main idea behind this repository is:

> **Read JavaScript as structured code instead of treating it as plain text.**

Once the source is converted into an AST, individual parts of the program can be understood, analyzed, and processed programmatically.

That makes AST a useful foundation for building tools around JavaScript code.


