function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// JavaScript for the modal functionality
document.addEventListener("DOMContentLoaded", function() {
  var modal = document.getElementById("projectModal");
  var btns = document.querySelectorAll(".project-btn");
  var span = document.getElementsByClassName("close")[0];

  btns.forEach(function(btn) {
    btn.onclick = function() {
      var project = this.getAttribute("data-project");
      displayProjectDetails(project);
      modal.style.display = "block";
    };
  });

  span.onclick = function() {
    modal.style.display = "none";
  };

  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };

  function displayProjectDetails(project) {
    var projectDetailsContainer = document.getElementById("projectDetails");
    switch (project) {
      case "project1":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-1-img.jpeg" alt="Project 1 Details" style="width:100%;height:auto;" />
            <h2>Agri Multiway Analyzer (ML/DL)</h2>
            <p>This project provides the farmer with two things: a correct and accurate prediction of crop sustainability in the given area, and fertilizer suggestions for the crops by disease detection.</p>
            <p><strong>Tech stack:</strong> Machine learning, Deep learning</p>
            <p><strong>Language:</strong> Python</p>
          </div>
        `;
        break;
      case "project2":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-2-img.jpeg" alt="Project 2 Details" style="width:100%;height:auto;" />
            <h2>Comment Toxicity Detection</h2>
            <p>This model spots and detects toxic comments using deep learning and Python. These comments are classified based on the vectorized score of the comment.</p>
            <p><strong>Tech stack:</strong> Deep learning</p>
            <p><strong>Language:</strong> Python</p>
          </div>
        `;
        break;
      case "project3":
        projectDetailsContainer.innerHTML = `
          <div>
          <img src="./assets/project-3-img.webp" alt="Project 3 Details" style="width:100%;height:auto;" />
            <h2>E-KYC Using Blockchain Technology</h2>
            <p>A blockchain-based application in the banking sector to update the customer's KYC details in the blockchain network. Banks in the network can access customer details from the distributed ledger.</p>
            <p><strong>Tech stack:</strong> Ganache, Metamask</p>
            <p><strong>Language:</strong> Solidity</p>
          </div>
        `;
        break;
    }
  }
});
