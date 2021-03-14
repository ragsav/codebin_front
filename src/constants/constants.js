const Constants = Object.freeze({
  // HOST: "http://localhost:3000/",
  HOST: "https://codebin4u.web.app/",
  // HOST: "https://copybin-5de5c.web.app/",
  SERVERHOST: "https://copybinback.herokuapp.com",

  WEBSITE: "Code>Bin",

  ENCRYPTDECRYPTHEADING: "Encrypt/Decrypt",
  LINEARALGEBRA: "Linear>Algebra",

  HOME: "Sections",
  ABOUT: "About",

  NUMBERTHEORY: "Number>Theory",
  DATASTRUCTURE: "Data>Structrues",
  ALGORITHM: "Algorithms",
  STUDY: "Study>material",
  MOREPRODUCTS: "More utilities",
  DEFAULTTHEME: "monokai",
  DEFAULTMODE: "javascript",

  THEMES: [
    "monokai",
    "github",
    "tomorrow",
    "kuroir",
    "twilight",
    "xcode",
    "textmate",
    "solarized_dark",
    "solarized_light",
    "terminal",
  ],
  MODES: [
    "javascript",
    "java",
    "python",
    "xml",
    "ruby",
    "sass",
    "markdown",
    "mysql",
    "json",
    "html",
    "handlebars",
    "golang",
    "csharp",
    "elixir",
    "typescript",
    "css",
  ],

  TERTIARY: "#fff",
  PRIMARY: "#ead9ff",
  SECONDARY: "#5c4e6e",
  MONOKAI: "#5c4e6e",
  HEADING: "#fff",
  MONOKAILIGHT: "#a3a3a3",
  ARRAYCOLOR: "#76D053",
  ARRAYCOMPARECOLOR: "yellow",
  ARRAYSWAPCOLOR: "red",
  ARRAYOKCOLOR: "blue",
  WIDTH: "940px",
  NTLIST: [
    {
      name: "Prime factors",
      key: "prime_factors",
    },
    {
      name: "Exponential Mod",
      key: "exponential_mod",
    },

    {
      name: "Jacobi Symbol",
      key: "jacobi_symbol",
    },
    {
      name: "Euler Criterion",
      key: "euler_criterion",
    },
    {
      name: "Euler Psuedoprime",
      key: "euler_psuedoprime",
    },
    {
      name: "Jacobi-Euler Psuedoprime",
      key: "jacobi_euler_psuedoprime",
    },
    {
      name: "Fermat's little theorum",
      key: "fermat_little_theorum",
    },
    {
      name: "Fermats mod",
      key: "fermat_mod",
    },
    {
      name: "Fermat's Psuedoprime",
      key: "fermat_psuedoprime",
    },
    {
      name: "Euler's Totient",
      key: "euler_totient",
    },
    {
      name: "Euler Fermat Theorum",
      key: "euler_fermat_theorum",
    },
    {
      name: "Pollard Rho",
      key: "pollard_rho",
    },
    {
      name: "Fermat's Factorization",
      key: "fermat_factorization",
    },
  ],
  PRODUCTS: [
    {
      name: "Link Generator",
      key: "link_generator",
    },
    {
      name: "Number Theory",
      key: "nt",
    },
    {
      name: "Cryptography",
      key: "cryptography",
    },
    {
      name: "Encrypt/Decrypt",
      key: "encrypt_decrypt",
    },
    {
      name: "Linear Algebra",
      key: "linear_algebra",
    },
  ],
  LALIST: [
    {
      name: "Matrix Determinant",
      key: "matrix_determinant",
    },
    {
      name: "Matrix Inverse",
      key: "matrix_inverse",
    },
    {
      name: "Matrix Multiplication",
      key: "matrix_multiplication",
    },
    {
      name: "Matrix Eigen Vectors",
      key: "matrix_eigen",
    },
    {
      name: "Solving Simultaneous Linear Equations",
      key: "mat_linear_system",
    },
  ],
  DSLIST: [
    {
      name: "Stack",
      key: "stack",
    },
    {
      name: "Queue",
      key: "queue",
    },
    {
      name: "Linked List",
      key: "matrix_determinant",
    },
    {
      name: "Map",
      key: "matrix_determinant",
    },
    {
      name: "Tree",
      key: "matrix_determinant",
    },
  ],

  ALGLIST: [
    {
      name: "Sorting Algorithms",
      key: "sorting",
      algorithms: [
        { name: "Bubble Sort", key: "bubble" },
        { name: "Selection Sort", key: "selection" },
        { name: "Insertion Sort", key: "insertion" },
        { name: "Quick Sort", key: "quick" },
        { name: "Merge Sort", key: "merge" },
        { name: "Heap Sort", key: "heapsort" },
      ],
    },

    {
      name: "Searching Algorithms",
      key: "searching",
      algorithms: [
        { name: "Binary Search", key: "binary_search" },
        { name: "Linear Search", key: "linear_search" },
      ],
    },
  ],
  PRODUCTS: [
    {
      name: "Link generator",
      key: "https://copybin4u.web.app/",
    },
    {
      name: "Encrypt/Decrypt file",
      key: "https://copybin4u.web.app/encrypt_decrypt",
    },
  ],

  SUBJECTS: [
    { name: "Data Structres (DS)", key: "ds" },
    { name: "Algorithms", key: "alg" },
    { name: "Database Management systems (DBMS)", key: "dbms" },
    { name: "Object Oriented Programming (OOPs)", key: "oop" },
    { name: "Digital Circuits and Microprocessors (DCMP)", key: "dcmp" },
    { name: "Network Theory (NT)", key: "network" },
    { name: "Introduction to Web Programming (IWP)", key: "iwp" },
    { name: "Advanced Web Programming (AWP)", key: "awp" },
  ],
});

export default Constants;
