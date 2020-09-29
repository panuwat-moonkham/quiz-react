import React from "react";
import ContainerLaout from "./components/ContainerLayout";
import Content from "./components/Content";
import Footer from "./components/Footer";
import Button from "./components/Button";
import Navbar from "./components/Navbar";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ContainerLaout>
        <Navbar>
          <Button>Sign In</Button>
        </Navbar>
        <Content>
          <Button>SEARCH</Button>
        </Content>
        <Footer footerName="Copy Right" name="Panuwat">
          <Button>Login</Button>
        </Footer>
      </ContainerLaout>
    </div>
  );
}
