import styled from 'styled-components';

export const Container = styled.div`
  z-index: 2;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Form = styled.div`
  padding: 10px;
  background-color: white;
  width: 700px;
  max-width: 95%;
`;

export const FormGroup = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 15px;
`;

export const Label = styled.label`
  color: #2b66cc;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 100%;
  border: 1px solid #2b66cc;
  background-color: white;
  font-size: 1.2rem;
  color: black;
`;

export const Button = styled.button`
  width: 100%;
  padding: 10px 20px;
  background-color: #2b66cc;
  font-size: 1.2rem;
  color: white;
  border: 1px solid #2b66cc;
  cursor: pointer;
`;

// Modal
export const Modal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%) scale(0);
  background-color: white;
  width: 600px;
  max-width: 90%;
  transition: 0.3s linear;
  box-shadow: 0px 0px 50px 20px rgba(0, 0, 0, 0.75);
  min-height: 200px;

  &.active {
    transform: translate(-50%, -50%) scale(1);
  }
`;

export const ModalHeader = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #2b66cc;
  color: white;
  padding: 10px;
`;

export const CloseModal = styled.button`
  padding: 10px;
  border: none;
  background: none;
  font-size: 2rem;
  color: white;
  cursor: pointer;
`;

export const ModalBody = styled.div`
  height: 100%;
  width: 100%;
  text-align: center;
  display: grid;
  place-items: center;
  padding: 10px;
  color: black;
  font-size: 1.2rem;
`;

export const ModalLink = styled.a`
  display: inline;
  color: #2b66cc;
`;
