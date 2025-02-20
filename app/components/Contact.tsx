// // "use client"

// // import { useState } from "react"
// // import { Button } from "@/components/ui/button"
// // import { Input } from "@/components/ui/input"
// // import { Textarea } from "@/components/ui/textarea"

// // export default function Contact() {
// //   const [formData, setFormData] = useState({
// //     name: "",
// //     email: "",
// //     message: "",
// //   })

// //   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
// //     const { name, value } = e.target
// //     setFormData((prevState) => ({
// //       ...prevState,
// //       [name]: value,
// //     }))
// //   }

// //   const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
// //     e.preventDefault()
// //     // Here you would typically send the form data to a server
// //     console.log("Form submitted:", formData)
// //     // Reset form after submission
// //     setFormData({ name: "", email: "", message: "" })
// //   }

// //   return (
// //     <div className="max-w-md mx-auto">
// //       <form onSubmit={handleSubmit} className="space-y-4">
// //         <div>
// //           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
// //             Name
// //           </label>
// //           <Input
// //             type="text"
// //             id="name"
// //             name="name"
// //             value={formData.name}
// //             onChange={handleChange}
// //             required
// //             className="mt-1 block w-full"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
// //             Email
// //           </label>
// //           <Input
// //             type="email"
// //             id="email"
// //             name="email"
// //             value={formData.email}
// //             onChange={handleChange}
// //             required
// //             className="mt-1 block w-full"
// //           />
// //         </div>
// //         <div>
// //           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
// //             Message
// //           </label>
// //           <Textarea
// //             id="message"
// //             name="message"
// //             value={formData.message}
// //             onChange={handleChange}
// //             required
// //             className="mt-1 block w-full"
// //             rows={4}
// //           />
// //         </div>
// //         <Button type="submit" className="w-full">
// //           Send Message
// //         </Button>
// //       </form>
// //     </div>
// //   )
// // }

// "use client"

// import { useState } from "react"
// import { Button } from "@/components/ui/button"
// import { Input } from "@/components/ui/input"
// import { Textarea } from "@/components/ui/textarea"
// import { useToast } from "@/components/ui/use-toast"

// export default function Contact() {
//   const [formData, setFormData] = useState({
//     name: "",
//     email: "",
//     message: "",
//   })
//   const [isSubmitting, setIsSubmitting] = useState(false)
//   const { toast } = useToast()

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target
//     setFormData((prevState) => ({
//       ...prevState,
//       [name]: value,
//     }))
//   }

//   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
//     e.preventDefault()
//     setIsSubmitting(true)

//     try {
//       const formUrl =
//         "https://docs.google.com/forms/d/e/1FAIpQLSfTP1sPytJ7yPTZ2LNPn5Z8tOp6WOb2HHHHa2kYAomaLYzW3w/formResponse"

//       // Create FormData object
//       const formDataObj = new FormData()
//       formDataObj.append("entry.2005620554", formData.name) // Replace with actual entry ID for name
//       formDataObj.append("entry.1045781291", formData.email) // Replace with actual entry ID for email
//       formDataObj.append("entry.1254449994", formData.message) // Replace with actual entry ID for message

//       // Use fetch to submit the form
//       const response = await fetch(formUrl, {
//         method: "POST",
//         mode: "no-cors", // This is required for Google Forms
//         body: formDataObj,
//       })

//       // Since we're using no-cors, we won't get a normal response
//       // So we'll just assume it worked if we get here
//       toast({
//         title: "Message sent!",
//         description: "Thank you for your message. I'll get back to you soon.",
//       })
//       setFormData({ name: "", email: "", message: "" })
//     } catch (error) {
//       toast({
//         title: "Error",
//         description: "Failed to send message. Please try again later.",
//         variant: "destructive",
//       })
//     } finally {
//       setIsSubmitting(false)
//     }
//   }

//   return (
//     <div className="max-w-md mx-auto">
//       <form onSubmit={handleSubmit} className="space-y-4">
//         <div>
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">
//             Name
//           </label>
//           <Input
//             type="text"
//             id="name"
//             name="name"
//             value={formData.name}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//             Email
//           </label>
//           <Input
//             type="email"
//             id="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full"
//           />
//         </div>
//         <div>
//           <label htmlFor="message" className="block text-sm font-medium text-gray-700">
//             Message
//           </label>
//           <Textarea
//             id="message"
//             name="message"
//             value={formData.message}
//             onChange={handleChange}
//             required
//             className="mt-1 block w-full"
//             rows={4}
//           />
//         </div>
//         <Button type="submit" className="w-full" disabled={isSubmitting}>
//           {isSubmitting ? "Sending..." : "Send Message"}
//         </Button>
//       </form>
//     </div>
//   )
// }

