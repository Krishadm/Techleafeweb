import Blockchain from "./Expertise/Blockchain";
import AIDevelopmentServices from "./Expertise/AIDevelopmentServices";

export default function ExpertisePage() {
  return (
    <main className="simple-page">
      <h1>Our Expertise</h1>
      <p>
        Explore our core capabilities across AI, blockchain, mobile, and web engineering.
      </p>
      <Blockchain />
       <AIDevelopmentServices />
    </main>
  );
}
