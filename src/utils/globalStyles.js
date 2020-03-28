import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: Muli, sans-serif;
    color: #737b7d;
    font-size: 16px;
    line-height: 1.3em;
    font-weight: 400;
  }
  a {
    color: #0d3b66;
    text-decoration: none;
    font-weight: 600;
    padding: 35px 32px 35px 0;
  }
  /* Fade-In Animation */
  .fade-in-section {
    opacity: 0;
    transform: translateY(20vh);
    visibility: hidden;
    transition: opacity 1200ms ease-out, 
                transform 600ms ease-out,
                visibility 1200ms ease-out;
    will-change: opacity, transform, visibility;
  }
  .fade-in-section.is-visible {
    opacity: 1;
    transform: none;
    visibility: visible;
  }

  .wrapper {
    left: 0px;
    top: 0px;
    right: 0px;
    display: block;
    width: 100%;
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
  }


h1 {
  margin-top: 20px;
  margin-bottom: 40px;
  color: #0d3b66;
  font-size: 2.75em;
  line-height: 1.3em;
  font-weight: 700;
  letter-spacing: 0.2px;
}

h2 {
  margin-top: 20px;
  margin-bottom: 20px;
  color: #0d3b66;
  font-size: 1.7em;
  line-height: 1.3em;
  font-weight: 700;
  letter-spacing: 0.2px;
}

h3 {
  margin-top: 20px;
  margin-bottom: 40px;
  color: #0d3b66;
  font-size: 1.2em;
  line-height: 1.3em;
  font-weight: 700;
  letter-spacing: 0.2px;
}
h6 {
  margin: 25px 0;
  color: #0d3b66;
  font-size: 1.05em;
  line-height: 1.0em;
  font-weight: 700;
  letter-spacing: 0.2px;
}

p {
  margin: 0 0 10px;
}
`