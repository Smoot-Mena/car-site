import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    navigate("/");
  };

  return (
    <form action="" id="contact-form">
      <label htmlFor="subject">Subject: </label>
      <input type="text" name="subject" id="form-subject" />

      <label htmlFor="inquiry">Inquiry: </label>
      <textarea name="inquiry" id="form-inquiry" cols="20" rows="10"></textarea>

      <button onClick={handleSubmit}>Submit</button>
    </form>
  );
};

export default Contact;