# 11. Applications: Vibrations and Google PageRank

Beyond data compression, eigenvalues govern the fundamental behavior of dynamical systems.

### Application 1: Mechanical Vibrations
Imagine a car driving over a bump. The suspension system consists of multiple springs and shock absorbers (dampers) connected to the wheels and the chassis. 
This is modeled as a massive system of coupled differential equations: $M\mathbf{x}'' = -K\mathbf{x}$.

To solve this, engineers guess a solution of the form $\mathbf{x} = \mathbf{v}e^{i\omega t}$ (an oscillating wave). 
Plugging this into the differential equation transforms the calculus problem directly into an eigenvalue problem:
$$
K\mathbf{v} = \omega^2 M\mathbf{v}
$$

*   The **Eigenvalues ($\omega^2$)** dictate the Natural Frequencies (the pitch of the vibrations).
*   The **Eigenvectors ($\mathbf{v}$)** dictate the Mode Shapes (the physical geometric shape the car bends into as it vibrates).

If the car drives over a bump at exactly the natural frequency of a dominant eigenvalue, the system undergoes catastrophic Resonance. The math is identical for designing skyscrapers to withstand earthquakes.

### Application 2: Google PageRank Algorithm
In the late 1990s, the internet was a mess. Search engines just looked for keywords. 
Larry Page and Sergey Brin realized they could rank the importance of a webpage based on how many *other* important webpages linked to it. 

They modeled the entire internet as a massive Transition Matrix $A$. If Page 1 links to Page 2, they put a probability in the matrix. 
If a random user clicks links endlessly, what is the probability they end up on a specific page? We must find the steady-state of the system as time goes to infinity ($A^{\infty}$).

As we learned on page 7, the steady-state of a Markov chain is exactly the **Eigenvector corresponding to the Eigenvalue $\lambda = 1$**.

The original Google algorithm literally just calculated the dominant Eigenvector of a multi-billion by multi-billion matrix. The value of each component inside that single eigenvector became the official "PageRank" score of every website on the internet!
