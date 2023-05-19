import React from "react";
import styled from "styled-components";
import Button from "../../components/UI/Button";
import { useNavigate } from "react-router-dom";

function Notifiactions() {
  const navigate = useNavigate();

  const goToAnouncementsPageHandler = () => {
    navigate("/anouncements");
  };
  return (
    <Container>
      <div>
        <h1>Notifiactions Pages </h1>

        <ButtonDiv onClick={goToAnouncementsPageHandler}>
          go to the Anouncements page
        </ButtonDiv>
      </div>
    </Container>
  );
}

export default Notifiactions;

const Container = styled.div`
  margin: 30px;
  display: flex;
  background-color: #fff;
  width: 79vw;
  height: 93vh;
  padding: 40px;
`;

const ButtonDiv = styled(Button)`
  margin-top: 50px;
  text-transform: capitalize;
  margin-top: 50px;
  text-transform: capitalize;
  padding: 0.8rem 1.7rem;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1.4px;
  font-weight: 700;
  color: #000;
  background-color: #dcadfd;
  border: none;
  border-radius: 45px;
  box-shadow: 0px 8px 15px #531c3687;
  transition: all 0.3s ease 0s;
  cursor: pointer;
  outline: none;

  &:hover {
    background-color: #3d1d78;
    box-shadow: 0px 15px 20px #5b347679;
    color: #fff;
    transform: translateY(-7px);
  }

  &:active {
    transform: translateY(-1px);
  }
`;
