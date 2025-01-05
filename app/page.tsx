import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "@/components/About";
import Work from "@/components/Work";
import Collaboaration from "@/components/Collaboaration";
import Engagements from "@/components/Engagements";
import Contact from "@/components/Contact";
import Footer from "@/components/ui/Footer";


export default function Home() {
  return (
   <div className="space-y-5 px-6 py-6 flex flex-col items-center gap-16 w-full text-sm">
       <div className="w-full flex flex-col items-center lg:max-w-screen-lg space-y-[60px] lg:space-y-[100px]">

           <Navbar/>
           <Header/>
           <section id={"about"} ><About/></section>
           <section id="work"><Work/></section>
           <section id={`engagements`}><Engagements/></section>
           <section id={`collaboaration`}><Collaboaration/></section>
           <section id={`contact`}><Contact/></section>
           <section><Footer /></section>
       </div>
   </div>
  );
}
