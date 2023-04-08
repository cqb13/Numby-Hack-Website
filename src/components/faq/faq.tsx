import FaqQuestion from "./question/faqQuestion";
import faq from "../../assets/faq/questions";
import "./faq.css";

const FAQ = () => {
  return (
    <section className='content-section faq' id='faq'>
      <section className='test'>
        {faq.map((question, index) => {
          return <FaqQuestion key={index} {...question} />;
        })}
      </section>
      <section className='vertical-container'>
        <section className='info-container'>
          <h1 className='title'>Frequently Asked Questions</h1>
          <hr />
          <span>
            Before contacting me, please check the FAQ below. If your question
            is not answered here, please contact me on Discord.
          </span>
        </section>
        <section className='info-container'>
          <h1 className='title'>Contact Me</h1>
          <hr />
          <span>
            The best way to contact me is through discord.
            <br />
            <br />
            My discord username is: <b>cqb13#8875</b>
          </span>
        </section>
      </section>
    </section>
  );
};

export default FAQ;
