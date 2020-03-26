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
  font-size: 52px;
  line-height: 1.3em;
  font-weight: 700;
}

h2 {
  margin-top: 20px;
  margin-bottom: 40px;
  color: #0d3b66;
  font-size: 48px;
  line-height: 1.5em;
  font-weight: 700;
}


p {
  margin: 0 0 10px;
}
`