


import React,{useEffect} from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Home/Footer/Footer";
import about from "../../assets/template/3.webp";
import { useNavigate } from "react-router-dom";

function About() {
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0); 
  }, []);

  return (
    <div>
      <Navbar />
      <div style={{ height: "150px" }}></div>
      <div
        className="flex flex-col sm:flex-row  sm:min-h-full overflow-hidden"
        style={{ height: "700px" }}
      >
        <img src={about} className="p-20 md:w-1/2" />
        <div
          className="md:w-1/2 min-h-full"
          style={{ marginTop: "5px", padding: "20px" }}
        >
          <p className="text-lg font-bold text-blue-900 p-10">
          Don’t worry, you’re in safe hands.
          </p>
          <span>Our Mission</span>
          
          <p className="text-slate-700 text-lg mt-2">
          At The SALT Legal, our mission is to empower businesses and individuals by navigating the complexities of the legal landscape. We strive to be more than just legal advisors; we are partners in your success, offering tailored solutions that align with your unique needs.
          </p>

          
          <p className="text-slate-700 text-lg mt-2">
          In a rapidly changing world, innovation and adaptability are crucial. The SALT Legal stays at the forefront of legal developments, leveraging innovative approaches to tackle emerging challenges and ensuring that our clients are well-prepared for the future.
          </p>

          <p className="text-slate-700 text-lg mt-2">
          At The SALT Legal, we believe in being proactive and strategic in our legal interventions. From preventing disputes before they escalate to developing comprehensive compliance strategies, our goal is to keep you ahead of the legal curve and minimize risks.
          </p>
          <p className="text-slate-700 text-lg mt-2">
          At The SALT Legal, we believe in being proactive and strategic in our legal interventions. From preventing disputes before they escalate to developing comprehensive compliance strategies, our goal is to keep you ahead of the legal curve and minimize risks.
          </p>
        </div>
      </div>

      <div
        style={{ height: "700px", width: "100%" }}
        className="flex flex-col md:flex-row overflow-hidden"
      >
        <div className="font-bold p-5 md:p-20 w-full md:w-2/4 overflow-hidden">
          <h2 className="font-bold text-xl text-gray-800 mt-7 ">Employer-Employee Disputes</h2>
          <p className="font-semibold text-gray-700 mt-7">
          The complexities of employer-employee relationships is crucial in today's fast-paced business environment. Our team at The SALT Legal has a proven track record in handling a wide range of disputes, including wrongful termination, discrimination, harassment, and contractual disagreements. We strive to protect the interests of both employers and employees through effective legal strategies and alternative dispute resolution mechanisms.
          </p>
          <p className="font-semibold text-gray-700 mt-2">
          In the realm of employer-employee disputes, we have successfully represented a multinational corporation facing allegations of workplace discrimination. Through a combination of meticulous documentation review, witness interviews, and expert negotiation, we secured a resolution that protected our client's reputation while addressing the concerns of the aggrieved employee.
          </p>
          <button className="font-semibold p-4  md:mt-20 bg-blue-950 rounded-md text-white overflow-hidden">
            CONNECT US
          </button>
        </div>
        <div className="p-5 md:p-20 w-full md:w-2/4 overflow-hidden">
          <h2 className="font-bold text-xl text-gray-800 mt-7 ">Labour Law & Regulations</h2>
          <p className="font-semibold text-gray-700 mt-7">
          Staying compliant with labor laws and regulations is essential for any business. The SALT Legal offers expert guidance on employment contracts, workplace policies, compliance audits, and representation in labor disputes. Our goal is to help businesses create a fair and legally sound work environment while mitigating risks associated with labor law violations.
          </p>
          <p className="font-semibold text-gray-700 mt-2">
          One of our clients, a rapidly growing tech startup, sought our assistance in navigating labor law compliance during a period of expansion. We conducted a thorough audit of their employment contracts, policies, and procedures, ensuring alignment with local regulations. This proactive approach not only prevented potential legal challenges but also fostered a positive work environment for the company's growing workforce.
          </p>
          <button className="font-semibold p-4 mt-5 md:mt-20 bg-blue-950 rounded-md text-white overflow-hidden">
            Pay Now
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default About;
