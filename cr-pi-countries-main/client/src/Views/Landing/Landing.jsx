// Landing.jsx
import React from "react";
import style from "./Landing.module.css";

export default function Landing() {
  return (
    <div className={style.container}>
      <div>
        <h1>Welcome!</h1>
        <p>Start your journey with us.</p>
        <a href="/home">Get Started</a>
      </div>
    </div>
  );
}
