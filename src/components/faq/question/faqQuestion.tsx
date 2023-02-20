import { FAQ } from "../../../assets/faq/questions"

const FaqQuestion = (props: FAQ) => {
  return (
    <section className='faq-container colored-container'>
      <h2>{props.question}</h2>
      <hr />
      <section className='answer-container'>
        <pre>
            {props.answer}
        </pre>
      </section>
    </section>
  );
};

export default FaqQuestion;
