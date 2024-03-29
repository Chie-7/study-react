import React from "react";
import styles from "/src/components/Main/Main.module.css";
import { Links } from "/src/components/Links/";
import { Headline } from "/src/components/Headline/";

export function Main(props) {
  return (
    <main className={styles.main}>
      <Headline page={props.page}>
        <code className={styles.code}>pages/{props.page}.js</code>
      </Headline>
      <Links />
    </main>
  );
}
