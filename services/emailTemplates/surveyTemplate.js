module.exports = survey => {
    return `
     <html>
       <body>
           <div style="text-align: center;">
              <h3>I'd like your input</h3>
              <p>Please answer the following questions:</p>
              <p>${survey.body}</p>
              <div>
                <a href="/survey/api/surveys">Yes</a>
              </div>
              <div>
                <a href="/survey/api/surveys">No</a>
              </div>
           </div>
       </body>
     </html>
     `;
};