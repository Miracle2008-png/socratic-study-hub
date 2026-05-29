import re

def fix_file(filepath):
    with open(filepath, 'r', encoding='utf-8') as f:
        content = f.read()

    # We want to safely double all backslashes that are currently single.
    # To do this safely:
    # 1. Replace all double backslashes with a temporary token.
    # 2. Replace all single backslashes with double backslashes.
    # 3. Restore the temporary token back to double backslashes.
    
    # Wait, some formulas like \\sin actually need to be \\\\sin if they were originally \\sin in the template literal?
    # No, if they are already double backslashed, they are correct for JS.
    
    # Actually, a simpler way: just replace single backslashes with double.
    # But wait, what about LaTeX line breaks like `\\`?
    # In my raw string injections, I injected `\\` for line breaks? No, I usually just used newlines.
    # But if there are `\\`, they become `\\\\` which is fine for JS (JS sees `\\`).
    
    # Let's just use a simple regex that finds a backslash that is NOT preceded by a backslash.
    # Actually, `content.replace('\\\\', '<DOUBLE_SLASH>').replace('\\', '\\\\').replace('<DOUBLE_SLASH>', '\\\\')`
    # This guarantees all backslashes become exactly double backslashes!
    # Wait, if there was `\\\\`, it becomes `<DOUBLE_SLASH>`, then `\\\\`. So it stays `\\\\`.
    # If there was `\`, it becomes `\\\\`.
    # This ensures EVERY backslash in the file ends up as part of a double-backslash pair.
    
    content = content.replace('\\\\', '<DOUBLE_SLASH>')
    content = content.replace('\\', '\\\\')
    content = content.replace('<DOUBLE_SLASH>', '\\\\')
    
    with open(filepath, 'w', encoding='utf-8') as f:
        f.write(content)

fix_file('src/data/mathContentExt.ts')
fix_file('src/data/physicsContentExt.ts')

print("Fixed backslashes in both files.")
