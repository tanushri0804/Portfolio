import utuLogo from "../assets/utu.png";
import "./Education.css";

const qualifications = [
  {
    id: "btech",
    degree: "Bachelor of Technology",
    specialization: "Computer Science and Engineering",
    duration: "2021 – 2025",
    institution: {
      label: "Institution",
      name: "Roorkee College Of Engineering, Roorkee",
      url: "https://huroorkee.ac.in/",
    },
    university: {
      label: "University",
      name: "Uttarakhand Technical University, Dehradun",
      url: "https://uktech.ac.in/en",
    },
    grade: { label: "CGPA", value: "8.3" },
    logo: utuLogo,
    logoAlt: "UTU Logo",
  },
  {
    id: "intermediate",
    degree: "Intermediate",
    duration: "2020 – 2021",
    institution: {
      label: "Institution",
      name: "Chandra Shaikhar Sr. Sec. Public School, Roorkee",
      url: "#",
    },
    board: { label: "Board", value: "C.B.S.E" },
    grade: { label: "Percentage", value: "86%" },
    logo:
      "https://yt3.googleusercontent.com/Irgi7ybSY9dkcwEbRhSURtgJfO_pSVKwbRIif7NF8p6nAej5ah9pAiZLiJQJZ24Ew-_U3Efggg=s900-c-k-c0x00ffffff-no-rj",
    logoAlt: "School Logo",
  },
];

const Education = () => {
  return (
    <section className="education-section" id="education">
      <div className="edu-background">
        <div className="edu-blob edu-blob-1" />
        <div className="edu-blob edu-blob-2" />
      </div>

      <div className="education-page-inner">
        <div className="edu-header">
          <span className="edu-label">Academic background</span>
          <h1 className="edu-title">
            Education <span className="text-gradient">Qualifications</span>
          </h1>
          <p className="edu-subtitle">
            My formal education journey in computer science and foundational
            academics.
          </p>
        </div>

        <div className="edu-timeline">
          {qualifications.map((item, index) => (
            <article className="edu-card-wrap" key={item.id}>
              <div className="edu-marker">
                <span className="edu-dot" />
                {index < qualifications.length - 1 && (
                  <span className="edu-line" />
                )}
              </div>

              <div className="edu-card">
                <div className="edu-card-body">
                  <div className="edu-card-top">
                    <div>
                      <h2 className="edu-degree">{item.degree}</h2>
                      {item.specialization && (
                        <p className="edu-specialization">
                          {item.specialization}
                        </p>
                      )}
                    </div>
                    <span className="edu-duration">{item.duration}</span>
                  </div>

                  <div className="edu-meta">
                    <div className="edu-meta-row">
                      <span className="edu-meta-label">
                        {item.institution.label}
                      </span>
                      {item.institution.url !== "#" ? (
                        <a
                          href={item.institution.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.institution.name}
                        </a>
                      ) : (
                        <span>{item.institution.name}</span>
                      )}
                    </div>

                    {item.university && (
                      <div className="edu-meta-row">
                        <span className="edu-meta-label">
                          {item.university.label}
                        </span>
                        <a
                          href={item.university.url}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.university.name}
                        </a>
                      </div>
                    )}

                    {item.board && (
                      <div className="edu-meta-row">
                        <span className="edu-meta-label">{item.board.label}</span>
                        <span>{item.board.value}</span>
                      </div>
                    )}

                    <div className="edu-meta-row edu-grade-row">
                      <span className="edu-meta-label">{item.grade.label}</span>
                      <span className="edu-grade">{item.grade.value}</span>
                    </div>
                  </div>
                </div>

                <div className="edu-logo-wrap">
                  <img src={item.logo} alt={item.logoAlt} loading="lazy" />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
