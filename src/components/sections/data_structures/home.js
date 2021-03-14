import React from "react";
import {Card, Row, Col } from "react-bootstrap";
import Constants from "../../../constants/constants";
import GistRenderer from "../../core/renderers/GistRenderer/gistRenderer";

export default function DataStructureTab(){
  
   return (
     <div>
       <Col
         style={{
           margin: "auto",
           backgroundColor: "white",
           borderRadius: 0,
           padding: 4,
         }}
       >
         <Card
           style={{
             margin: 8,
             height: "100%",
             paddingBottom: 10,
           }}
         >
           <Row
             style={{
               padding: 4,
               margin: "0% 0% 0% 0%",
             }}
           >
             <Col
               style={{
                 padding: 0,
                 margin: 0,
               }}
             >
               <Row style={{ padding: 0, margin: 0 }}>
                 <Card
                   className="textStyleCode"
                   style={{
                     width: "100%",
                     backgroundColor: Constants.PRIMARY,

                     // border: "none",
                     borderRadius: 4,
                     padding: 4,
                     fontSize: "13px",
                     fontWeight: "500",
                     color: Constants.SECONDARY,
                     margin: 4,
                   }}
                 >
                   <Row
                     style={{
                       padding: 0,

                       margin: 0,
                     }}
                   >
                     <Col style={{ padding: 4, margin: 0, textAlign: "start" }}>
                       {Constants.DATASTRUCTURE}
                     </Col>
                   </Row>
                 </Card>
               </Row>
               <Row
                 gutter={40}
                 style={{
                   padding: 0,
                   margin: 0,
                   marginTop: 5,
                   textAlign: "start",
                 }}
               >
                 <ul>
                   {Constants.DSLIST.map((l) => (
                     <li
                       style={{ padding: 4, fontSize: 14, fontWeight: 500 }}
                       key={l.key}
                     >
                       <a href={Constants.HOST + "ds/" + l.key}>{l.name}</a>
                     </li>
                   ))}
                 </ul>
               </Row>
             </Col>
           </Row>
           <GistRenderer
         
         
                   id="30db585c381f04dc36f02b89b4eab92b"
     
     
                           code={false}
           
           
           ></GistRenderer>
         </Card>
       </Col>
     </div>
   );
  
}
