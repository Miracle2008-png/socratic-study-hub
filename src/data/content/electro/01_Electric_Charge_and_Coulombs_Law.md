# Electric Charge and Coulomb's Law

Electromagnetism is one of the four fundamental forces of nature. It governs the interactions of electrically charged particles and is responsible for virtually all phenomena encountered in daily life, from the structure of atoms to the transmission of light and the biochemistry of living cells.

Before we can understand complex circuits or electromagnetic waves, we must start with the foundation: static charges and the forces between them.

## 1. Electric Charge

Electric charge is a fundamental, conserved property of matter.
There are two types of charge, historically named by Benjamin Franklin:
*   **Positive (+) Charge:** Carried by protons.
*   **Negative (-) Charge:** Carried by electrons.

### The Fundamental Rule
*   Like charges **repel** each other (positive repels positive; negative repels negative).
*   Opposite charges **attract** each other (positive attracts negative).

### Quantization of Charge
Charge is not a continuous fluid. It is quantized, meaning it exists only in discrete "packets." Every object in the universe has a charge that is an exact integer multiple of the elementary charge, $e$.
$$ e \approx 1.602 \times 10^{-19} \text{ Coulombs (C)} $$
*   Charge of an electron: $-e$
*   Charge of a proton: $+e$

### Conservation of Charge
The total electric charge in an isolated system never changes. You cannot create or destroy net charge. When you rub a balloon on your hair, you are not creating static electricity from nothing; you are physically tearing electrons off the atoms in your hair and moving them to the balloon. Your hair becomes net positive, the balloon becomes net negative, but the total charge remains zero.

## 2. Conductors, Insulators, and Induction

Materials are classified by how easily electrons can move through them:
*   **Conductors (Metals):** The outermost electrons of the atoms are loosely bound and form a "sea" of free electrons that can flow effortlessly through the material.
*   **Insulators (Plastic, Rubber, Glass):** All electrons are tightly bound to their parent atoms. They cannot flow.

### Charging by Induction
You can charge a conductor without ever touching it with another charged object. 
If you bring a negatively charged rod near a neutral metal sphere, the free electrons in the metal are repelled to the far side of the sphere. The side near the rod becomes positively charged. If you then briefly connect a grounding wire to the far side, the repelled electrons flee into the Earth. Cut the wire, remove the rod, and the sphere is now permanently, positively charged!

## 3. Coulomb's Law

In 1785, Charles-Augustin de Coulomb published the mathematical law describing the electrostatic force between two point charges.

For two point charges $q_1$ and $q_2$ separated by a distance $r$, the magnitude of the electrostatic force $F$ is:

$$ F = k_e \frac{|q_1 q_2|}{r^2} $$

### The Constants
*   $k_e$ is **Coulomb's Constant**: $k_e \approx 8.99 \times 10^9 \, \text{N}\cdot\text{m}^2/\text{C}^2$.
*   Coulomb's constant is often written in terms of a more fundamental constant, $\varepsilon_0$ (the **permittivity of free space**):
    $$ k_e = \frac{1}{4\pi\varepsilon_0} $$
    $$ \varepsilon_0 \approx 8.854 \times 10^{-12} \, \text{C}^2/(\text{N}\cdot\text{m}^2) $$

### Vector Form
Because force is a vector, Coulomb's law is rigorously written to include direction:
$$ \mathbf{F}_{12} = k_e \frac{q_1 q_2}{r^2} \hat{\mathbf{r}}_{12} $$
*   $\mathbf{F}_{12}$ is the force *on* charge 1 *by* charge 2.
*   $\hat{\mathbf{r}}_{12}$ is the unit vector pointing from charge 2 to charge 1.
*   If $q_1$ and $q_2$ have the same sign, the product is positive, and the force points away (repulsion). If they have opposite signs, the product is negative, and the force points inward (attraction).

## 4. The Superposition Principle

What happens if you have three, four, or a billion charges?
The electrostatic force obeys the **Principle of Superposition**. The total force on a specific charge $q_1$ is simply the vector sum of all the individual forces exerted by every other charge independently.

$$ \mathbf{F}_{\text{net on 1}} = \mathbf{F}_{21} + \mathbf{F}_{31} + \mathbf{F}_{41} + \dots = \sum_{i=2}^{N} k_e \frac{q_1 q_i}{r_{i1}^2} \hat{\mathbf{r}}_{i1} $$

The presence of a third charge does not alter or "block" the force between the first two. You just calculate them all as if they were isolated pairs and add the vectors together.
