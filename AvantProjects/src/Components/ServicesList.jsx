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
                <h1 className='service-content-heading'>Industrial Construction</h1>
                <p className='service-content-paragraph'>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
                <div className='servicesList'>
                    <div className='listItem'>
                        <h2 className='listItem-number'>1</h2> 
                        <div className='listItem-info'>
                            <h2>Asbestos</h2>
                            <p>Roofs, vertical cladding - Renovations & safe disposal when replaced with new sheets.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>2</h2> 
                        <div className='listItem-info'>
                            <h2>Building</h2>
                            <p> Foundations, Civil work, Steel structures, Concrete, Timber & steel cladded roofs</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>3</h2> 
                        <div className='listItem-info'>
                            <h2>Concrete</h2>
                            <p>Bases, Floors, Piling, Plinths, Re-screeding, cracks & expansion joints repairs, mezzanine floors</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>4</h2> 
                        <div className='listItem-info'>
                            <h2>Demarcation</h2>
                            <p> floors, walls, roads and more</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>5</h2> 
                        <div className='listItem-info'>
                            <h2>Electrical</h2>
                            <p>Air Conditioning, Fence, Gate motors, Lights & Lightswitches general repairs and more</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>6</h2> 
                        <div className='listItem-info'>
                            <h2>Energy Saving:</h2>
                            <p>Solar, Geysers, lights, heat pumps and generators.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>7</h2> 
                        <div className='listItem-info'>
                            <h2>Plumbing</h2>
                            <p>New installations, repairs & replacements to existing including aqueduct systems. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>8</h2> 
                        <div className='listItem-info'>
                            <h2>Structural Steel</h2>
                            <p>New erections, additions and reconditioning existing.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>9</h2> 
                        <div className='listItem-info'>
                            <h2>Tar Work</h2>
                            <p>Repairs and new roads, pavements, sidewalks, driveways. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number two-number-listItem'>10</h2> 
                        <div className='listItem-info'>
                            <h2>Waterproofing</h2>
                            <p>Torch on (heat melt fusion), acrylic, silicones and many more.</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='service-content' id={residential}>
                <h1 className='service-content-heading'>Residential Construction</h1>
                <p className='service-content-paragraph'>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
                <div className='servicesList'>
                    <div className='listItem'>
                        <h2 className='listItem-number'>1</h2> 
                        <div className='listItem-info'>
                            <h2>Ceilings</h2>
                            <p>Concrete, Fixed or suspended ceilings - upgrade and new</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>2</h2> 
                        <div className='listItem-info'>
                            <h2>Cleaning</h2>
                            <p>Deep cleaning interior and exterior surfaces</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>3</h2> 
                        <div className='listItem-info'>
                            <h2>Interior and exterior renovations</h2>
                            <p> Roofs, walls,</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>4</h2> 
                        <div className='listItem-info'>
                            <h2>Paving</h2>
                            <p>New installations and repair existing.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>5</h2> 
                        <div className='listItem-info'>
                            <h2>Painting</h2>
                            <p>Interior, Exterior, Epoxy floor coatings all specialized applications. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>6</h2> 
                        <div className='listItem-info'>
                            <h2>Plastering</h2>
                            <p>New/textured plaster Gamma zenith & plaster repairs</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>7</h2> 
                        <div className='listItem-info'>
                            <h2>Plumbing</h2>
                            <p>New installations, repairs & replacements to existing including aqueduct systems. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>8</h2> 
                        <div className='listItem-info'>
                            <h2>Solar</h2>
                            <p>Heating panels, battery powered installations. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>9</h2> 
                        <div className='listItem-info'>
                            <h2>Stairways & Cat ladders</h2>
                            <p>New or recondition existing.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number two-number-listItem'>10</h2> 
                        <div className='listItem-info'>
                            <h2>Tiling</h2>
                            <p>Wall & Floor tiles new and repairs.</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='service-content' id={infrastructural}>
                <h1 className='service-content-heading'>Infrastructural Construction</h1>
                <p className='service-content-paragraph'>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
                <div className='servicesList'>
                    <div className='listItem'>
                        <h2 className='listItem-number'>1</h2> 
                        <div className='listItem-info'>
                            <h2>Blast / fire rated</h2>
                            <p>Blast and fire resistant structures - New and upgrades</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>2</h2> 
                        <div className='listItem-info'>
                            <h2>Fencing</h2>
                            <p>Palisade, Brick, Diamond Mesh, Razor wire mesh, Precast and Clearview</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>3</h2> 
                        <div className='listItem-info'>
                            <h2>Flashings</h2>
                            <p>Ridge, Rolltop and side wall etc.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>4</h2> 
                        <div className='listItem-info'>
                            <h2>Floors</h2>
                            <p>Carpets, Concrete, wood, laminate tiles - new and renovations. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>5</h2> 
                        <div className='listItem-info'>
                            <h2>Gates & Gate motors</h2>
                            <p>All applications</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>6</h2> 
                        <div className='listItem-info'>
                            <h2>Poly Carbon Sheets</h2>
                            <p>New installations - highly recommended on roofs to incorporate energy saving. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>7</h2> 
                        <div className='listItem-info'>
                            <h2>Rainwater Goods</h2>
                            <p>New and old systems</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>8</h2> 
                        <div className='listItem-info'>
                            <h2>Renovations</h2>
                            <p>All structures, wallpaper and many more</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>9</h2> 
                        <div className='listItem-info'>
                            <h2>Roofs & Side cladding</h2>
                            <p>Replacement, Reconditioning interior &exterior. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number two-number-listItem'>10</h2> 
                        <div className='listItem-info'>
                            <h2>Tar Work</h2>
                            <p>Repairs and new roads, pavements, sidewalks, driveways. </p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='service-content' id={commercial}>
                <h1 className='service-content-heading'>Commercial Construction</h1>
                <p className='service-content-paragraph'>
                    With more than 35 years of construction experience, we also provide residential, 
                    commercial, and infrastructure construction services across the Gauteng Province. 
                    You are in capable hands, with Avant Projects.
                </p>
                <div className='servicesList'>
                    <div className='listItem'>
                        <h2 className='listItem-number'>1</h2> 
                        <div className='listItem-info'>
                            <h2>Ceilings</h2>
                            <p>Concrete, Fixed or suspended ceilings – upgrade and new</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>2</h2> 
                        <div className='listItem-info'>
                            <h2>Cleaning</h2>
                            <p>Deep cleaning interior and exterior surfaces</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>3</h2> 
                        <div className='listItem-info'>
                            <h2>Doors</h2>
                            <p>Glass, Roller shutter, Steel, Wood and Roller shutter repairs and replacement</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>4</h2> 
                        <div className='listItem-info'>
                            <h2>Electrical</h2>
                            <p>Air Conditioning, Fence, Gate motors, Lights & Lightswitches general repairs and more </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>5</h2> 
                        <div className='listItem-info'>
                            <h2>Energy Saving</h2>
                            <p>Solar, Geysers, lights, heat pumps and generators.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>6</h2> 
                        <div className='listItem-info'>
                            <h2>Glass</h2>
                            <p>New, old glass windowpanes / putty replacement, partitioning, doors & cleaning. </p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>7</h2> 
                        <div className='listItem-info'>
                            <h2>Pipes</h2>
                            <p>Storm water, air & water installations.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>8</h2> 
                        <div className='listItem-info'>
                            <h2>Storage</h2>
                            <p>Supply and install storage systems.</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number'>9</h2> 
                        <div className='listItem-info'>
                            <h2>Ventilators</h2>
                            <p>Whirly birds, Turbines, stationery & extractor fans</p>
                        </div> 
                    </div>
                    <div className='listItem'>
                        <h2 className='listItem-number two-number-listItem'>10</h2> 
                        <div className='listItem-info'>
                            <h2>Waterproofing</h2>
                            <p>Torch on (heat melt fusion), acrylic, silicones and many more.</p>
                        </div> 
                    </div>
                </div>
            </div>
            <div className='services-callToAction'>
                <p>Should the service you require not be listed above, please feel free to contact us.</p>
                <button className='button2'>Contact Us</button>
            </div>
        </div>
    </div>
  )
}

export default ServicesList