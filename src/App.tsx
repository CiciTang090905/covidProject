import SelectCountry from "@/components/ui/select-country";
import DisplayStatistics from "@/components/ui/display-statistics";
import { useState } from "react"; // 👀

function App() {
  const [countryCode, setCountryCode] = useState("US"); // 👀 Default to the US

  return (
    <div className="flex flex-col justify-between items-center min-h-screen max-w-4xl m-auto py-10">
      <SelectCountry setCountryCode={setCountryCode} />  
      <DisplayStatistics countryCode={countryCode} />
    </div>
  );
}

// lifting state up pattern — move the shared state to their common parent, App. 
// The App component will own the countryCode state and pass it down to both children.

export default App;
