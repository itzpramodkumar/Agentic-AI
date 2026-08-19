/*
============================================================
                    CHAPTER 5 — TOKENS
============================================================


------------------------------------------------------------
DEFINITION — HINDI
------------------------------------------------------------

Token text ka ek chhota unit hota hai jise a Language
Model input aur output ko process karne ke liye use karta hai.

Simple:

LLM text ko directly process nahi karta.
Text ko tokens mein represent karke process kiya jata hai.


------------------------------------------------------------
DEFINITION — ENGLISH
------------------------------------------------------------

A token is a unit of text processed by a language model
as part of its input and output.


------------------------------------------------------------
IMPORTANT
------------------------------------------------------------

Token ≠ Word
Token ≠ Character


A token can represent:

- Complete word
- Part of a word
- Punctuation
- Other text units


Example:

"I love AI"

Conceptually:

"I"
" love"
" AI"


NOTE:

Exact tokens tokenizer/model par depend karte hain.


------------------------------------------------------------
TOKEN vs WORD
------------------------------------------------------------

Token hamesha complete word nahi hota.

Example:

"unbelievable"

Conceptually:

"un"
"believ"
"able"

Ek word multiple tokens mein split ho sakta hai.


IMPORTANT:

One word ≠ One token


------------------------------------------------------------
TOKEN vs CHARACTER
------------------------------------------------------------

Example:

"CAT"

Characters:

C
A
T

Lekin tokenizer ke according:

"CAT"

ek single token bhi ho sakta hai.


Therefore:

Character ≠ Token
Word      ≠ Token


------------------------------------------------------------
WHY DO WE NEED TOKENS?
------------------------------------------------------------

LLM neural network ke saath numerical representation
par kaam karta hai.

High-level flow:

Human Text
    ↓
Tokens
    ↓
Token IDs
    ↓
Numerical Representation
    ↓
Embeddings
    ↓
Transformer
    ↓
Output


------------------------------------------------------------
TOKEN ID
------------------------------------------------------------

Tokens ko vocabulary mein numerical IDs assign ki
ja sakti hain.

Example:

"Hello"  → 101
" AI"    → 102
" world" → 103

These IDs are only examples.


Example:

"Hello AI world"

    ↓

["Hello", " AI", " world"]

    ↓

[101, 102, 103]


NOTE:

Actual token IDs tokenizer/model ke according different
honge.


------------------------------------------------------------
TOKENIZATION vs TOKEN
------------------------------------------------------------

TOKEN:

→ Text ka unit


TOKENIZATION:

→ Text ko tokens mein convert karne ka process


Example:

"I love AI"

    ↓

Tokenization

    ↓

["I", " love", " AI"]


Remember:

Tokenization = Process
Token        = Unit / Result


------------------------------------------------------------
INPUT TOKENS
------------------------------------------------------------

User ke prompt/request se aane wale tokens ko
Input Tokens kaha jata hai.


Example:

User:

"Explain Agentic AI."


User Prompt
    ↓
Tokenization
    ↓
Input Tokens
    ↓
LLM


------------------------------------------------------------
OUTPUT TOKENS
------------------------------------------------------------

LLM jo response generate karta hai uske tokens ko
Output Tokens kaha jata hai.


Example:

Input:

"Explain Agentic AI."


Output:

"Agentic AI is an AI system..."


Generated tokens
    ↓
Output Tokens


------------------------------------------------------------
TOKENS & COST
------------------------------------------------------------

LLM API usage mein tokens important hote hain.

More Input Tokens
        +
More Output Tokens
        ↓
More Processing
        ↓
Potentially Higher API Cost


Example:

Input  = 500 tokens
Output = 1000 tokens

Total:

500 + 1000 = 1500 tokens


NOTE:

Actual pricing provider aur model ke according
different hoti hai.


------------------------------------------------------------
TOKENS & CONTEXT WINDOW
------------------------------------------------------------

Context window ko tokens ke terms mein measure kiya jata hai.

Context mein include ho sakta hai:

- System instructions
- User prompt
- Conversation history
- RAG context
- Tool results


Example:

User Prompt
    +
Conversation History
    +
RAG Context
    +
Tool Result
        ↓
    Context
        ↓
      Tokens
        ↓
  Context Window


IMPORTANT:

Agentic AI mein unnecessary context tokens badhne se:

More Tokens
    ↓
More Cost
    ↓
More Processing
    ↓
Possible Latency Increase


------------------------------------------------------------
REAL-WORLD AGENT EXAMPLE
------------------------------------------------------------

User:

"Employee ID 105 ki last 3 months ki attendance
check karke report banao."


High-level:

User Prompt
    ↓
Input Tokens
    ↓
LLM
    ↓
Tool Call
    ↓
Database
    ↓
Attendance Data
    ↓
LLM
    ↓
Output Tokens
    ↓
Final Report


IMPORTANT:

Tool results bhi model ke context ka part ban sakte hain.


------------------------------------------------------------
JAVASCRIPT BASIC SIMULATION
------------------------------------------------------------

const text = "I love Agentic AI";

const tokens = text.split(" ");

console.log(tokens);


Output:

[ 'I', 'love', 'Agentic', 'AI' ]


IMPORTANT:

split(" ") REAL LLM TOKENIZER nahi hai.

Ye sirf learning ke liye basic simulation hai.


Real tokenizer:

Text
    ↓
Tokenizer
    ↓
Tokens
    ↓
Token IDs


Real tokenizer ko hum Chapter 6 — Tokenization mein
properly implement karenge.


------------------------------------------------------------
JAVASCRIPT CODING TASK
------------------------------------------------------------

Task:

Ek function banao jo basic space-based token count
return kare.

Example:

function countTokens(text) {
    // code
}

console.log(countTokens("I love Agentic AI"));


Expected Output:

4


NOTE:

Ye real LLM token count nahi hai.

Ye sirf educational simulation hai.


------------------------------------------------------------
IMPORTANT POINTS
------------------------------------------------------------

1. Token text ka basic processing unit hai.

2. Token hamesha complete word nahi hota.

3. Ek word multiple tokens mein split ho sakta hai.

4. Token character ke equal nahi hota.

5. Tokenization text ko tokens mein convert karne ka process hai.

6. Tokens ko vocabulary mein numerical IDs assign ki ja sakti hain.

7. Input tokens user/request side se aate hain.

8. Output tokens LLM generate karta hai.

9. Tokens context window ko consume karte hain.

10. Tokens API usage/cost ko affect kar sakte hain.

11. RAG context aur tool results bhi tokens consume kar sakte hain.

12. Exact tokenization tokenizer/model par depend karti hai.


------------------------------------------------------------
🎤 IBM MOST IMPORTANT INTERVIEW QUESTIONS
------------------------------------------------------------


Q1. What is a token?

ANSWER:

A token is a unit of text processed by a language model
as part of its input or output.


------------------------------------------------------------

Q2. Is a token always equal to a word?

ANSWER:

No. A token can represent a complete word, part of a word,
punctuation, or other text units depending on the tokenizer.


------------------------------------------------------------

Q3. What is the difference between token and tokenization?

ANSWER:

A token is a unit of text, while tokenization is the process
of converting text into tokens.


------------------------------------------------------------

Q4. What are input tokens and output tokens?

ANSWER:

Input tokens are the tokens sent to the model as part of
the request/context, while output tokens are the tokens
generated by the model in its response.


------------------------------------------------------------

Q5. Why are tokens important in LLMs?

ANSWER:

Tokens are the basic units used by LLMs to process text.
They also affect context usage, processing, latency and
commonly API cost.


------------------------------------------------------------

Q6. How are tokens related to context window?

ANSWER:

A model's context window is measured in tokens. The prompt,
conversation history, retrieved RAG context and tool results
can all consume the available context.


------------------------------------------------------------

Q7. Why is token count important in Agentic AI?

ANSWER:

Agents may repeatedly send prompts, conversation history,
RAG context and tool results to the LLM. Excessive tokens
can increase cost, latency and context usage.


------------------------------------------------------------

Q8. Is tokenization the same for every LLM?

ANSWER:

No. Tokenization depends on the tokenizer and the model.


------------------------------------------------------------

Q9. How can tokens affect the cost of an LLM application?

ANSWER:

LLM providers commonly calculate usage based on input and
output tokens. Therefore, more tokens can result in higher
API usage cost.


------------------------------------------------------------

Q10. Can one word contain multiple tokens?

ANSWER:

Yes. A word can be divided into multiple tokens depending
on the tokenizer.


------------------------------------------------------------
                    CHAPTER 5 COMPLETE
------------------------------------------------------------

NEXT CHAPTER:

CHAPTER 6 — TOKENIZATION

Next topics:

- Tokenization
- How tokenizer works
- Vocabulary
- Subword Tokenization
- BPE
- Token IDs
- Real JavaScript tokenizer
- Practical Tokenization
- IBM Interview Questions

============================================================
*/