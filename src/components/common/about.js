import {
  
  Row,
  
} from "react-bootstrap";
import Constants from "../../constants/constants";
import GistRenderer from "../core/renderers/GistRenderer/gistRenderer";


export default function About() {
  
    return (
      <div style={{ width: "100%", backgroundColor: Constants.TERTIARY }}>
        <GistRenderer
          id="e2546541f9ca380c3025c6803c02d778"
          code={false}
        ></GistRenderer>
      </div>
    );
  
}
