const faqItems = [
    {
      question: "What is Next.js?",
      answer:
        "Next.js is a React framework for production that provides hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more.",
    },
    {
      question: "How do I use CSS Modules in Next.js?",
      answer:
        "You create a `.module.css` file, import it into your component, and apply styles via the imported object. This scopes styles locally by default.",
    },
    {
      question: "Can I make the FAQ open multiple items at once?",
      answer:
        "The current implementation allows only one open item at a time. You can modify the logic to support multiple open items if needed.",
    },
  ];

  export default faqItems;