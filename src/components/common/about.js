import {
  
  Row,
  
} from "react-bootstrap";
import Constants from "../../constants/constants";
import aboutPath from "./about.md";
import ReadmeRenderer from "../core/renderers/ReadmeRenderer/readmeRenderer";


export default function About() {
  
    return (
      <div style={{ width: "100%" ,backgroundColor:Constants.TERTIARY}}>
        <Row style={{padding:12,margin:0}}>
          <ReadmeRenderer file={aboutPath}></ReadmeRenderer>
        </Row>
      </div>
    );
  
}
