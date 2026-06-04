# 7. Calculating 2x2 and 3x3 Determinants

How do we actually calculate this magical scalar number?

### The 2x2 Determinant
For a $2\times2$ matrix, the formula is simple. You multiply the main diagonal (top-left to bottom-right) and subtract the anti-diagonal.

$$ \det \begin{pmatrix} a & b \\ c & d \end{pmatrix} = \begin{vmatrix} a & b \\ c & d \end{vmatrix} = ad - bc $$

**Example:**
$$ \begin{vmatrix} 4 & -2 \\ 3 & 5 \end{vmatrix} = (4)(5) - (-2)(3) = 20 - (-6) = 26 $$

### The 3x3 Determinant (Cofactor Expansion)
For a $3\times3$ matrix, we must break it down into smaller $2\times2$ determinants. This process is called **Expansion by Cofactors**. 

Let's expand across the very first row. 
1. Take the first number ($a$). Mentally cross out its entire row and column. You are left with a small $2\times2$ square. Find its determinant.
2. Take the second number ($b$). Cross out its row and column. Find the determinant of the remaining numbers. **CRITICAL: You must make this term negative!** The signs alternate $(+, -, +, -, \dots)$.
3. Take the third number ($c$). Cross out its row and column. Find the determinant of the remaining numbers.

$$ \begin{vmatrix} a & b & c \\ d & e & f \\ g & h & i \end{vmatrix} = a \begin{vmatrix} e & f \\ h & i \end{vmatrix} - b \begin{vmatrix} d & f \\ g & i \end{vmatrix} + c \begin{vmatrix} d & e \\ g & h \end{vmatrix} $$

$$ = a(ei - fh) - b(di - fg) + c(dh - eg) $$

### The Pro-Tip: Expanding along Zeros
You do not have to expand across the top row. The math works perfectly no matter which row or column you choose to expand across, as long as you respect the alternating checkerboard of plus and minus signs:
$$ \begin{matrix} + & - & + \\ - & + & - \\ + & - & + \end{matrix} $$

If you see a row or column that is mostly zeros, expand across that one! The zeros will multiply against the complicated $2\times2$ determinants and wipe them out, saving you massive amounts of calculation time.
