import "styled-components";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 110vh;
  width: 100%;
  font-size: large;
  background-color: #e7e393;
  padding-top: 2cm;
  padding-bottom: 5cm;

  .Container {
    height:fit-content;
    position: relative;
    contain: layout inline-size;
    padding: 1cm;
    padding-top: 1cm;
    padding-bottom: 1cm;
    box-shadow: 0px 10px 10px black;
    background-color: #fea95e;

   
    
    width: 60%;
    font-family: "Poppins", sans-serif;
  }

  .Container:hover {
    box-shadow: 0 0 10px #dd7230;
  }

  h3 {
    font-size: 30px;
    font-family: Arial, Helvetica, sans-serif;
  }

  img {
    height: 5cm;
    width: 5cm;
  }

  .form {
    margin: auto;
    padding: 0.25cm;
    text-align: left;
  }
`;

export default Wrapper;
