/*
  Edit this file for routine website updates.

  - Text here is inserted safely as text, not HTML.
  - Use local asset paths such as "assets/photo.jpg" for images.
  - Add/remove domain cards, events, process items, and contact details here.
  - Keep link values as #section, https://..., mailto:..., or tel:...
*/
window.WINCOE_DATA = Object.freeze({
  contact: {
    title: "WIN Centre of Excellence",
    address: [
      "B101, Technology Innovation Park",
      "Indian Institute of Technology Hyderabad",
      "Kandi, Sangareddy, Telangana - 502284"
    ],
    phone: "+91 83310 36133",
    phoneLink: "tel:+918331036133",
    emails: [
      "head@win.coe.iith.ac.in",
      "office@win.coe.iith.ac.in"
    ]
  },
  join: {
    title: "Submit an Interest Form",
    text: "Please include the technical idea, current stage, team details, expected support, and any industry validation already completed.",
    actions: [
      {
        label: "Submit Proposal",
        href: "https://docs.google.com/forms/your-execute-transmission-form-link",
        style: "primary"
      },
      {
        label: "Enquiry",
        href: "https://docs.google.com/forms/your-enquiry-form-link",
        style: "secondary"
      }
    ]
  },
  process: [
    {
      number: "01",
      title: "Identify strong research",
      text: "We work with researchers and students to find ideas with practical value."
    },
    {
      number: "02",
      title: "Build prototypes",
      text: "We support early product development, testing, and technical refinement."
    },
    {
      number: "03",
      title: "Validate with industry",
      text: "We connect teams with partners for field pilots and real user feedback."
    },
    {
      number: "04",
      title: "Move toward impact",
      text: "We help prepare technologies for licensing, startups, and wider adoption."
    }
  ],
  impact: [
    {
      title: "Research Translation",
      text: "Support for converting technical ideas into prototypes, pilots, and usable products."
    },
    {
      title: "Industry Collaboration",
      text: "Structured partnership models for sponsored innovation, validation, and scale-up."
    },
    {
      title: "Technology Transfer",
      text: "Guidance for licensing, IP routes, field deployment, and market readiness."
    }
  ],
  domains: [
    {
      icon: "ai",
      title: "Artificial Intelligence",
      text: "Smart systems that help analyze data, improve decisions, and support automation in healthcare, industry, and research."
    },
    {
      icon: "quantum",
      title: "Quantum Technologies",
      text: "Work in quantum computing, communication, and sensing for future-ready scientific and national capabilities."
    },
    {
      icon: "chip",
      title: "Semiconductors",
      text: "Chip design, devices, electronics, packaging, and testing support for reliable technology platforms."
    },
    {
      icon: "bio",
      title: "Bioengineering",
      text: "Engineering solutions for biology, diagnostics, devices, and useful tools for healthcare and life sciences."
    },
    {
      icon: "health",
      title: "HealthTech",
      text: "Medical devices, diagnostics, digital health tools, and care technologies designed for practical deployment."
    }
  ],
  events: [
    {
      label: "Upcoming Event",
      title: "Symposium on AI in Healthcare & Medical Devices",
      text: "A focused program for researchers, students, clinicians, and industry experts to discuss practical innovation in healthcare and medical technology.",
      featured: true,
      details: {
        Date: "25 October 2026",
        Time: "10:00 AM - 04:00 PM IST",
        Venue: "Academic Block A, IIT Hyderabad"
      }
    },
    {
      label: "Latest Events",
      title: "Innovation Reviews and Partner Meetings",
      text: "Regular reviews with researchers, mentors, and industry partners to shape strong technology proposals."
    },
    {
      label: "Latest Events",
      title: "Student and Faculty Innovation Sessions",
      text: "Interactive sessions that help teams improve problem statements, prototype plans, and validation pathways."
    }
  ],
  gallery: [
    /*
      Add gallery images like this after uploading files into assets/gallery/:
      {
        src: "assets/gallery/event-photo-1.jpg",
        alt: "WIN CoE event photo",
        caption: "Event title or short description"
      }
    */
  ]
});
