const portfolioData = {
  unitCurriculum: [
    "C Programming & Structured Problem Solving",
    "Circuit Theory & Network Analysis (AC/DC Wiring)",
    "Electrical Machines, Transformers & Power Systems",
    "Analog & Digital Electronics / Copper-Plate PCB Prototyping",
    "Wave Modulation & Telecommunications Principles",
    "Mechanics of Machines & Fluid Hydrodynamics",
    "Relational Database Management (SQL / MySQL) & IT Systems"
  ],

  certifications: [
    "Certified in C Programming",
    "Engineering CAD & Simulation [AutoCAD Electrical, MATLAB & Simulink]",
    "Web & Database Development [HTML5, CSS3, JavaScript, Node.js & MySQL]",
    "Hardware & Circuit Diagnostics [Oscilloscopes, Signal Generators & Wiring]",
    "Industrial Attachment Lab Reports [Wave Modulation, Machines & Hydrodynamics]",
    "Remote IT Support & Virtual Assistance [Upwork, DataAnnotation & Toloka]"
  ],

  skills: [
    { name: "C Language", code: "C", color: "#2563eb" },
    { name: "SQL / MySQL", code: "SQL", color: "#1d4ed8" },
    { name: "HTML5", code: "H5", color: "#e63946" },
    { name: "CSS3", code: "C3", color: "#3b82f6" },
    { name: "JavaScript", code: "JS", color: "#eab308" },
    { name: "Node.js", code: "ND", color: "#10b981" },
    { name: "AutoCAD Elec", code: "CAD", color: "#dc2626" },
    { name: "MATLAB", code: "MAT", color: "#d97706" },
    { name: "Simulink", code: "SIM", color: "#2563eb" },
    { name: "Circuitry", code: "PCB", color: "#059669" },
    { name: "IT / VA", code: "IT", color: "#111827" }
  ],

  webProjects: [
    {
      title: "Asili Sauna (Eldoret)",
      tag: "HTML • CSS • JSON • Netlify",
      tagColor: "#3b82f6",
      desc: "Designed and built a commercial website for Asili Sauna with responsive mobile performance."
    },
    {
      title: "Little Sonnis Blooms",
      tag: "Frontend • Responsive Web",
      tagColor: "#10b981",
      desc: "Created a clean, fast-loading business showcase website."
    },
    {
      title: "Mayers Sports Academy",
      tag: "Multi-Discipline Platform",
      tagColor: "#eab308",
      desc: "Developing a multi-discipline sports web architecture starting with a dedicated skating academy portal."
    }
  ],

  engProjects: [
    {
      title: "Copper-Plate Circuit Prototyping",
      tag: "Wiring • Oscilloscopes",
      tagColor: "#e63946",
      desc: "Hands-on circuit wiring, function generator signal testing, and hardware fault isolation using multimeters."
    },
    {
      title: "AutoCAD & MATLAB Simulations",
      tag: "AutoCAD Elec • Simulink",
      tagColor: "#eab308",
      desc: "Electrical schematic drafting in AutoCAD Electrical and system modeling in MATLAB & Simulink."
    },
    {
      title: "Wave Modulation & Machines Labs",
      tag: "Engineering Reports",
      tagColor: "#10b981",
      desc: "Authored internal attachment reports on Wave Modulation, Electrical Machines, and Fluid Hydrodynamics."
    }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const unitsList = document.getElementById("units-list");
  portfolioData.unitCurriculum.forEach(unit => {
    unitsList.innerHTML += `<li>${unit}</li>`;
  });

  const certsList = document.getElementById("certs-list");
  portfolioData.certifications.forEach(cert => {
    certsList.innerHTML += `<li>${cert}</li>`;
  });

  const skillsGrid = document.getElementById("skills-grid");
  portfolioData.skills.forEach(skill => {
    skillsGrid.innerHTML += `
      <div class="skill-tile">
        <div class="skill-badge" style="background:${skill.color}">${skill.code}</div>
        <span>${skill.name}</span>
      </div>
    `;
  });

  // Project link buttons removed from the template
  const renderProjects = (items, containerId) => {
    const container = document.getElementById(containerId);
    items.forEach(proj => {
      container.innerHTML += `
        <div class="project-card">
          <div class="project-thumb">
            <span class="tag" style="background:${proj.tagColor}; color:#fff;">${proj.tag}</span>
            <p>${proj.desc}</p>
          </div>
          <div class="project-footer">
            <span class="project-title">${proj.title}</span>
          </div>
        </div>
      `;
    });
  };

  renderProjects(portfolioData.webProjects, "web-projects-grid");
  renderProjects(portfolioData.engProjects, "eng-projects-grid");
});