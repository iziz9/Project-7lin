import { useCallback } from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../store/modalAtom";

type OpenModalType = {
  title: string;
  content: JSX.Element | string;
  callback?: () => any;
};

export const useModal = () => {
  const [modalDataState, setModalDataState] = useRecoilState(modalState);

  const closeModal = useCallback(
    () =>
      setModalDataState((prev: OpenModalType) => {
        return { ...prev, isOpen: false };
      }),
    [setModalDataState],
  );

  const openModal = useCallback(
    ({ title, content, callback }: OpenModalType) =>
      setModalDataState({
        isOpen: true,
        title: title,
        content: content,
        callBack: callback,
      }),
    [setModalDataState],
  );

  return { modalDataState, setModalDataState, closeModal, openModal };
};
