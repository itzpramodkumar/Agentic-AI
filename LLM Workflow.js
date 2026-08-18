/*
============================================================
              CHAPTER 4 — LLM BASIC WORKFLOW
============================================================

Basic LLM workflow:

User Input
    ↓
Tokenization
    ↓
Tokens
    ↓
Token IDs
    ↓
Embeddings
    ↓
Transformer
    ↓
Logits
    ↓
Softmax / Probability Distribution
    ↓
Next Token Selection
    ↓
Add Token to Context
    ↓
Repeat
    ↓
Final Response


------------------------------------------------------------
STEP 1 — USER INPUT
------------------------------------------------------------

Example:

"What is Agentic AI?"


------------------------------------------------------------
STEP 2 — TOKENIZATION
------------------------------------------------------------

Text is divided into tokens.

Example (conceptual):

"What is Agentic AI?"

→ ["What", " is", " Agentic", " AI", "?"]

Exact tokens depend on the tokenizer.


------------------------------------------------------------
STEP 3 — TOKEN IDs
------------------------------------------------------------

Each token is mapped to a numerical ID.

Example:

"What"    → 1542
" is"     → 318
" Agentic" → 7291
" AI"     → 955
"?"       → 30

These are example IDs only.


------------------------------------------------------------
STEP 4 — EMBEDDINGS
------------------------------------------------------------

Token IDs are mapped to numerical vector
representations.

Token ID
   ↓
Embedding Vector


------------------------------------------------------------
STEP 5 — TRANSFORMER
------------------------------------------------------------

Embeddings are processed by the Transformer.

Important Transformer components:

- Attention
- Self-Attention
- Multi-Head Attention
- Positional Information
- Feed-Forward Network


------------------------------------------------------------
STEP 6 — LOGITS
------------------------------------------------------------

Transformer produces raw scores for possible
next tokens.

Example:

school  → 4.5
market  → 3.2
office  → 2.1

These are logits, NOT probabilities.


------------------------------------------------------------
STEP 7 — SOFTMAX
------------------------------------------------------------

Softmax converts logits into a probability
distribution.

Example:

school  → 0.70
market  → 0.20
office  → 0.10

Total = 1.00


------------------------------------------------------------
STEP 8 — NEXT TOKEN
------------------------------------------------------------

A token is selected based on the probability
distribution and decoding strategy.


------------------------------------------------------------
STEP 9 — REPEAT
------------------------------------------------------------

Selected token is added to the context.

Then the model predicts the next token again.

This continues until the response is complete.


------------------------------------------------------------
IMPORTANT
------------------------------------------------------------

LLM does not generate the entire response in one
single conceptual prediction.

It generates tokens sequentially.


------------------------------------------------------------
JAVASCRIPT TOY EXAMPLE
------------------------------------------------------------

const input = "What is Agentic AI?";

function tokenize(text) {
    return text.split(" ");
}

function generateResponse(tokens) {
    return [...tokens, "It", "is", "an", "AI", "system"];
}

const tokens = tokenize(input);

console.log("Tokens:", tokens);

const response = generateResponse(tokens);

console.log("Response:", response.join(" "));

NOTE:
This is only a conceptual simulation.
It is NOT an actual LLM.


============================================================
*/