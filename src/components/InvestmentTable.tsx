
import { motion } from 'framer-motion';

const InvestmentTable = () => {
  const projectSpecs = [
    { key: 'Total Budget for 1 Hostel', value: '$500K (₦750,000,000)' },
    { key: 'Number of Rooms', value: '100 + Amenities' },
    { key: 'Room Type', value: '14 ft x 16 ft - Ensuite' },
    { key: 'Star Rating Standards', value: '3-Star with edu-social amenities' },
    { key: 'Location', value: '10 Hot Campus Zones Mapped Out! 3 to begin' },
    { key: 'Project Duration', value: '9 - 12 Months' },
    { key: 'Expected Occupancy', value: '90%' },
    { key: 'Rental Value (per bed space)', value: '₦350,000 / annum + % increment /year' },
    { key: 'Min Investment', value: '₦35K (₦50,000,000)' },
    { key: 'Max Investment', value: '₦200k (₦300,000,000M)' },
    { key: 'Number of Bed space', value: '288' },
  ];

  const roiData = [
    { year: 'Year 1-5', projection: '10-15% Rental Income p.a + holding asset shares' },
    { year: 'Year 5', projection: '15-20% Rental Income p.a + holding asset Share' },
    { year: 'Year 10', projection: '120% - 270% ROI + holding asset shares' },
    { year: 'Year 15', projection: '300%+ return on capital + holding asset shares' },
  ];

  const shareStructure = [
    { investment: '$100K (20%)', units: '20 Units (12.4% p.a)', ownership: '20% on Asset Shares' },
    { investment: '$150K (30%)', units: '30 Units (19.6% p.a)', ownership: '30% on Asset Shares' },
    { investment: '$200K (40%)', units: '40 Units (26.8% p.a)', ownership: '40% on Asset Shares' },
    { investment: '...', units: '...', ownership: '...' },
  ];

  const benefits = [
    'Guaranteed ROI: Annual 20%+ on rental returns alone After first 5 years.',
    'Property Ownership: Tangible asset percentage under your portfolio.',
    'Exit Flexibility: Sell holding asset shares seamlessly with clear exit plans.',
    'Asset Appreciation: Hostel and land value increase over time.',
    'Impact Investment: Solving critical student housing deficit.',
  ];

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="space-y-6"
      >
        <div>
          <h3 className="font-heading text-lg mb-2">PROJECT SPECIFICATIONS</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {projectSpecs.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 font-medium">{item.key}</td>
                    <td className="py-2">{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div>
          <h3 className="font-heading text-lg mb-2">RETURN ON INVESTMENT (ROI)</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <tbody>
                {roiData.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2 font-medium">{item.year}</td>
                    <td className="py-2">{item.projection}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="space-y-6"
      >
        <div>
          <h3 className="font-heading text-lg text-blue-300 mb-2">BENEFITS TO INVESTORS</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            {benefits.map((benefit, index) => (
              <li key={index}>{benefit}</li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-heading text-lg text-blue-300 mb-2">SHAREHOLDING STRUCTURE</h3>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-gray-700">
                  <th className="py-2 text-left">Investment</th>
                  <th className="py-2 text-left">No. of Units</th>
                  <th className="py-2 text-left">Ownership %</th>
                </tr>
              </thead>
              <tbody>
                {shareStructure.map((item, index) => (
                  <tr key={index} className="border-b border-gray-700">
                    <td className="py-2">{item.investment}</td>
                    <td className="py-2">{item.units}</td>
                    <td className="py-2">{item.ownership}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div className="p-4 border border-accent/50 rounded-md">
          <h4 className="font-heading mb-2">3. Partnership Model</h4>
          <p className="text-sm font-medium">Design-Build-Finance-Operate-Transfer (DBFOT)</p>
          <table className="w-full text-xs mt-2">
            <tbody>
              <tr>
                <td className="py-1 font-medium">Design & Build</td>
                <td className="py-1">PropOut + Local Contractors</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">Finance</td>
                <td className="py-1">PropOut + Investors (Private or Institutions)</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">Operate</td>
                <td className="py-1">PropOut (via digital platform + FM firm)</td>
              </tr>
              <tr>
                <td className="py-1 font-medium">Transfer</td>
                <td className="py-1">After agreed concession period (e.g. 15-25 yrs), return to university if required</td>
              </tr>
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>
  );
};

export default InvestmentTable;
