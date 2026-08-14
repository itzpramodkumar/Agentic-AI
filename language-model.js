/*
============================================================
              CHAPTER 2 — LANGUAGE MODEL
============================================================

DEFINITION:

Hindi:
Language Model ek model hai jo language patterns ko learn
karta hai aur given context ke basis par next token ki
probability predict karta hai.

English:
A Language Model learns patterns in language and predicts
the probability of the next token given previous context.


CORE IDEA:

Context
   ↓
Language Model
   ↓
Next-token probabilities
   ↓
Next token


Example:

Input:
"I am going to"

Possible predictions:

school  → 0.45
market  → 0.25
office  → 0.20


After selecting "school":

"I am going to school"

Then the model predicts the next token again.


IMPORTANT:

Technically:

Next Word  ❌
Next Token  ✅


LANGUAGE MODEL TYPES:

1. Statistical Language Models
   → N-gram

2. Neural Language Models
   → Neural Networks

3. Transformer-based Language Models
   → Modern LLM ecosystem


LANGUAGE MODEL vs LLM:

Language Model:
General concept of modeling language and predicting
tokens/sequences.

LLM:
Large-scale language model trained using large datasets,
large numbers of parameters and large-scale computation.


IMPORTANT:

Every LLM is a language model,
but every language model is NOT an LLM.


AGENTIC AI CONNECTION:

Agent Goal
    ↓
LLM
    ↓
Understand / Generate
    ↓
Tool Call / Action
    ↓
Result


JavaScript Concept Simulation:

const predictions = [
    { token: "school", probability: 0.45 },
    { token: "market", probability: 0.25 },
    { token: "office", probability: 0.20 }
];

NOTE:
This is only a conceptual simulation, not a real LLM.


============================================================
*/