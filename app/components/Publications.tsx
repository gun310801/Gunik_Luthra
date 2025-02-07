export default function Publications() {
  const publications = [
    {
      title: "Comparison of ML Algorithms on Colour Quantization Techniques",
      conference: "2022 IEEE International Conference",
      location: "Bhopal, India",
      pages: "pp. 1-10",
      doi: "10.1109/CCET56606.2022.10080406",
    },
    {
      title: "Road Accident Monitoring System and Dynamic Insurance Pricing Using Fog Computing",
      conference: "2022 International Conference on I-SMAC",
      location: "Dharan, Nepal",
      pages: "pp. 485-490",
      doi: "10.1109/I-SMAC55078.2022.9987333",
    },
  ]

  return (
    <section className="space-y-8">
      {publications.map((pub, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">{pub.title}</h3>
          <p className="mb-1">
            {pub.conference}, {pub.location}
          </p>
          <p className="mb-1">{pub.pages}</p>
          <p className="text-gray-600">DOI: {pub.doi}</p>
        </div>
      ))}
    </section>
  )
}

