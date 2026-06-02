# Model order reduction

Model order reduction (MOR) is a technique for reducing the computational complexity of mathematical models in numerical simulations. As such it is closely related to the concept of metamodeling, with applications in all areas of mathematical modelling.

## Methods
Contemporary model order reduction techniques can be broadly classified into 5 classes:

Proper orthogonal decomposition methods.

Reduced basis methods.

Balancing methods

Simplified physics or operational based reduction methods.

Nonlinear and manifold model reduction methods.

The simplified physics approach can be described to be analogous to the traditional mathematical modelling approach, in which a less complex description of a system is constructed based on assumptions and simplifications using physical insight or otherwise derived information. However, this approach is not often the topic of discussion in the context of model order reduction as it is a general method in science, engineering, and mathematics.

Proper orthogonal decomposition, reduced basis, and balancing methods fall into the category of projection-based reduction. Projection-based reduction relies on the projection of either the model equations or the solution onto a basis of reduced dimensionality compared to the original solution space. Methods that also fall into this class but are perhaps less common are:

Proper generalized decomposition

Matrix interpolation

Transfer function interpolation

Piecewise tangential interpolation

Loewner framework

(Empirical) cross Gramian

Krylov subspace methods

Nonlinear and manifold model reduction methods derive nonlinear approximations on manifolds and so can achieve higher accuracy with the same number of degrees of freedom than traditional methods that obtain linear approximations in subspaces. Building on nonlinear approximations is essential for efficiently reducing certain problem classes such as wave problems and advection-dominated problems in computational fluid dynamics. The nature and principles underlying nonlinear model reduction methods are broad and include template-based methods,

the use of neural networks and online adaptive spaces.

There are also nonintrusive model reduction methods that learn reduced models from data without requiring knowledge about the governing equations and internals of the full, high-fidelity model. Nonintrusive methods learn a low-dimensional approximation space or manifold and the reduced operators that represent the reduced dynamics from data. Methods that are non-intrusive include:

Dynamic mode decomposition 

Operator inference 

Loewner framework 

## Implementations
RBmatlab: A MATLAB library containing all reduced simulation approaches for linear and nonlinear, affine or arbitrarily parameter dependent evolution problems with finite element, finite volume or local discontinuous Galerkin discretizations.

Model Reduction inside ANSYS: implements a Krylov-based model order reduction for multiphysical finite element models in Ansys. Model simplification via Model Reduction inside Ansys is suitable for optimization strategies in component development as well as for integrating compact models into an overall system simulation in the fields of electronics, automotive or microsystems. Despite reduction, the examination parameters are retained, which means fast results can be achieved with regards to designs and system simulations.

pyMOR: pyMOR is a software library for building model order reduction applications with the Python programming language. Its main focus lies on the application of reduced basis methods to parameterized partial differential equations. All algorithms in pyMOR are formulated in terms of abstract interfaces for seamless integration with external high-dimensional PDE solvers. Moreover, pure Python implementations of finite element and finite volume discretizations using the NumPy/SciPy scientific computing stack are provided for getting started quickly.

emgr: Empirical Gramian Framework [1]. Empirical gramians can be computed for linear and nonlinear control systems for purposes of model order reduction, uncertainty quantification or system identification. The emgr framework is a compact open source toolbox for gramian-based model reduction and compatible with OCTAVE and MATLAB.

KerMor: An object-oriented MATLAB© library providing routines for model order reduction of nonlinear dynamical systems. Reduction can be achieved via subspace projection and approximation of nonlinearities via kernels methods or DEIM. Standard procedures like the POD-Greedy method are readily implemented as well as advanced a-posteriori error estimators for various system configurations. KerMor also includes several working examples and some demo files to quickly get familiarized with the provided functionality.

JaRMoS: JaRMoS stands for "Java Reduced Model Simulations" and aims to enable import and simulation of various reduced models from multiple sources on any java-capable platform. So far support for RBmatlab, KerMor and rbMIT reduced models is present, where we can only import the rbMIT models that have previously been published with the rbAppMIT Android application. Extensions so far are a desktop-version to run reduced models and initial support for KerMor kernel-based reduced models is on the way.

MORLAB: Model Order Reduction Laboratory. This toolbox is a collection of MATLAB/OCTAVE routines for model order reduction of linear dynamical systems based on the solution of matrix equations. The implementation is based on spectral projection methods, e.g., methods based on the matrix sign function and the matrix disk function.

Dune-RB: A module for the Dune library, which realizes C++ template classes for use in snapshot generation and RB offline phases for various discretizations. Apart from single-core algorithms, the package also aims at using parallelization techniques for efficient snapshot generation.

libROM: Collection of C++ classes that compute model order reduction and hyper-reduction  for systems of partial and ordinary differential equations. libROM includes scalable and parallel, adaptive methods for proper orthogonal decomposition, parallel, non-adaptive methods for hyper-reduction, and randomized singular value decomposition. libROM also includes the dynamic mode decomposition capability. libROM has physics-informed greedy sampling capability.

Pressio: Pressio is an open-source project aimed at alleviating the intrusive nature of projection-based reduced-order models for large-scale codes. The core of the project is a header-only C++ library that leverages generic programming to interface with shared or distributed memory applications using arbitrary data-types. Pressio provides numerous functionalities and solvers for performing model reduction, such as Galerkin and least-squares Petrov–Galerkin projections. The Pressio ecosystem also offers: (1) pressio4py, a Python binding library for ease of prototyping, (2) pressio-tutorials, a library also offering end-to-end demos that one can easily play with, which can be found at https://pressio.github.io/pressio-tutorials/, (3) pressio-tools, a library for large-scale SVD, QR and sample mesh, and (4) pressio-demoapps, a suite of 1d, 2d and 3d demo applications for testing ROMs and hyper-reduction.

PyDMD: PyDMD is a Python package that implements data-driven model order reduction based on Dynamic Mode Decomposition (DMD), an algorithm developed by Schmid. DMD is used to analyze the dynamics of nonlinear systems and relies solely on high-fidelity measurements, making it an equation-free algorithm.
