export default function WorkExperience() {
  const experiences = [
    {
      title: "Graduate Assistant",
      company: "Stevens Institute of Technology",
      location: "Hoboken, USA",
      date: "June 2024 – Present",
      responsibilities: [
        "Enhanced ID verification using advanced data analytics, enhancing reservation process efficiency",
        "Resolved technical inquiries using IT principles and data analysis, providing data-driven solutions in recreation",
      ],
    },
    {
      title: "Software Engineering Intern",
      company: "HCL Technologies LTD",
      location: "Noida, IND",
      date: "February 2023 – March 2023",
      responsibilities: [
        "Designed crucial features for shopping website using C# and .NET, focusing on performance and maintainability",
        "Utilized Entity Framework for data access, enabling efficient and secure interaction with databases",
        "Created RESTful APIs using ASP.NET Core, and integrated them with front-end applications",
      ],
    },
  ]

  return (
    <section className="space-y-8">
      {experiences.map((exp, index) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-6">
          <h3 className="text-2xl font-semibold text-blue-600 mb-2">{exp.title}</h3>
          <p className="text-lg">
            {exp.company}, {exp.location}
          </p>
          <p className="text-gray-600 mb-4">{exp.date}</p>
          <ul className="list-disc list-inside space-y-2">
            {exp.responsibilities.map((item, itemIndex) => (
              <li key={itemIndex}>{item}</li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  )
}

