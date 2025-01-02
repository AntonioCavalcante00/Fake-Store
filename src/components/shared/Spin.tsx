import { ImSpinner2 } from "react-icons/im";
import s from "./Spin.module.css";

export const Spin: React.FC = () => {
  return (
    <>
      <div className={s.Container}>
        <ImSpinner2 className={s.Spinner} />
      </div>
    </>
  );
};
