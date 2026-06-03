# Two-Port Networks

## Definition

A two-port has four terminals: port 1 (input: $V_1$, $I_1$) and port 2 (output: $V_2$, $I_2$).

## Parameter Sets

### Z-Parameters (Open-Circuit Impedance)
$$\begin{pmatrix}V_1\\V_2\end{pmatrix} = \begin{pmatrix}z_{11}&z_{12}\\z_{21}&z_{22}\end{pmatrix}\begin{pmatrix}I_1\\I_2\end{pmatrix}$$

$z_{11} = V_1/I_1|_{I_2=0}$ (input impedance with output open)

### Y-Parameters (Short-Circuit Admittance)
$$\begin{pmatrix}I_1\\I_2\end{pmatrix} = \begin{pmatrix}y_{11}&y_{12}\\y_{21}&y_{22}\end{pmatrix}\begin{pmatrix}V_1\\V_2\end{pmatrix}$$

### h-Parameters (Hybrid — used for transistors)
$$\begin{pmatrix}V_1\\I_2\end{pmatrix} = \begin{pmatrix}h_{11}&h_{12}\\h_{21}&h_{22}\end{pmatrix}\begin{pmatrix}I_1\\V_2\end{pmatrix}$$

$h_{21} = I_2/I_1|_{V_2=0}$ = short-circuit current gain ($\beta$ of BJT)

### ABCD (Transmission) Parameters — Cascade Analysis
$$\begin{pmatrix}V_1\\I_1\end{pmatrix} = \begin{pmatrix}A&B\\C&D\end{pmatrix}\begin{pmatrix}V_2\\-I_2\end{pmatrix}$$

**Cascade connection**: $\mathbf{T}_{total} = \mathbf{T}_1 \mathbf{T}_2 \mathbf{T}_3 \cdots$ (matrix multiply)

## Reciprocity

For reciprocal networks (no dependent sources): $z_{12} = z_{21}$, $y_{12} = y_{21}$, $AD - BC = 1$.

## Input Impedance with Load

$$Z_{in} = \frac{AZ_L + B}{CZ_L + D}$$