import React, { useState } from 'react';
import './ServicesList.css'; 

function ServicesList() {

    const [industrial, setIndustrial] = useState("show-content");
    const [residential, setResidential] = useState("hide-content");
    const [infrastructural, setInfrastructural] = useState("hide-content");
    const [commercial, setCommercial] = useState("hide-content");

    const [industrialActive, setIndustrialActive] = useState("Service-classification active-content");
    const [residentialActive, setResidentialActive] = useState("Service-classification");
    const [infrastructuralActive, setInfrastructuralActive] = useState("Service-classification");
    const [commercialActive, setCommercialActive] = useState("Service-classification");

    const handleClassification = (e) => {
        let value = e.target.name;
        console.log(value)
        if (value === "industrial") {
            setIndustrial("show-content");
            setResidential("hide-content");
            setInfrastructural("hide-content");
            setCommercial("hide-content");

            setIndustrialActive("Service-classification active-content");
            setResidentialActive("Service-classification");
            setInfrastructuralActive("Service-classification");
            setCommercialActive("Service-classification");
        }
        else if (value === "residential") {
            setIndustrial("hide-content");
            setResidential("show-content");
            setInfrastructural("hide-content");
            setCommercial("hide-content")

            setIndustrialActive("Service-classification");
            setResidentialActive("Service-classification active-content");
            setInfrastructuralActive("Service-classification");
            setCommercialActive("Service-classification");
        }
        else if (value === "infrastructural") {
            setIndustrial("hide-content");
            setResidential("hide-content");
            setInfrastructural("show-content");
            setCommercial("hide-content")

            setIndustrialActive("Service-classification");
            setResidentialActive("Service-classification");
            setInfrastructuralActive("Service-classification active-content");
            setCommercialActive("Service-classification");
        }
        else if (value === "commercial") {
            setIndustrial("hide-content");
            setResidential("hide-content");
            setInfrastructural("hide-content");
            setCommercial("show-content")

            setIndustrialActive("Service-classification");
            setResidentialActive("Service-classification");
            setInfrastructuralActive("Service-classification");
            setCommercialActive("Service-classification active-content");
        }
        else {
            //do nothing
        }
    }

  return (
    <div className='tabContainer section'>
        <div>
            <button className={industrialActive} name="industrial" onClick={handleClassification} >Industrial <br /> Construction</button>
            <button className={residentialActive} name="residential" onClick={handleClassification} >Residential <br /> Construction</button>
            <button className={infrastructuralActive} name="infrastructural" onClick={handleClassification} >Infrastructural <br /> Construction</button>
            <button className={commercialActive} name="commercial" onClick={handleClassification} >Commercial <br /> Construction</button>
        </div>
        <div className='services-content-container'>
            <div className='service-content' id={industrial}>
                <h1>Industrial Construction</h1>
                <p>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
            </div>
            <div className='service-content' id={residential}>
                <h1>Residential Construction</h1>
                <p>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
            </div>
            <div className='service-content' id={infrastructural}>
                <h1>Infrastructural Construction</h1>
                <p>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
            </div>
            <div className='service-content' id={commercial}>
                <h1>Commercial Construction</h1>
                <p>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
            </div>
        </div>
    </div>
  )
}

export default ServicesList