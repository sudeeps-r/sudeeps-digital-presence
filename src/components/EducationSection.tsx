
interface EducationSectionProps {
  className?: string;
}

const EducationSection: React.FC<EducationSectionProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="text-lg font-bold mb-3 text-primary font-playfair">Education</h2>
      <ul className="list-disc pl-5 text-sm">
        <li>
          <span className="font-medium">Master of Computer Applications (MCA)</span> – Chinmaya Institute of Technology, Kannur University (2007 - 2010)
        </li>
      </ul>
    </section>
  );
};

export default EducationSection;
