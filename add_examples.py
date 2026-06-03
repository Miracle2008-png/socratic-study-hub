import re
import sys

def inject_examples():
    try:
        with open('src/data/mathContentExt.ts', 'r', encoding='utf-8') as f:
            content = f.read()
    except Exception as e:
        print(f"Error reading: {e}")
        return

    examples = {
        r"## 1. Introduction to the Limit": "\n### Example\nEvaluate $\\lim_{x \\to 2} \\frac{x^2 - 4}{x - 2}$.\n\n**Solution:**\nFactor the numerator: $x^2 - 4 = (x-2)(x+2)$.\nThe expression becomes $\\frac{(x-2)(x+2)}{x-2}$.\nCancel the common term to get $x + 2$.\nNow, substitute $x = 2$: $2 + 2 = 4$.\nThus, the limit is $4$.\n",
        r"## 2. The Derivative \(Differential Calculus\)": "\n### Example\nFind the derivative of $f(x) = x^2$ using the limit definition.\n\n**Solution:**\n$$ f'(x) = \\lim_{h \\to 0} \\frac{(x+h)^2 - x^2}{h} $$\n$$ = \\lim_{h \\to 0} \\frac{x^2 + 2xh + h^2 - x^2}{h} $$\n$$ = \\lim_{h \\to 0} \\frac{2xh + h^2}{h} $$\n$$ = \\lim_{h \\to 0} (2x + h) = 2x $$\n",
        r"## 3. Rules of Differentiation": "\n### Example\nFind the derivative of $f(x) = 3x^4 - 2x^2 + 5x$.\n\n**Solution:**\nUsing the Power Rule on each term:\n$\\frac{d}{dx}(3x^4) = 12x^3$\n$\\frac{d}{dx}(-2x^2) = -4x$\n$\\frac{d}{dx}(5x) = 5$\n\nSo, $f'(x) = 12x^3 - 4x + 5$.\n",
        r"## 4. Derivatives of Transcendental Functions": "\n### Example\nFind the derivative of $y = e^x \\sin(x)$.\n\n**Solution:**\nUse the Product Rule: $(uv)' = u'v + uv'$.\nHere, $u = e^x$ and $v = \\sin(x)$.\n$u' = e^x$ and $v' = \\cos(x)$.\n\n$y' = e^x \\sin(x) + e^x \\cos(x) = e^x(\\sin(x) + \\cos(x))$.\n",
        r"## 5. The Integral \(Integral Calculus\)": "\n### Example\nEvaluate the indefinite integral $\\int 2x \\, dx$.\n\n**Solution:**\nUsing the reverse power rule (add 1 to the exponent and divide by the new exponent):\n$\\int 2x^1 \\, dx = 2 \\left( \\frac{x^2}{2} \\right) + C = x^2 + C$.\n",
        r"## 6. The Fundamental Theorem of Calculus \(FTC\)": "\n### Example\nEvaluate the definite integral $\\int_1^3 2x \\, dx$.\n\n**Solution:**\nFirst, find the antiderivative: $x^2$.\nThen evaluate from 1 to 3:\n$[x^2]_1^3 = (3)^2 - (1)^2 = 9 - 1 = 8$.\n"
    }

    for heading, example in examples.items():
        pattern = re.compile(rf"({heading}.*?)(?=\n## |\n`|\Z)", re.DOTALL)
        
        def repl(m):
            if "### Example" not in m.group(1):
                return m.group(1) + example
            return m.group(1)
            
        content = pattern.sub(repl, content)

    with open('src/data/mathContentExt.ts', 'w', encoding='utf-8') as f:
        f.write(content)

    print("Done injecting examples!")

if __name__ == "__main__":
    inject_examples()
