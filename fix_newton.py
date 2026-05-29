filepath = 'src/data/physicsContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

# Fix the broken string literal
content = content.replace("'Newton\\\\'s Laws': `", "\"Newton's Laws\": `")

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)
print("Fixed syntax error")
