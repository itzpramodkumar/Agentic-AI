/*
============================================================
                    CHAPTER 1
              LARGE LANGUAGE MODEL (LLM)
============================================================

FULL FORM:

LLM = Large Language Model


------------------------------------------------------------
DEFINITION
------------------------------------------------------------

Hindi:

LLM ek AI model hai jo large-scale data se language ke
patterns learn karta hai aur given context ke basis par
text ko process aur generate kar sakta hai.


English:

A Large Language Model is an AI model trained on large-scale
data to learn language patterns and generate or process text
based on context.


------------------------------------------------------------
CORE IDEA
------------------------------------------------------------

Modern generative LLMs primarily generate text through
NEXT-TOKEN PREDICTION.

Example:

"I am learning"
       ↓
Predict next token
       ↓
"AI"
       ↓
"I am learning AI"
       ↓
Predict next token
       ↓
Continue...
       ↓
Complete Response


------------------------------------------------------------
HIGH-LEVEL LLM WORKFLOW
------------------------------------------------------------

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
Next-Token Probabilities
    ↓
Token Selection
    ↓
Generate Next Token
    ↓
Repeat
    ↓
Final Response


------------------------------------------------------------
LLM vs DATABASE
------------------------------------------------------------

Database:

Query
 ↓
Stored Data
 ↓
Result


LLM:

Input
 ↓
Context + Learned Parameters
 ↓
Model Computation
 ↓
Next-Token Prediction
 ↓
Generated Output


------------------------------------------------------------
LLM vs AI AGENT
------------------------------------------------------------

LLM:

User
 ↓
LLM
 ↓
Response


Agent:

User Goal
 ↓
Agent
 ↓
LLM
 ↓
Decision
 ↓
Tool / Action
 ↓
Result
 ↓
LLM
 ↓
Final Result


------------------------------------------------------------
IMPORTANT
------------------------------------------------------------

LLM does NOT automatically have internet/database access.

External capabilities can be provided through tools.

LLM + Tools + Control Flow + State/Memory
                    ↓
                 AI Agent


------------------------------------------------------------
INTERVIEW ANSWER
------------------------------------------------------------

"An LLM is a large-scale AI model trained on massive
amounts of data to learn language patterns. It processes
context and generates text, typically through next-token
prediction."


============================================================
                    END OF CHAPTER 1
============================================================
*/