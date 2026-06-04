# 10. Applications in Fluid Dynamics

Just as Conformal Mappings can warp Electrostatic fields, they can warp the flow of liquid water.
In ideal 2D fluid dynamics (irrotational and incompressible flow), the fluid velocity is modeled by a Complex Potential function:
$$
\Omega(z) = \phi(x,y) + i \psi(x,y)
$$
*   **$\phi$** is the Velocity Potential (its gradient creates the velocity vectors).
*   **$\psi$** is the Stream Function (the lines of constant $\psi$ are the physical streamlines the water particles travel along).

Because $\Omega(z)$ is an Analytic function, both $\phi$ and $\psi$ are Harmonic, meaning they perfectly obey Laplace's equation!

### Flow Around a Corner
Imagine water flowing through a channel that takes a sharp $90^\circ$ turn.
The fluid flow near that sharp corner is chaotic. But we can solve it instantly using the mapping $w = z^2$.

1.  We know that $w = z^2$ maps the first quadrant (a $90^\circ$ wedge) into the entire upper half-plane ($180^\circ$).
2.  Therefore, it maps our sharp $90^\circ$ pipe corner into a perfectly flat, straight pipe!
3.  The fluid flow in a flat, straight pipe is trivial. The complex potential is simply $\Omega(w) = A w$ (where A is the velocity). The streamlines are perfectly horizontal.
4.  We reverse the transformation by plugging $w = z^2$ into our trivial solution!
    $$
    \Omega(z) = A(z^2) = A(x + iy)^2 = A(x^2 - y^2) + i(2Axy)
    $$
5.  We extract the imaginary part (the Stream Function): $\psi(x,y) = 2Axy$.

If we graph the curves where $2Axy$ is constant, we get perfectly sweeping hyperbolas! 
We just proved, entirely using algebra, that water flowing around a $90^\circ$ sharp corner traces hyperbolic streamlines, and the velocity of the water at the exact corner ($z=0$) must be exactly zero!

### Flow Around a Cylinder
To find the flow of a river around a giant cylindrical pillar, we use the mapping $w = z + \frac{1}{z}$ (the Joukowsky transform).
1.  This maps the outside of a circle into the entire flat upper-half plane.
2.  We apply the trivial horizontal flow solution to the flat plane.
3.  We map it back. 

The resulting complex potential is $\Omega(z) = V \left( z + \frac{1}{z} \right)$.
The imaginary part perfectly traces the streamlines parting and bowing around the circular cylinder. By taking the derivative ($\Omega'(z)$), we can instantly calculate the velocity of the water at every single point on the cylinder's surface!
