# Conic Sections

## 1. Parabola
A parabola is the locus of a point whose distance from a fixed point (focus) is equal to its distance from a fixed line (directrix).

**Standard Forms (Vertex at Origin):**
1. Vertical axis: $ x^2 = 4ay $
   - Focus: $ (0, a) $
   - Directrix: $ y = -a $
2. Horizontal axis: $ y^2 = 4ax $
   - Focus: $ (a, 0) $
   - Directrix: $ x = -a $

**Example 1:**
Find the focus, directrix, and vertex of the parabola $ x^2 - 4x - 8y + 12 = 0 $.

*Step 1: Complete the square.*
$$ x^2 - 4x = 8y - 12 $$
$$ x^2 - 4x + 4 = 8y - 12 + 4 $$
$$ (x - 2)^2 = 8y - 8 $$
$$ (x - 2)^2 = 8(y - 1) $$

*Step 2: Identify parameters.*
Vertex: $ (h, k) = (2, 1) $
$ 4a = 8 \implies a = 2 $
Axis is vertical, opening upwards.
Focus: $ (h, k+a) = (2, 3) $
Directrix: $ y = k - a \implies y = -1 $

## 2. Ellipse
Locus of points where the sum of distances to two foci is constant $ 2a $.

**Standard Form:**
$$ \frac{x^2}{a^2} + \frac{y^2}{b^2} = 1 \quad (a > b > 0) $$
- Vertices: $ (\pm a, 0) $
- Foci: $ (\pm c, 0) $ where $ c^2 = a^2 - b^2 $
- Eccentricity: $ e = \frac{c}{a} $

**Example 2:**
Determine the foci and eccentricity of $ 9x^2 + 16y^2 = 144 $.

*Step 1: Convert to standard form.*
Divide by 144:
$$ \frac{x^2}{16} + \frac{y^2}{9} = 1 $$

*Step 2: Identify $ a $ and $ b $.*
$ a^2 = 16 \implies a = 4 $
$ b^2 = 9 \implies b = 3 $

*Step 3: Calculate $ c $ and $ e $.*
$$ c^2 = 16 - 9 = 7 \implies c = \sqrt{7} $$
Foci: $ (\pm \sqrt{7}, 0) $
Eccentricity: $ e = \frac{\sqrt{7}}{4} $

## 3. Hyperbola
Locus of points where the absolute difference of distances to two foci is constant $ 2a $.

**Standard Form:**
$$ \frac{x^2}{a^2} - \frac{y^2}{b^2} = 1 $$
- Vertices: $ (\pm a, 0) $
- Foci: $ (\pm c, 0) $ where $ c^2 = a^2 + b^2 $
- Asymptotes: $ y = \pm \frac{b}{a} x $

**Example 3:**
Find the asymptotes of $ \frac{y^2}{9} - \frac{x^2}{4} = 1 $.

*Step 1: Identify parameters.*
This hyperbola opens vertically.
$ a^2 = 9 \implies a = 3 $
$ b^2 = 4 \implies b = 2 $

*Step 2: Write asymptote equations.*
For a vertical hyperbola $ \frac{y^2}{a^2} - \frac{x^2}{b^2} = 1 $, asymptotes are $ y = \pm \frac{a}{b} x $.
$$ y = \pm \frac{3}{2} x $$
