import React from "react";
import Styles from "../style.module.css";

export default function AboutCard({ className }) {
  return (
    <div className={`${Styles.eachCard} ${className}`}>
      <h1>About Card</h1>
    </div>
  );
}
