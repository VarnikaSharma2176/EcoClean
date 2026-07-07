export const getArticles = async (req, res) => {
  try {
    const articles = [
      {
        id: 1,
        title: "What is E-Waste?",
        description:
          "Electronic waste includes discarded electronic devices such as phones, laptops, televisions, batteries and household appliances.",
      },
      {
        id: 2,
        title: "Why Recycle E-Waste?",
        description:
          "Recycling helps recover valuable materials, reduces pollution and prevents hazardous chemicals from entering the environment.",
      },
      {
        id: 3,
        title: "How EcoLoop Works",
        description:
          "Schedule a pickup, hand over your e-waste to our collector and earn reward points after successful recycling.",
      },
      {
        id: 4,
        title: "Things You Can Recycle",
        description:
          "Mobile phones, laptops, chargers, batteries, televisions, refrigerators, washing machines and more.",
      },
    ];

    res.status(200).json({
      success: true,
      message: "Knowledge articles fetched successfully.",
      data: articles,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getFAQs = async (req, res) => {
  try {
    const faqs = [
      {
        question: "What is e-waste?",
        answer:
          "E-waste refers to discarded electronic and electrical equipment.",
      },
      {
        question: "How do I schedule a pickup?",
        answer:
          "Login as a citizen and create a pickup request from the dashboard.",
      },
      {
        question: "Are reward points free?",
        answer:
          "Yes. Reward points are earned after a pickup is successfully completed.",
      },
      {
        question: "Can I recycle batteries?",
        answer:
          "Yes. Batteries are accepted and should be kept separately while handing them over.",
      },
    ];

    res.status(200).json({
      success: true,
      message: "FAQs fetched successfully.",
      data: faqs,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};