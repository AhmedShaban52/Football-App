import  { useState } from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

export function AccordionCustomIcon() {
    
  const [open, setOpen] = useState({
    1: false,
    2: false,
    3: false
  });

  const handleOpen = (value) => {
    setOpen(prevState => ({
      ...prevState,
      [value]: !prevState[value]
    }));
  };


  return (
    <>
   <Accordion open={open[1]} icon={<FontAwesomeIcon icon={open[1] ? faMinus : faPlus} className={`open[1] : "w-[20px] h-[20px] bg-firstColor" ? ""`} />}>
   <h1 className="text-4xl md:text-6xl mx-auto w-full text-secondColor font-bold py-5">Some Q. & Answers</h1>
   <AccordionHeader 
   onClick={() => handleOpen(1)} 
   className={`relative ${open[1] ? "text-firstColor" : ""} `}
   style={{border:"1px solid rgb(231, 231, 231)", padding:"20px" }}
 >
    
   What is your pricing strategy and why?
 </AccordionHeader >
        <AccordionBody   style={{ padding:"20px" }}>
        Key business questions are the questions that your data
        expert will be tasked with answering. They are the questions you have aboutbusiness
        performance that are central to the overall strategy.
        </AccordionBody>
      </Accordion>
      <Accordion open={open[2]} icon={<FontAwesomeIcon icon={open[2] ? faMinus : faPlus} />}>
        <AccordionHeader 
          onClick={() => handleOpen(2)} 
          className={` relative ${open[2] ? "text-firstColor" : ""}`}
          style={{border:"1px solid rgb(231, 231, 231)", padding:"20px" }}
        >
        What problem does your business solve?
                                        
          
        </AccordionHeader>
        <AccordionBody style={{ padding:"20px" }}>
        Key business questions are the questions that your data
        expert will be tasked with answering. They are the questions you have aboutbusiness
        performance that are central to the overall strategy.
        </AccordionBody>
      </Accordion>
      <Accordion open={open[3]} icon={<FontAwesomeIcon icon={open[3] ? faMinus : faPlus} />}>
        <AccordionHeader 
          onClick={() => handleOpen(3)} 
          className={` relative ${open[3] ? "text-firstColor " : ""}`}
          style={{border:"1px solid rgb(231, 231, 231)", padding:"20px" }}
        >
        How does your business generate
        income?
    
         
        </AccordionHeader>
        <AccordionBody style={{ padding:"20px" }}>
        Key business questions are the questions that your data
        expert will be tasked with answering. They are the questions you have aboutbusiness
        performance that are central to the overall strategy.
        </AccordionBody>
      </Accordion>
    </>
  );
}
