function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;
  // 是否是答案
  function judgeIsAnswer(index) {
    if (!hasAnswered) {
      return "";
    }
    return question.correctOption === index ? "correct" : "wrong";
  }
  return (
    <div className="options">
      {question.options.map((option, index) => {
        return (
          <button
            disabled={hasAnswered}
            className={`btn btn-option ${
              index === answer ? "answer" : ""
            } ${judgeIsAnswer(index)}`}
            key={option}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default Options;
