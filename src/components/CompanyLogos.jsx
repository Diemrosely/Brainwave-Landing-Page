import { companyLogos } from "../constants";

const CompanyLogos = ({ className }) => {
  return (
    <div className={`${className} overflow-hidden`}>
      <h5 className="tagline">Helping people create beautiful content at</h5>
      <div className="relative flex overflow-hidden">
        <ul className="flex animate-scroll space-x-8 hover:animate-scrollReverse">
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-shrink-0 h-[8.5rem] mx-4"
              key={index}
            >
              <img
                src={logo}
                width={134}
                height={28}
                alt={`Company logo ${index + 1}`}
              />
            </li>
          ))}
          {companyLogos.map((logo, index) => (
            <li
              className="flex items-center justify-center flex-shrink-0 h-[8.5rem] mx-4"
              key={index + companyLogos.length}
            >
              <img
                src={logo}
                width={134}
                height={28}
                alt={`Company logo ${index + 1}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CompanyLogos;
