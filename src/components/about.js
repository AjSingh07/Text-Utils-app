import React, { useState } from "react";

export default function About(props) {
  // const [mode, setMode] = useState({
  //     backgroundColor: "white",
  //     color: "black",
  //   });
  const mystyle={
    color: props.Mode === 'dark'? 'white':'black',
    backgroundColor: props.Mode === 'dark'? 'black':'white'}
  
    // const [btnStyle, setbtnStyle] = useState("Enable dark Mode");
    // let togglebtn = () => {
    //     if (mode.color === "black") {
    //         setMode({
    //             color: "white",
    //             backgroundColor: "black",
    //             borderRadius: "12px"
    //   });
    //   setbtnStyle("Enable light Mode")
    // } else {
    //     setMode({
    //         color: "black",
    //         backgroundColor: "white"
    //     });
    //     setbtnStyle("Enable dark Mode")
    // }

  return(
    // <div className="container" style ={{color: props.darkMode==='light'?'black':'white'}}>
    <div className="container" style ={mystyle}>
        <h2>About Us</h2>
      <div class="accordion" id="accordionExample"  >
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
            >
              Accordion Item #1
            </button>
          </h2>
          <div
            id="collapseOne"
            class="accordion-collapse collapse show"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the first item's accordion body.</strong> It is
              shown by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
            >
              Accordion Item #2
            </button>
          </h2>
          <div
            id="collapseTwo"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the second item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
        <div class="accordion-item" style={mystyle}>
          <h2 class="accordion-header">
            <button
              class="accordion-button collapsed" style={mystyle}
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
            >
              Accordion Item #3
            </button>
          </h2>
          <div
            id="collapseThree"
            class="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div class="accordion-body">
              <strong>This is the third item's accordion body.</strong> It is
              hidden by default, until the collapse plugin adds the appropriate
              classes that we use to style each element. These classes control
              the overall appearance, as well as the showing and hiding via CSS
              transitions. You can modify any of this with custom CSS or
              overriding our default variables. It's also worth noting that just
              about any HTML can go within the <code>.accordion-body</code>,
              though the transition does limit overflow.
            </div>
          </div>
        </div>
      </div>
      {/* <button type="button" class="btn btn-success my-3" onClick={togglebtn}>
        {btnStyle}
      </button> */}
    </div>
  )};