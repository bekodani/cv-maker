import React, { useState } from "react";
import './App.css';
import EducationSection from "./components/EducationSection";
import ExperienceSection from "./components/ExperienceSection";
import GeneralSection from "./components/GeneralSection";
import uniqid from "uniqid";
import PrintProvider, { NoPrint, Print } from 'react-easy-print';




const App = () => {

  const [eduIds, setEduIds] = useState([]);
  const [expIds, setExpIds] = useState([]);

  const handleClick = (type) => {
    if (type === 'expIds') {
      setExpIds((prevExpIds) => [...prevExpIds, uniqid()])
      
    } else {
      setEduIds((prevEduIds) => [...prevEduIds, uniqid()]);
      console.log(setEduIds)
    }
  };

  const handleDelete = (type, id) => {
    if (type === 'expIds') {
      setExpIds((prevExpIds) => {
        let newList = prevExpIds.filter((key) => key !== id)
        console.log(newList)  
        return newList;    
      });
    } else {
      setEduIds((prevEduIds) => {
        let newList = prevEduIds.filter((key) => key !== id);
        console.log(newList)  
        return newList;
      });
    }
  } ;

  const eduComponent = eduIds.map((id) => (
    <EducationSection key={id} id={id} handleDelete={handleDelete}/>
  ));
  const expComponent = expIds.map((id) => (
    <ExperienceSection key={id} id={id} handleDelete={handleDelete}/>
  ));


      return (
    <div className="App">
<PrintProvider>
<div className="outer-container">

<Print>
        <div className= "page-container" >
          
          <div className="general-container">
            <GeneralSection />
            <div className="desing-line"></div> 
          </div>


          <div className="edu-container">
            <h2 className="header-wrapper" >Education</h2>
            {eduComponent}
            <NoPrint>
            <div className="add-button-wrapper">
                <button
                  className="add-button"
                  onClick={() => handleClick('eduIds')}>
                  Add
                </button>
              </div>
              </NoPrint>
            <div className="desing-line"></div> 
          </div>


        <div>
          <h2 className="header-wrapper">Experiment</h2>
          {expComponent}
          <NoPrint>
          <div className="add-button-wrapper">
              <button 
                className="add-button"
                onClick={() => handleClick('expIds')}>
                Add
              </button>
            </div>
            </NoPrint>
          <div className="desing-line"></div>
        </div>


        </div>
        </Print>

        </div>
        <NoPrint>
        <div className="print-button-wrapper">
        <button
							onClick={() => {
								window.print();
							}}
							className='print-button'>
							Print
						</button>
            </div>
            </NoPrint>
            </PrintProvider>
    </div>
  );


}

export default App;
