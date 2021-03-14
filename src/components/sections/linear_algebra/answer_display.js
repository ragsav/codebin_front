import React from "react";
import { Grid } from "@agney/react-loading";
import { Form, Button, Card, Row, Col, Container } from "react-bootstrap";
import Constants from "../../../constants/constants";
import { useEffect, useState } from "react";



export default function DisplayAnswer(props) {
  return (
    <div
      style={{
        // display: "inline-block",
        margin: 0,
        padding: 16,

        border: `1px solid ${Constants.PRIMARY}`,
        borderRadius: 4,
      }}
    >
      {props.comp[0]}
    </div>
  );
}
