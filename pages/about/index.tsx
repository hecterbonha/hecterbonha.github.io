import React from "react";
import { LayoutManager } from "../../components/LayoutManager";
import Link from "next/link";
import { FullScreenFix } from "../../components/FullScreenFix";

const AboutIndex = () => {
  return (
    <LayoutManager htmlHeadTitle="About">
      <FullScreenFix
        backgroundColor="var(--darkGray)"
        textColor="var(--white)"
        borderColor="var(--peach)"
      >
        <div className="inner">
          <img src="/UUe46eY5_400x400.jpg" alt="Untung So Andryanto" className="usx" />
          <h1>Hallo! 👋</h1>
          <h4>My name is</h4>
          <h2>Untung So Andryanto</h2>
          <h4>and I build solution stack for people, web, application, and server.</h4>
          <div style={{ display: "flex", flexDirection: "row", marginTop: "16px" }}>
            <Link href="/about/tech-stack">
              <div className="link">.techstack</div>
            </Link>
            <Link href="/about/machine-setup">
              <div className="link">.hwinfo</div>
            </Link>
          </div>
        </div>
      </FullScreenFix>
      <style jsx>{`
        .inner {
          padding: 8px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
        }
        .usx {
          width: 180px;
          border: 2px solid var(--white);
          margin-bottom: 32px;
        }
        .link {
          color: var(--black);
          margin: 4px 8px 0px 0px;
          border: 2px solid var(--black);
          background-color: var(--white);
          padding: 8px 16px;
        }
        .link:hover {
          cursor: pointer;
        }
      `}</style>
    </LayoutManager>
  );
};

export default AboutIndex;
