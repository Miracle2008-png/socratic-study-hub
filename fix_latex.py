import re

def fix_latex():
    try:
        with open('src/data/mathContentExt.ts', 'r', encoding='utf-8') as f:
            content = f.read()
            
        # We want to replace all single backslash latex commands with double backslashes in the file text.
        # But only where it is a single backslash. So we match a single backslash not preceded by a backslash.
        # We need to target \lim, \frac, \to, \int, \sin, \cos, \tan, \ln, \implies, \sum, \Delta, \infty
        
        commands = ['lim', 'frac', 'to', 'int', 'sin', 'cos', 'tan', 'ln', 'implies', 'sum', 'Delta', 'infty', 'left', 'right', 'sqrt', 'cdot', 'pm', 'quad']
        
        for cmd in commands:
            # (?<!\\)\\cmd matches \cmd but not \\cmd
            content = re.sub(r'(?<!\\)\\' + cmd + r'\b', r'\\\\' + cmd, content)
            
        # Also fix \( and \) or \[ and \] if any
        # But typically they are not used. 
        
        # Let's write it back
        with open('src/data/mathContentExt.ts', 'w', encoding='utf-8') as f:
            f.write(content)
            
        print("Fixed LaTeX escaping!")
    except Exception as e:
        print(f"Error: {e}")

if __name__ == "__main__":
    fix_latex()
