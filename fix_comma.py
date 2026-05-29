filepath = 'src/data/mathContentExt.ts'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('Abstract Algebra!\n  \'Sequences', 'Abstract Algebra!\n`,\n\n  \'Sequences')

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(content)

print("Fixed comma.")
