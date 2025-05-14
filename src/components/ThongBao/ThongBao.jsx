import { useEffect, useState } from "react";
import { useNavigate } from "zmp-ui";
import { CheckCircle } from "lucide-react";
import "./ThongBao.scss";

const ThongBao = () => {
  const navigate = useNavigate();
  const [countdown, setCountdown] = useState(5);
  const [buttonEnabled, setButtonEnabled] = useState(false);

  useEffect(() => {
    let timer;
    if (countdown > 0) {
      timer = setTimeout(() => {
        setCountdown((prev) => prev - 1);
      }, 1000);
    } else {
      setButtonEnabled(true);
    }
    return () => clearTimeout(timer);
  }, [countdown]);

  return (
    <div className="thong-bao-container">
      <CheckCircle className="icon" size={64} color="#4CAF50" />
      <h2>Điểm danh thành công!</h2>
      <p>Chúc bạn một buổi học vui vẻ 🎉</p>
      <button
        className="btn-home"
        onClick={() => navigate("/student")}
      >
        Quay lại
      </button>
    </div>
  );
};

export default ThongBao;
