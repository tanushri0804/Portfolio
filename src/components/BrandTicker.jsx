import "./BrandTicker.css";

const brands = [
  {
    name: "ChatGPT",
    logo: "https://api.iconify.design/logos:openai-icon.svg",
    isFilter: true,
  },
  {
    name: "Claude",
    logo: "https://api.iconify.design/logos:anthropic-icon.svg",
  },
  {
    name: "Gemini",
    logo: "https://api.iconify.design/logos:google-gemini.svg",
  },
  { name: "Figma", logo: "https://api.iconify.design/logos:figma.svg" },
  {
    name: "Cursor",
    logo: "https://www.cursor.com/favicon.ico",
    isFilter: true,
  },
  {
    name: "Hugging Face",
    logo: "https://api.iconify.design/logos:hugging-face-icon.svg",
  },
  {
    name: "Supabase",
    logo: "https://api.iconify.design/logos:supabase-icon.svg",
  },
  {
    name: "GitHub Copilot",
    logo: "https://api.iconify.design/simple-icons:githubcopilot.svg",
    isFilter: true,
  },
  {
    name: "Pinecone",
    logo: "https://api.iconify.design/logos:pinecone-icon.svg",
  },
  {
    name: "Perplexity",
    logo: "https://api.iconify.design/logos:perplexity-icon.svg",
  },
  {
    name: "Replit",
    logo: "https://api.iconify.design/logos:replit-icon.svg",
  },
  {
    name: "Notion",
    logo: "https://api.iconify.design/logos:notion-icon.svg",
    isFilter: true,
  },
];

const BrandTicker = () => {
  const tickerItems = [...brands, ...brands];

  return (
    <div className="brand-ticker-section">
      <div className="ticker-label">AI STACK &amp; TOOLKIT</div>
      <div className="ticker-container">
        <div className="ticker-track">
          {tickerItems.map((brand, index) => (
            <div key={`${brand.name}-${index}`} className="ticker-item">
              <img
                src={brand.logo}
                alt={brand.name}
                className={`brand-logo ${brand.isFilter ? "logo-filtered" : ""}`}
                title={brand.name}
                loading="lazy"
                decoding="async"
                draggable="false"
              />
            </div>
          ))}
        </div>

        <div className="ticker-fade fade-left" />
        <div className="ticker-fade fade-right" />
      </div>
    </div>
  );
};

export default BrandTicker;
