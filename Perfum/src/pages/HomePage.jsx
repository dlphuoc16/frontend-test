import React, { useState } from "react";
import "./HomePage.css";

function HomePage() {
  const [showQuestions, setShowQuestions] = useState(false);

  const questions = ["Xin chào chúng tôi có thẻ giúp gì cho bạn "];

  return (
    <div>
      <button
        className="support-button"
        onClick={() => setShowQuestions(!showQuestions)}
      >
        Hỗ trợ
      </button>
      {showQuestions && (
        <div className="question-form">
          {questions.map((question, index) => (
            <div key={index}>
              <label>{question}</label>
              <input type="text" />
            </div>
          ))}
          <button type="submit">Gửi</button>
        </div>
      )}
    </div>
  );
}

export default HomePage;
