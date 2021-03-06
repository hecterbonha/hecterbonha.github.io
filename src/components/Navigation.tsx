import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Navigation: React.FC = () => {
  const [toggleNav, setToggleNav] = useState<boolean>(false);
  const [fullScreenWidth, setFullScreenWidth] = useState<any>("100vw");
  const router = useRouter();
  useEffect(() => {
    if (process.browser) {
      setFullScreenWidth(`${document.body.clientWidth}px`);
    }
  }, []);
  return (
    <React.Fragment>
      <div className="navigation-bar">
        <div className="nav-mobile">
          <div className="nav-button" onClick={() => setToggleNav(!toggleNav)}>
            三
          </div>
        </div>
        <div className="nav-wrapper">
          <Link href="/">
            <div className={`nav-button black ${router.pathname === "/" ? "nav-active" : ""}`}>
              .root
            </div>
          </Link>
          <Link href="/about">
            <div
              className={`nav-button darkGray ${
                router.pathname === "/about" ||
                router.pathname === "/about/tech-stack" ||
                router.pathname === "/about/machine-setup" ||
                router.pathname === "/about/bio"
                  ? "nav-active"
                  : ""
              }`}
            >
              .about
            </div>
          </Link>
          <Link href="/blog">
            <div className={`nav-button indigo ${router.pathname === "/blog" ? "nav-active" : ""}`}>
              .blog
            </div>
          </Link>
          <Link href="/labo">
            <div className={`nav-button pink ${router.pathname === "/labo" ? "nav-active" : ""}`}>
              .labo
            </div>
          </Link>
        </div>
      </div>
      <div className="blur" onClick={() => setToggleNav(!toggleNav)}></div>
      <style jsx global>{`
        body {
          overflow: ${toggleNav ? "hidden" : "auto"};
        }
      `}</style>
      <style jsx>{`
        .navigation-bar {
          position: fixed;
          top: 8px;
          width: 100%;
          z-index: 10;
        }
        .nav-mobile {
          display: none;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 8px;
        }
        .nav-wrapper {
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          margin-right: 8px;
        }
        .nav-button {
          margin: 16px;
          background-color: var(--black);
          color: var(--white);
          padding: 8px;
          border: 2px solid var(--white);
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
        }
        .nav-button:hover {
          cursor: pointer;
        }
        .nav-button:active {
          background-color: var(--white);
          color: var(--black);
        }
        .darkPurple {
          background-color: var(--darkPurple);
        }
        .darkGray {
          background-color: var(--darkGray);
        }
        .indigo {
          background-color: var(--indigo);
        }
        .pink {
          background-color: var(--pink);
        }
        .nav-active {
          text-decoration-line: underline;
        }
        .blur {
          min-height: 100vh;
          min-width: ${fullScreenWidth};
          position: fixed;
          top: 0;
          left: 0;
          display: ${toggleNav ? "block" : "none"};
          background-color: rgba(0, 0, 0, 0.85);
        }
        @media only screen and (max-width: 600px) {
          .nav-wrapper {
            display: ${toggleNav ? "flex" : "none"};
            flex-direction: column;
            margin: 0 16px;
            background: var(--darkBlue);
            border: 4px solid var(--white);
          }
          .nav-mobile {
            display: flex;
          }
        }
      `}</style>
    </React.Fragment>
  );
};

export { Navigation };
