import { createGlobalStyle } from "styled-components"
import reset from 'styled-reset'


export const GlobalStyle = createGlobalStyle`
  ${reset}
  *, *:before, *:after {
      box-sizing: border-box;
  }
  html  {
    box-sizing:border-box;
    scroll-behavior: smooth;
    font-family: 'Muli', sans-serif;
    color: #737b7d;
    font-size: 16px;
  }
  

  body {
    line-height: 1.5;
    letter-spacing: 0.2;
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

    .grid-container {
      position: fixed;
      left: 0px;
      top: auto;
      right: 0px;
      bottom: 0px;
      z-index: -1;
      display: block;
      max-width: 1170px;
    }

    .navbar {
      display: -webkit-box;
      display: -webkit-flex;
      display: -ms-flexbox;
      display: flex;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-align: center;
      -webkit-align-items: center;
      -ms-flex-align: center;
      align-items: center;
    }
  }

  .container {
    display: block;
    width: 100%;
    max-width: 1170px;
    margin-right: auto;
    margin-left: auto;
    padding-right: 30px;
    padding-left: 30px;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    -webkit-box-align: center;
    -webkit-align-items: center;
    -ms-flex-align: center;
    align-items: center;
  }
  

  
  
 
  
  .col {
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    overflow: visible;
    padding-right: 15px;
    padding-left: 15px;
    -webkit-box-orient: vertical;
    -webkit-box-direction: normal;
    -webkit-flex-direction: column;
    -ms-flex-direction: column;
    flex-direction: column;
    -webkit-box-align: start;
    -webkit-align-items: flex-start;
    -ms-flex-align: start;
    align-items: flex-start;
  }
  
  
  @media screen and (max-width: 991px) {
    .wrapper {
      padding-right: 30px;
      padding-left: 30px;
    }
    .grid {
      height: 100vh;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      -webkit-flex-direction: row;
      -ms-flex-direction: row;
      flex-direction: row;
      -webkit-box-pack: justify;
      -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
      justify-content: space-between;
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: stretch;
      -webkit-align-items: stretch;
      -ms-flex-align: stretch;
      align-items: stretch;
      -webkit-align-content: stretch;
      -ms-flex-line-pack: stretch;
      align-content: stretch;
    }
    .block {
      width: auto;
      min-height: auto;
      -webkit-align-self: stretch;
      -ms-flex-item-align: stretch;
      -ms-grid-row-align: stretch;
      align-self: stretch;
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
    .block.mobile {
      height: 100%;
      padding-right: 15px;
      padding-left: 15px;
      -webkit-flex-basis: 25%;
      -ms-flex-preferred-size: 25%;
      flex-basis: 25%;
    }
  }
  
  @media screen and (max-width: 767px) {
    .block {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
    .block.mobile {
      -webkit-flex-basis: 50%;
      -ms-flex-preferred-size: 50%;
      flex-basis: 50%;
    }
    .sticky-nav {
      position: relative;
    }
    .nav-grid {
      text-align: center;
    }
  }
  
  @media screen and (max-width: 479px) {
    .grid {
      -webkit-flex-wrap: wrap;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
    }
    .block {
      -webkit-box-flex: 0;
      -webkit-flex: 0 0 100%;
      -ms-flex: 0 0 100%;
      flex: 0 0 100%;
    }
    .sticky-nav {
      padding: 0px;
    }
    .nav-grid {
      grid-auto-flow: row;
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
      -ms-grid-rows: 100px;
      grid-template-rows: 100px;
    }
    .nav-logo-link {
      border-top: 1px solid #c4c4c4;
    }
    .nav-link {
      padding-top: 10px;
      padding-bottom: 10px;
      border-top: 1px solid #c4c4c4;
    }
    .row {
      -ms-grid-columns: 1fr;
      grid-template-columns: 1fr;
    }
    .button.hero-margin {
      width: 100%;
      text-align: center;
    }
    .heading {
      font-size: 35px;
    }
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

