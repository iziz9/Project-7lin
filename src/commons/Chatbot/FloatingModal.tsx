import { useState, useEffect } from "react";
import styled from "styled-components";
import FloatingInput from "./FloatingInput";
import { PersonalData } from "../Terms";
import { TimeFormatEnum, currentTime } from "../../utils/CurrentTime";
import { useMediaQuery } from "react-responsive";
import { intro, questions } from "./questionsAndAnswers";
import { useRecoilState } from "recoil";
import { chatbotStepState } from "../../store/chatbotAtom";

export interface ChatListType {
  person: string;
  time: string;
  message: string;
}

const FloatingModal = () => {
  const [chatbotStep, setChatbotStep] = useRecoilState(chatbotStepState);

  const [orderNumber, setOrderNumber] = useState(0);
  const [recievedMessage, setRecievedMessage] = useState<string>(
    questions[orderNumber],
  );
  const [myMessage, setMyMessage] = useState<string>("");
  const [chatList, setChatList] = useState<Array<ChatListType>>([]);
  const time = currentTime(1000, TimeFormatEnum.HHmm);

  useEffect(() => {
    myMessage.length >= 1 &&
      setChatList((prev) => [
        ...prev,
        { person: "me", time: time, message: myMessage },
      ]);
  }, [myMessage]);

  useEffect(() => {
    recievedMessage.length >= 1 &&
      setChatList((prev) => [
        ...prev,
        { person: "question", time: time, message: recievedMessage },
      ]);
  }, [recievedMessage]);

  return (
    <Modal>
      <div className="inner">
        <PersonalData />
        <FloatingInput setMyMessage={setMyMessage} orderNumber={orderNumber} />
      </div>
    </Modal>
  );
};

const Modal = styled.div`
  width: 450px;
  height: 700px;
  z-index: -99;
  position: absolute;
  right: 60px;
  bottom: 70px;
  background-color: #f5f5f5;
  opacity: 0.95;
  display: flex;
  justify-content: center;
  border-radius: 8px;
  box-shadow: 2px 2px 5px 1px var(--color-grayscale20);

  .inner {
    width: 420px;
    height: 530px;
    margin: 20px auto;
  }

  @media (max-width: 850px) {
    width: 380px;
    height: 460px;
    right: 30px;
    bottom: 70px;

    .inner {
      width: 350px;
      height: 300px;
      margin: 15px auto;
    }
  }

  @media (max-width: 600px) {
    width: 280px;
    height: 460px;
    right: 30px;
    bottom: 70px;

    .inner {
      width: 250px;
      height: 300px;
      margin: 15px auto;
    }
  }
`;

export default FloatingModal;
