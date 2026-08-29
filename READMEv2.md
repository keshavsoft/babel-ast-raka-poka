<div align="center">

# 🧬 Babel AST — Raka Poka

### Read JavaScript as structure — not just text.

<p>
  <b>A practical Node.js playground for learning, inspecting, generating, and transforming JavaScript Abstract Syntax Trees with Babel.</b>
</p>

<p>
  <a href="https://github.com/keshavsoft/babel-ast-raka-poka">
    <img src="https://img.shields.io/badge/GitHub-babel--ast--raka--poka-181717?style=for-the-badge&logo=github" alt="GitHub">
  </a>
  <a href="https://keshavsoft.github.io/babel-ast-raka-poka/">
    <img src="https://img.shields.io/badge/📖%20Documentation-GitHub%20Pages-6366f1?style=for-the-badge" alt="Documentation">
  </a>
  <a href="https://www.npmjs.com/search?q=babel-ast-raka-poka">
    <img src="https://img.shields.io/badge/📦%20NPM-Search-ea4aaa?style=for-the-badge&logo=npm" alt="NPM">
  </a>
  <img src="https://img.shields.io/badge/Node.js-ES%20Modules-339933?style=for-the-badge&logo=node.js&logoColor=white" alt="Node.js">
  <img src="https://img.shields.io/badge/Babel-AST-F9DC3E?style=for-the-badge&logo=babel&logoColor=111827" alt="Babel">
</p>

<p>
  <a href="https://keshavsoft.github.io/babel-ast-raka-poka/"><b>📖 Open Documentation</b></a>
  &nbsp;•&nbsp;
  <a href="https://github.com/keshavsoft/babel-ast-raka-poka"><b>◇ View Repository</b></a>
  &nbsp;•&nbsp;
  <a href="https://www.npmjs.com/search?q=babel-ast-raka-poka"><b>📦 Open NPM</b></a>
</p>

</div>

---

## ✨ What is this project?

**babel-ast-raka-poka** is a hands-on JavaScript AST learning and experimentation repository.

The project starts with a simple question:

> **What if JavaScript source code could be understood as structured data instead of being treated as plain text?**

Babel answers that question by parsing JavaScript into an **Abstract Syntax Tree (AST)**.

Once the source becomes an AST, a program can inspect individual pieces of JavaScript such as:

- `ImportDeclaration`
- `VariableDeclaration`
- `ExpressionStatement`
- `IfStatement`
- identifiers
- function structures
- module imports
- source positions
- expressions and other syntax nodes

The repository gradually explores this idea through root-level scripts and versioned experiments.

---

## 📖 Documentation

The repository includes a dedicated documentation page for understanding the complete project.

### 🚀 Open the Documentation

**[📖 Open Babel AST Documentation →](https://keshavsoft.github.io/babel-ast-raka-poka/)**

The documentation explains:

- Why AST is useful
- How JavaScript becomes an AST
- The repository execution flow
- AST node inspection
- AST JSON generation
- AST node creation
- Code generation
- Source-code insertion
- Version-wise experiments
- Practical examples
- How the project can evolve into developer tooling

### 📦 NPM

**[📦 Open NPM Search →](https://www.npmjs.com/search?q=babel-ast-raka-poka)**

> The repository's `package.json` identifies the project as `babel-ast-raka-poka`. The NPM link above opens the NPM search page for the project name. If the package is published later, this can be changed to the direct package page.

---

# 🧠 The Core Idea

A normal text-based approach looks like this:

```text
JavaScript File
      ↓
Search strings
      ↓
Replace strings
      ↓
Write file
```

An AST-based approach looks like this:

```text
JavaScript Source
      ↓
Read source
      ↓
@babel/parser
      ↓
Abstract Syntax Tree
      ↓
Understand node structure
      ↓
Inspect / Create / Transform nodes
      ↓
@babel/generator
      ↓
JavaScript Source
```

That difference is the reason AST processing is powerful.

Instead of asking:

> "Where does this piece of text occur?"

we can ask:

> "Which JavaScript construct is this?"

---

# 🔍 A Simple Example

Consider:

```js
import express from "express";

const app = express();

app.listen(3000);
```

Babel can represent the program approximately like:

```text
Program
│
├── ImportDeclaration
│   └── express
│
├── VariableDeclaration
│   └── app
│
└── ExpressionStatement
    └── CallExpression
```

The important point is that the program now has **meaningful structure**.

A tool can inspect the AST and determine:

```text
Node Type        Meaning
────────────────────────────────────
ImportDeclaration  JavaScript import
VariableDeclaration  variable declaration
ExpressionStatement  expression statement
CallExpression       function call
```

---

# ⚙️ Repository Flow

The main learning flow is:

```text
┌───────────────────────┐
│ JavaScript Source     │
│ app.js / routes.js    │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ Read File             │
│ Node.js fs            │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ @babel/parser         │
│ Parse JavaScript      │
└───────────┬───────────┘
            │
            ▼
┌───────────────────────┐
│ AST                   │
│ Program → Nodes       │
└───────────┬───────────┘
            │
       ┌────┴─────┐
       ▼          ▼
   Inspect      Transform
       │          │
       ▼          ▼
  Extract      @babel/types
  information      │
       │           ▼
       │     @babel/generator
       │           │
       └─────┬─────┘
             ▼
      Generated / Updated
       JavaScript source
```

---

# 🧩 Main Technologies

| Technology | Purpose |
|---|---|
| **Node.js** | Runs the AST scripts |
| **JavaScript** | Implementation language |
| **ES Modules** | Project module system |
| **@babel/parser** | Converts JavaScript source into an AST |
| **@babel/types** | Creates AST nodes programmatically |
| **@babel/generator** | Converts AST nodes back into JavaScript |
| **File System API** | Reads and writes JavaScript files |

The current `package.json` uses ES modules and declares `@babel/parser`, `@babel/types`, and `@babel/generator` as dependencies. fileciteturn28file0

---

# 📂 Project Structure

The repository contains both **root-level experiments** and **versioned experiments**.

```text
babel-ast-raka-poka/
│
├── app.js
├── app copy.js
├── app1.js
│
├── run.js
├── toFile.js
├── create.js
├── insert.js
│
├── ast-output.json
│
├── package.json
├── package-lock.json
├── README.md
│
├── docs/
│   ├── index.html
│   └── v1/
│       └── index.html
│
├── v1/
│   ├── create.js
│   ├── insert.js
│   ├── routes.js
│   └── run.js
│
├── v2/
│   ├── app.js
│   ├── run.js
│   └── toFile.js
│
├── v3/
│   ├── astHandlers.js
│   ├── jsFiles/
│   └── nodeHandlers/
│
├── ...
│
└── v10/
    ├── output.json
    ├── package.json
    ├── routes.js
    └── run.js
```

The repository tree contains root scripts, documentation, generated AST JSON, and multiple versioned experiments. fileciteturn30file0

---

# 🛠️ Important Root Files

## `app.js`

A sample JavaScript source file used as an input for AST processing.

Think of it as:

```text
Input JavaScript
       ↓
     Parser
       ↓
      AST
```

---

## `run.js`

The main learning example for reading a JavaScript source file and inspecting AST nodes.

Typical responsibilities include:

```text
Read source
    ↓
Parse source
    ↓
Access ast.program.body
    ↓
Inspect nodes
    ↓
Print useful information
```

This is the easiest place to start when learning how the project understands JavaScript.

---

## `toFile.js`

This experiment demonstrates how the complete AST can be written to a JSON file.

```text
JavaScript
    ↓
Babel Parser
    ↓
AST
    ↓
JSON.stringify()
    ↓
ast-output.json
```

The generated JSON makes the tree easier to inspect.

---

## `create.js`

This is the transformation side of the project.

Instead of only reading an AST, Babel types can be used to create a new AST node.

For example, conceptually:

```text
Create ImportDeclaration
        ↓
Create Identifier
        ↓
Create StringLiteral
        ↓
Generate JavaScript
```

---

## `insert.js`

This experiment demonstrates an important AST technique:

**use AST node positions to determine where generated code should be inserted.**

Conceptually:

```text
Source File
    ↓
Parse AST
    ↓
Find target node
    ↓
Read node.start
    ↓
Generate new code
    ↓
Insert generated code
    ↓
Write updated file
```

This is much more useful for code-generation systems than blindly searching for text.

---

# 🧬 Understanding AST Nodes

Every Babel AST node has a `type`.

For example:

```js
import express from "express";
```

becomes an:

```text
ImportDeclaration
```

And:

```js
const app = express();
```

becomes:

```text
VariableDeclaration
```

A program can therefore inspect:

```js
node.type
```

to understand what construct it is processing.

Babel's AST specification defines nodes such as `Program`, `ImportDeclaration`, `VariableDeclaration`, `ExpressionStatement`, `IfStatement`, `CallExpression`, and many others. citeturn0search0

---

# 📍 Source Positions

AST nodes also carry source-location information.

A node can provide positions such as:

```text
start
end
loc.start
loc.end
```

This makes it possible to connect:

```text
AST Node
   ↕
Original Source Text
```

For example:

```js
const original = source.slice(node.start, node.end);
```

This is useful when a tool needs to understand exactly which portion of the original source belongs to a particular AST node.

---

# 🔄 AST → JavaScript

AST processing does not have to stop at analysis.

A tool can create or modify nodes and then generate JavaScript again.

```text
Existing JavaScript
        ↓
      Parse
        ↓
       AST
        ↓
Create / modify node
        ↓
 @babel/types
        ↓
 @babel/generator
        ↓
New JavaScript
```

`@babel/generator` is designed to turn an AST into generated JavaScript and can also work with source-map information. citeturn0search2

---

# 🚀 Getting Started

## 1. Clone the repository

```bash
git clone https://github.com/keshavsoft/babel-ast-raka-poka.git
cd babel-ast-raka-poka
```

## 2. Install dependencies

```bash
npm install
```

The project is configured as an ES-module package:

```json
{
  "type": "module"
}
```

and currently declares:

```text
@babel/parser
@babel/types
@babel/generator
```

as dependencies. fileciteturn28file0

## 3. Run a root experiment

For example:

```bash
node run.js
```

## 4. Generate AST JSON

```bash
node toFile.js
```

Then inspect:

```text
ast-output.json
```

## 5. Explore the versions

```bash
cd v1
```

or explore later version folders such as:

```text
v2
v3
...
v10
```

Each version represents another step in the experimentation and design process.

---

# 🧪 Learning Path

If you are new to AST, follow this order:

```text
01. Understand JavaScript source
          ↓
02. Learn what an AST is
          ↓
03. Run run.js
          ↓
04. Inspect ast.program.body
          ↓
05. Understand node.type
          ↓
06. Run toFile.js
          ↓
07. Study ast-output.json
          ↓
08. Learn @babel/types
          ↓
09. Learn @babel/generator
          ↓
10. Study insert.js
          ↓
11. Explore v1 → v10
```

This turns the repository from a collection of scripts into a progressive AST learning path.

---

# 💡 What Can Be Built With This?

AST processing is useful far beyond this learning repository.

## 🔎 1. Code Analysis

```text
Find all imports
Find all functions
Find all variables
Find specific API calls
Find specific coding patterns
```

---

## 📦 2. Dependency Analysis

```text
app.js
 ├── express
 ├── dotenv
 ├── ./routes.js
 └── ./api/routes.js
```

A tool can extract imports and build relationships between files.

---

## 📝 3. Documentation Generation

```text
Source Code
    ↓
AST
    ↓
Extract functions / imports / variables
    ↓
Generate Documentation
```

---

## 🔧 4. Automated Code Modification

```text
Source
  ↓
Parse
  ↓
Find target node
  ↓
Create new node
  ↓
Generate code
  ↓
Write file
```

This can be used for automated code-generation systems.

---

## 🔄 5. Migration Tools

For large applications, AST-based transformations can help automate repetitive code changes.

Instead of:

```text
Find text
Replace text
```

the tool can do:

```text
Find actual JavaScript construct
        ↓
Understand its structure
        ↓
Modify the AST
        ↓
Generate valid source
```

---

## 🧹 6. Code Quality Tools

ASTs can be used for custom rules such as:

```text
Unused imports
Forbidden APIs
Project conventions
Complex functions
Specific coding patterns
Architecture rules
```

---

# 🏗️ From This Repository to a Developer Tool

The repository can eventually grow into a larger code-processing platform.

```text
                 ┌─────────────────────┐
                 │ JavaScript Project  │
                 └──────────┬──────────┘
                            ↓
                 ┌─────────────────────┐
                 │ AST Parser          │
                 └──────────┬──────────┘
                            ↓
                 ┌─────────────────────┐
                 │ AST Analysis Layer  │
                 └──────────┬──────────┘
                            ↓
       ┌────────────────────┼────────────────────┐
       ↓                    ↓                    ↓
 Dependency Graph      Code Analyzer       Code Generator
       ↓                    ↓                    ↓
 Documentation         Quality Rules       Refactoring
       └────────────────────┼────────────────────┘
                            ↓
                 Developer Productivity
```

Possible future applications:

- AST visualizer
- Dependency graph generator
- Code documentation generator
- Static analysis
- Custom lint rules
- Automated refactoring
- JavaScript migration tools
- API route discovery
- Code metrics
- Developer productivity tools
- VS Code extensions
- AI-assisted code understanding

---

# 🧭 Versioned Experiments

One important characteristic of this repository is its **version-based evolution**.

Rather than deleting older experiments, the project keeps different approaches in folders such as:

```text
v1
v2
v3
...
v10
```

This makes the repository useful as an engineering story:

```text
Simple AST experiment
        ↓
More node inspection
        ↓
File-based processing
        ↓
Node handlers
        ↓
Structured processing
        ↓
More advanced experiments
```

The version folders should therefore be viewed as **learning and development milestones**, not simply duplicate implementations.

---

# 📚 Useful Babel References

- [Babel Parser AST Specification](https://github.com/babel/babel/blob/main/packages/babel-parser/ast/spec.md)
- [Babel Generator](https://github.com/babel/babel/tree/main/packages/babel-generator)
- [Babel Types](https://github.com/babel/babel/tree/main/packages/babel-types)
- [Babel Parser Documentation](https://babeljs.io/docs/babel-parser)

---

# 📖 Project Documentation

### 🌐 GitHub Pages

**[📖 Open the full interactive documentation →](https://keshavsoft.github.io/babel-ast-raka-poka/)**

The documentation site is located inside:

```text
docs/index.html
```

The repository currently includes that documentation file in its `docs/` folder. fileciteturn30file0

### ◇ GitHub Repository

**[Open `keshavsoft/babel-ast-raka-poka` →](https://github.com/keshavsoft/babel-ast-raka-poka)**

### 📦 NPM

**[Search `babel-ast-raka-poka` on NPM →](https://www.npmjs.com/search?q=babel-ast-raka-poka)**

---

# 🎯 Key Takeaway

The most important lesson of this repository is simple:

> **Don't treat JavaScript only as text. Treat it as a structured program.**

The journey is:

```text
                 READ
                  ↓
             JavaScript
                  ↓
                PARSE
                  ↓
                 AST
                  ↓
              UNDERSTAND
                  ↓
               INSPECT
                  ↓
               CREATE
                  ↓
              GENERATE
                  ↓
               INSERT
                  ↓
          AUTOMATE / TRANSFORM
```

Once JavaScript is represented as an AST, a developer tool can reason about the actual structure of the program.

That is the foundation behind many modern JavaScript tooling systems.

---

<div align="center">

## ⚡ Parse. Understand. Generate. Automate.

**Babel AST — Raka Poka**

<p>
  <a href="https://keshavsoft.github.io/babel-ast-raka-poka/">📖 Documentation</a>
  ·
  <a href="https://github.com/keshavsoft/babel-ast-raka-poka">◇ GitHub</a>
  ·
  <a href="https://www.npmjs.com/search?q=babel-ast-raka-poka">📦 NPM</a>
</p>

</div>
