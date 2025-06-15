
interface PatentsAwardsSectionProps {
  className?: string;
}

const PatentsAwardsSection: React.FC<PatentsAwardsSectionProps> = ({ className }) => {
  return (
    <section className={className}>
      <h2 className="text-lg font-bold mb-3 text-primary font-playfair">Patents &amp; Awards</h2>
      <div>
        <div className="mb-3">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide">Patent</h4>
          <ul className="list-disc pl-5 text-sm mt-1">
            <li>
              Filed patent in mobile application quality monitoring systems (<span className="font-mono">PCT/SG2022/05043</span>).
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wide mb-1">Awards</h4>
          <ul className="list-disc pl-5 text-sm space-y-0.5">
            <li>OCBC Bank: Engineering Excellence Award (12/2022).</li>
            <li>Grab: Spot Awards (05/2020, 12/2019), Most Velocity Person (9/2019, 11/2019).</li>
            <li>Reliance Jio: Merchant Pay (2017).</li>
            <li>RapidValue Solutions: Timeless Achiever (2014), Tech Guru (2013), Three Years of Excellence Award.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default PatentsAwardsSection;
