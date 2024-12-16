"use client"
import Image from "next/image";
import styles from "./style.module.css"
import { title } from "process";
import { Switch } from "@/components/ui/switch"
import {ComboboxDemo} from "@/components/ui/combobox";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
function AccordionComponent(){
  return(
    <>
     <AccordionContent>
            
            <div className="flex flex-col space-y-8 bg-slate-800 mt-1 min-h-24 min-w-40 rounded-md">
             <div className="flex space-x-1 ml-1 mt-1">
               <img src="./favicon.ico" alt="CNN Logo" className="h-6 w-6 mt-3" />
               <p style={{fontSize:'10px'}}> esko kya padh rhe ho kam karo mai to yu hi time pass kar rha hu  </p>

             </div>
             
             <div className=" flex justify-center align-bottom font-bold mb-4 text-xs">
             
               HIMANSHU PANCHOLI
               </div>
             </div>
             
           

          
         
   
         </AccordionContent>
    </>
  )
}
export default function Home() {

  return (
   
    <div className={styles.container}>
      <header className="header">
        <img src="icon128.png" alt="validate.ai logo" className={styles.logo}/>
        <h1  className={styles.title}>validate.ai</h1>
        <div className={styles.switch}>
          <Switch />
        </div>
      </header>
      <div style={{ border: '1px solid white', marginTop: '49px', marginBottom: '16px' }}></div>
    
  
      <div className={styles.model1}>Model</div>
      <div className={styles.Box}>
        
      <ComboboxDemo/>
      </div>
      <div className={styles.model2}>Model</div>
      <div className={styles.Box}>
      <ComboboxDemo/>
      </div>
      <div className={styles.model3}>Model</div>
      <div className={styles.Box}>
      <ComboboxDemo/>
      </div>
      <div style={{marginTop:'30px'}}>
        <Accordion type="multiple">
        
        <AccordionItem value="item-1" >
          <AccordionTrigger>Generation History</AccordionTrigger>
          <div className=" scrollable min-w-full flex flex-row" style={{overflowX:"auto",overflowY:"hidden"}}>
          <AccordionComponent/>
          <AccordionComponent/>
          <AccordionComponent/>
          </div>
        </AccordionItem>
      
        <AccordionItem value="item-2">
          <AccordionTrigger>Preferences</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="item-3">
            <AccordionTrigger>Feedback and Contact Us</AccordionTrigger>
            <AccordionContent>
              Yes. It adheres to the WAI-ARIA design pattern.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    
      <div style={{fontFamily: "var(--font-orbitron)"}} className="absolute left-40 bottom-0 text-white text-xs">
        <p>{`© . validate.ai.`}</p>
      </div>
    </div>
      

    
    
  );
}