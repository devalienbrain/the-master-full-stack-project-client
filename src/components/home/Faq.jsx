import { useEffect, useState } from "react";

const Faq = () => {
  const [faqs, setFaqs] = useState([]);

  // Fetch the FAQs from the JSON file
  useEffect(() => {
    fetch("/faqs.json")
      .then((response) => response.json())
      .then((data) => setFaqs(data))
      .catch((error) => console.error("Error loading FAQs:", error));
  }, []);

  return (
    <div className="py-10 px-5 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      {/* Title */}
      <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Frequently Asked Questions</h2>
      <h3 className="text-lg text-center text-gray-500 mb-8">
        How the website works
      </h3>

      {/* FAQ List */}
      <div className="space-y-4">
        {faqs.map((faq, index) => (
          <div
            key={index}
            tabIndex="0"
            className="collapse collapse-arrow border border-gray-200 rounded-lg"
          >
            <div className="collapse-title text-lg font-medium">
              {faq.question}
            </div>
            <div className="collapse-content">
              <p className="text-gray-600">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Faq;
