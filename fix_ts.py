import os

path = 'src/data/chemistryContentExt.ts'
with open(path, 'r', encoding='utf-8') as f:
    content = f.read()

# The content is a JS object where keys are strings and values are template literals using backticks.
# We need to escape all backticks INSIDE the template literals.
# A simple way: find all ```diagram and replace with \`\`\`diagram, and same for closing ```.
# Wait, are there other backticks?
# Let's just escape all backticks that are NOT preceded by a backslash,
# EXCEPT the ones at the start and end of the string values.

# Let's just replace ``` with \`\`\`
content = content.replace('```', '\\`\\`\\`')

with open(path, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed chemistryContentExt.ts")
