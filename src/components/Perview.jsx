import { useSelector } from "react-redux";
const Preview = ({ showPerview }) => {
  const personal = useSelector((state) => state.personal);
  const education = useSelector((state) => state.education);
  const experience = useSelector((state) => state.experience);
  return (
    <div
      className={`m-3  aspect-[1222/1584] space-y-4 bg-white px-4 py-2 md:block ${showPerview ? "block" : "hidden"} `}
    >
      <div className="space-y-1 border-b-2 border-black">
        <h1 className="text-2xl font-bold"> {personal.name}</h1>
        <div className="space-x-2">
          <span> {personal.email}</span> <span>&#9679;</span>
          <span> {personal.phone}</span>
          <span>&#9679;</span>
          <span> {personal.address}</span>
        </div>
      </div>

      <section className="space-y-1 pl-2">
        <h2 className="border-b-2 border-black text-left text-xl font-semibold">
          Education
        </h2>
        <h3 className="text-left text-lg font-semibold italic">
          school {education.school}
          <span className="text-sm">({education.year})</span>
        </h3>
        <h4 className="text-left"> {education.degree}</h4>
        <p>year </p>
      </section>
      <p> company {experience.company}</p>
      <p> position {experience.position}</p>
      <p> responsibilities {experience.responsibilities}</p>
      <p> start date {experience.startDate}</p>
      <p> end date {experience.endDate}</p>
    </div>
  );
};
export default Preview;
