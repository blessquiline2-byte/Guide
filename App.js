import ScribeStylePlayer from "./components/scrippler/Scrippler"
import Guide from "./components/guide/Guide";
import React, { useState,useEffect } from "react";
import "primereact/resources/themes/lara-light-blue/theme.css";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";


export default function App() {
  const src = "https://scribehow.com/embed/Send_RPA_Statement_Email_and_Classify_Document__Dy2C3oV7RAG4aTrJtL5ezg?skipIntro=true&as=video";

  const [autoplay,setAutoplay] = React.useState(false);

  const sendEmailSteps = [
    {
      img:"/email header.png",
      cursor:{x:0.5,y:0.5},
      caption: "",
      click: false,
      selected : false,
      showBot:true,
      botMessage:"Hello! I'm here to guide you step by step. \n give you some infor",
    },
    {
      img: "/new email.jpeg",
      cursor: { x: 0.1, y: 0.15 },
      caption: "Click New Email",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"first step : click on new email",
    },
    {
      img:"/type in email address.jpeg",
      cursor:{x:0.7,y:0.3},
      caption: "Type in Email : devrpastatement@vkb.co.za",
      click: true,
      selected : false,
      showBot:true,
      botMessage:" Step 2, Type in the rpa email , ",
    },
    {
      img:"/insert.jpeg",
      cursor:{x:0.37,y:0.1},
      caption: "Click Insert",
      click: true,
      selected : false,
      showBot:true,
      botMessage:" Step 3, click insert , to reveal addition options",
    },
    {
      img:"/attach.jpeg",
      cursor:{x:0.13,y:0.15},
      caption: "Click Attach",
      click: true,
      selected : false,
      showBot:true,
      botMessage:" Step 4, Click on Attach button, to attach a file",
    },
    {
      img:"/statement filejpeg.jpeg",
      cursor:{x:0.13,y:0.43},
      caption: "Click on attachment File : Statement (1)",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 5, attach a file, please ensure you attach correct file",
    },
    {
      img:"/Click Send.jpeg",
      cursor:{x:0.64,y:0.25},
      caption: "Click Send",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 6, Click send and wait",
    },
    {
      img:'/sent.png',
      cursor:{x:0.5,y:0.5},
      caption:'',
      click:false,
      selected : false,
      showBot:false,
      botMessage:"",
    }
  ]
  const invalidClassisifcationSteps = [
    {
      img:"/invalid header 2.png",
      cursor: {x:0.5,y:0.5},
      caption: "",
      click:false,
      selected : false,
      showBot:true,
      botMessage:"Lets go through discarding invalid files",
    },
    {
      img:"/classification email.jpeg",
      cursor:{x:0.4,y:0.4},
      caption: "Click on the received classification email",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 1, click on the Classification Email received",
    }
    ,
    {
      img:"/validation link.jpeg",
      cursor:{x:0.71,y:0.475},
      caption: "click on the validation link",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 2, CLick on the validation link on the mail body",
    },
    {
      img:"/classification step 1.jpeg",
      cursor:{x:0.5,y:0.5},
      caption: "Navigate to classification Station upon receiving email",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 3, wait for Classification station to load",
    },
    {
      img:"/assign to self.jpeg",
      cursor:{x:0.53,y:0.17},
      caption: "click assign to self",
      click: true,
      selected : false,
      showBot:true,
      botMessage:"Step 4, before you can classify, assign the document to your self",
    },
    {
      img:"/invalid doc step 1.jpg",
      cursor: {x:0.54,y:0.9},
      caption: "Click Exception Button",
      click:true,
      selected : false,
      showBot:true,
      botMessage:"Step 5, Click the red exception Button",
    },
    {
      img:"/invalid doc step 2.jpg",
      cursor: {x:0.55,y:0.52},
      caption: "Type In Exception message: Invalid Document",
      click:true,
      selected : false,
      showBot:true,
      botMessage:"Step 5, Type in a message or reason",
    },
    {
      img:"/invalid doc step 3.jpg",
      cursor: {x:0.55,y:0.59},
      caption: "Click Confirm",
      click:true,
      selected : false,
      showBot:true,
      botMessage:"Step 6, Click Confirm to discard",
    },
    {
      img:"/document discarded.png",
      cursor: {x:0.5,y:0.55},
      caption: "",
      click:false,
      selected : false,
      showBot:false,
      botMessage:"",
    }
  ]

  const classificationSteps = [
    {
      img:"/classify header 2.png",
      cursor: {x:0.5,y:0.5},
      caption:"",
      click:false,
      selected : false,
      showBot:true,
      botMessage:"Let me Guide you through classification",
   },
   {
     img:"/classification email.jpeg",
     cursor:{x:0.4,y:0.4},
     caption: "Click on the received classification email",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 1, Click on the Classification email",
   }
   ,
   {
     img:"/validation link.jpeg",
     cursor:{x:0.71,y:0.475},
     caption: "click on the validation link",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 2, Click on the validation link attach to mail body",
   },
   {
     img:"/classification step 1.jpeg",
     cursor:{x:0.5,y:0.5},
     caption: "Navigate to classification Station upon receiving email",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 3, wait for Classification Station to load",
   },
   {
     img:"/assign to self.jpeg",
     cursor:{x:0.53,y:0.17},
     caption: "click assign to self",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 4, before you can classify ,Click on Assign to self",
   },
   {
     img:"/drop down.jpeg",
     cursor:{x:0.5,y:0.2},
     caption: "click on classification drop down",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 5, Click on the Document Type drop down",
   },
   {
     img:"/statement.jpeg",
     cursor:{x:0.5,y:0.3},
     caption: "click on statement",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 6, Choose the document type ",
   },
   {
     img:"/submit.jpeg",
     cursor:{x:0.66,y:0.89},
     caption: "click on submit",
     click: true,
     selected : false,
     showBot:true,
     botMessage:"Step 7, Click submit to help train the bot and continue processing",
   },
   {
     img:"/classification complete.png",
     cursor: {x:0.5,y:0.55},
     caption: "",
     click:false,
     selected : false,
     showBot:false,
     botMessage:"",
   }
  ]
  
  const guides = [
    {
      guideName: 'Send Email Attachment',
      guideSteps:sendEmailSteps,
      isSelected:true,
      isPlaying:false
    },
    {
      guideName:'Valid Classification Guide',
      guideSteps:classificationSteps,
      isSelected: false,
      isPlaying:false
    },
    {
      guideName:'Invalid Document Classification',
      guideSteps:invalidClassisifcationSteps,
      isSelected:false,
      isPlaying:false
    }
  ]

  const [currentGuides,setCurrentGuides] = useState(guides);

  const [currentguide,setGuide] = React.useState(guides[0]);
  const [inPlay,setInPlay] = React.useState(false)

  const handleGuideClick = (guideC) => {
    setAutoplay(false);
    const index = guides.findIndex(guide => guide.guideName === guideC.guideName);
   
   
    setCurrentGuides(prevGuides =>
      prevGuides.map(guide => ({
        ...guide,
        isPlaying: false
      }))
    );

    guides[index].isSelected = true;
    setCurrentGuides(prevGuides => 
      prevGuides.map(guide => 
        guide.guideName === guideC.guideName ?
        {...guide, isSelected:true} : {...guide, isSelected:false}
      )
    )

    setCurrentGuides(prevGuides=>
      prevGuides.map((guide)=>
      guide.guideName === guideC.guideName ?
      {...guide,isPlaying:inPlay}:{...guide,isPlaying:false}
      )
    )
    setGuide(guideC);


  }

  const isPlaying = (playing) =>{
    setInPlay(playing);
    setCurrentGuides(prevGuides=>
      prevGuides.map((guide)=>
      guide.guideName === currentguide.guideName ?
      {...guide,isPlaying:playing}:{...guide,isPlaying:false}
      )
    )
  }


  return (
    <div className="vkb-container" style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      {/* Header */}
      <header style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <img src="/bot.png" alt="VKB Bot" style={{ width: 80, height: 80, borderRadius: 12 }} />
        <div>
          <h1 className="vkb-header">VKB RPA Statement Guides</h1>
          <p className="vkb-subtext">Guides on how to dispatch, classify, and validate Statements</p>
        </div>
      </header>

      {/* Main Content */}
      <div style={{ display: "grid", gridTemplateColumns: "1fr 3fr 1fr", gap: "20px" }}>
        
        {/* Left Sidebar - Guides */}
        <div>
          <div className="vkb-guides">
            {currentGuides.map((guide, index) => (
              <Guide key={index} guide={guide} onClick={() => handleGuideClick(guide)} />
            ))}
          </div>

          {/* Optional Info Card */}
          <div className="vkb-container" style={{ marginTop: 20 }}>
            <h3 className="vkb-header">Guide Info</h3>
            <p className="vkb-subtext">
              Selected Guide: <strong>{currentguide.guideName}</strong>
            </p>
            <p className="vkb-subtext">
              Steps: {currentguide.guideSteps.length - 1 }
            </p>
          </div>
          <div>
          <div className="vkb-container">
            <h3 className="vkb-header">Tips & Notes</h3>
            <ul className="vkb-subtext" style={{ paddingLeft: "20px" }}>
              <li>Hover over steps to preview cursor movement.</li>
              <li>Use Play/Pause to control playback.</li>
              <li>Click on a step in the list to jump directly.</li>
              <li>All guides are VKB standard process compliant.</li>
            </ul>
          </div>

    
        </div>
        </div>

        {/* Center - Scribe Player */}
        <div className="vkb-player-wrapper">
          <ScribeStylePlayer steps={currentguide.guideSteps} autoplay={autoplay} currentIndex={0} isPlayingCallBack={isPlaying} />
        </div>

        {/* Right Sidebar - Additional Info / Notes */}
        {/* Optional Quick Stats */}
        <div>
        <div className="vkb-container" style={{ marginTop: 20 }}>
            <h3 className="vkb-header">Quick Stats</h3>
            <p className="vkb-subtext">Total Guides: {currentGuides.length}</p>
            <p className="vkb-subtext">Current Guide Steps: {currentguide.guideSteps.length - 1}</p>
          </div>
        </div>
     

      </div>

      {/* Footer */}
      <footer className="vkb-footer">© 2025 VKB BOTs</footer>
    </div>
  );
}
