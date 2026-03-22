import React, { useState } from "react";

const BookRequest = () => {
  const [studentName, setStudentName] = useState("");
  const [studentId, setStudentId] = useState("");
  const [bookTitle, setBookTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [reason, setReason] = useState("");
  const [requests, setRequests] = useState([]);

  const handleControlledSubmit = (e) => {
    e.preventDefault();

    if (!studentName || !studentId || !bookTitle || !author || !reason) {
      alert("Please fill in all fields.");
      return;
    }

    const newRequest = { studentName, studentId, bookTitle, author, reason };
    setRequests([...requests, newRequest]);

    setStudentName("");
    setStudentId("");
    setBookTitle("");
    setAuthor("");
    setReason("");
  };

  return (
    <div className="form-group"
      style={{ 
        display: "flex", 
        flexDirection: "column",
        alignItems: "center", 
        justifyContent: "flex-start", 
        minHeight: "100vh" ,
       
      }}
    >
      <section>
        <h2>Book Request Form</h2>
        <form onSubmit={handleControlledSubmit}>
          <div>
            <label>Student Name</label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
            />
          </div>

          <div>
            <label>Student ID</label>
            <input
              type="text"
              value={studentId}
              onChange={(e) => setStudentId(e.target.value)}
            />
          </div>

          <div>
            <label>Book Title</label>
            <input
              type="text"
              value={bookTitle}
              onChange={(e) => setBookTitle(e.target.value)}
            />
          </div>

          <div>
            <label>Author</label>
            <input
              type="text"
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
            />
          </div>

          <div>
            <label>Reason for Request</label>
            <textarea
              rows={3}
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>

          <button type="submit">Submit Request</button>
        </form>
      </section>

      {requests.length > 2 && (
        <section style={{ marginTop: "4rem" }}>
          <h3>Submitted Book Requests ({requests.length})</h3>
          <ul>
            {requests.map((req, index) => (
              <li key={index}>
                <strong>{req.bookTitle}</strong> by {req.studentName} (ID: {req.studentId})
                <p>Reason: {req.reason}</p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
};

export default BookRequest;
