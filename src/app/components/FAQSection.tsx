export default function FAQSection() {
    const faqs = [
        {
            question: "¿Cuál es el tiempo promedio de resolución de casos?",
            answer: "El tiempo varía según la complejidad del caso..."
        },
    ]

    return (
        <section className="bg-light py-16">
            <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Preguntas Frecuentes</h2>
                <div className="max-w-3xl mx-auto space-y-6">
                    {faqs.map((faq, index) => (
                        <div key={index} className="border rounded-lg p-6">
                            <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                            <p className="text-gray-600">{faq.answer}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}