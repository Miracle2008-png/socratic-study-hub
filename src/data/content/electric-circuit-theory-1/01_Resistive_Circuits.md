# Resistive Circuits

## Ohm's Law
$$v = iR,\quad G = \frac{1}{R}\quad\text{(siemens, S)}$$

## Series Resistors
$$R_{eq} = R_1 + R_2 + \cdots + R_n$$

Voltage divider:
$$v_k = v_s \frac{R_k}{R_1 + R_2 + \cdots + R_n}$$

## Parallel Resistors
$$\frac{1}{R_{eq}} = \frac{1}{R_1} + \frac{1}{R_2} + \cdots + \frac{1}{R_n}$$

Two resistors: $R_{eq} = \dfrac{R_1 R_2}{R_1 + R_2}$

Current divider ($R_1 \| R_2$):
$$i_1 = i_s \frac{R_2}{R_1+R_2},\quad i_2 = i_s \frac{R_1}{R_1+R_2}$$

## Wye–Delta (Y–Δ) Transformation

**Delta → Wye**:
$$R_1 = \frac{R_b R_c}{R_a+R_b+R_c},\quad R_2 = \frac{R_a R_c}{R_a+R_b+R_c},\quad R_3 = \frac{R_a R_b}{R_a+R_b+R_c}$$

**Wye → Delta**:
$$R_a = \frac{R_1 R_2 + R_2 R_3 + R_3 R_1}{R_1}$$

## Worked Example

$V_s = 12$ V, $R_1 = 4\,\Omega$, $R_2 = 8\,\Omega$ in parallel, feeding $R_3 = 2\,\Omega$ in series.

$R_{23} = \frac{4\times8}{4+8} = 2.67\,\Omega$, $R_{total} = 2 + 2.67 = 4.67\,\Omega$

$I = 12/4.67 = 2.57$ A,  $V_{R1} = 2.57\times2 = 5.14$ V