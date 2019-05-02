const keys = require('../../config/keys');

module.exports = (project) => {
  return `
    <html>
      <body>
        <div style="text-align:center;border:1px solid #ebebeb;box-shadow: 4px 2px 3px rgba(0,0,0,0.3);">
          <h2 style="background-color:#DC3522;color:#FFF;">You have been added to a Group Project!</h2>
          <p>Create an account with this email on projectPLUS:</p>
          <p>${project.body}</p>
          <div style="padding:10px;display:flex;justify-content: center;">
            <a style="text-decoration:none;color:#FFF;background-color:#F24E18;padding:7px 15px;margin:5px;box-shadow: 1px 2px 2px rgba(0,0,0,0.3);" href="${keys.redirectDomain}/projects/${project.id}/join">Yes</a>
            <a style="text-decoration:none;color:#FFF;background-color:#374140;padding:7px 15px;margin:5px;box-shadow: 1px 2px 2px rgba(0,0,0,0.3);" href="${keys.redirectDomain}/projects/${project.id}/decline">No</a>
          </div>
        </div>
      </body>
    </html>
  `;
};
