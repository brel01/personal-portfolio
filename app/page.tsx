import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Work from "@/components/Work";
import Collaboaration from "@/components/Collaboaration";
import Engagements from "@/components/Engagements";
import Contact from "@/components/Contact";


export default function Home() {
  return (
   <div className="space-y-5 px-6 py-6 flex flex-col items-center gap-16">
       <div  className=" max-w-screen-lg space-y-[90px]">
           <Navbar />
           <Header />
           <About />
           <Work />
           <Engagements />
           <Collaboaration />
           <Contact/>
       </div>
   </div>
  );
}
