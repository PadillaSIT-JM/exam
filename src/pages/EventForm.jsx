import { useRef } from "react";

const EventForm = () => {

  const nameRef = useRef();
  const idRef = useRef();
  const titleRef = useRef();
  const authorRef = useRef();
  const reasonRef = useRef();

  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();

    const data = {
      studentName: nameRef.current.value.trim(),
      studentId: idRef.current.value.trim(),
      bookTitle: titleRef.current.value.trim(),
      author: authorRef.current.value.trim(),
      reason: reasonRef.current.value.trim(),
    };

    if (!data.studentName || !data.studentId || !data.bookTitle || !data.author || !data.reason) {
      alert("Validation Error: All fields are required!");
      return;
    }

    console.log("Submitted:", data);
    alert("Check the console!");


    nameRef.current.value = "";
    idRef.current.value = "";
    titleRef.current.value = "";
    authorRef.current.value = "";
    reasonRef.current.value = "";
  };

  return (
    <div className="fixed-group"
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <h2>Event Feedback Form</h2>
      <p>Submit your feedback about the event below:</p>

      <form onSubmit={handleUncontrolledSubmit}>
        <div style={{ marginBottom: "1rem" }}>
          <label>Student Name</label>
          <input type="text" ref={nameRef} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Email</label>
          <input type="text" ref={authorRef} />
        </div>

        <div style={{ marginBottom: "1rem" }}>
          <label>Feedback</label>
          <textarea rows={4} ref={reasonRef} />
        </div>

        <button type="submit">Submit Feedback</button>
       
      </form>
    </div>
  );
};

export default EventForm;
