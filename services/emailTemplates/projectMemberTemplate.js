const keys = require('../../config/keys');

module.exports = (project) => {
  return `
    <html>
      <body>
        <div style="text-align: center">
          <h2>You have been added to a Group Project!</h2>
          <p>Create an account with this email on projectPLUS:</p>
          <p>${project.body}</p>
          <div>
            <a href="${keys.redirectDomain}">Yes</a>
          </div>
          <div>
            <a href="${keys.redirectDomain}">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
