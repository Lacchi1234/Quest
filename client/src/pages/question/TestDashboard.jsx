import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Question from './Question';
import QuestionInfo from "./QuestionInfo";

const TestDashboard = () => {
  return (
    <div className="d-flex flex-column min-vh-100 vw-100">
      {/* Header */}
      <header className="text-center py-3 border-bottom">
        <h1>Test Page</h1>
      </header>

      {/* Main Content */}
      <main className="flex-grow-1 container-fluid my-4">
        <div className="row h-100">
          <div className="col-md-7 d-flex">
            <Question/>
          </div>

          <div className="col-md-5 d-flex">
           <QuestionInfo/>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="text-center py-3 border-top">
        <p>© 2024 Test Page. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default TestDashboard;

