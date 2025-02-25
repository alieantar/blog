const links = document.querySelectorAll('a');

links.forEach(link => {
  link.addEventListener('click', function(event) {
    const clickedId = event.target.id;
    console.log("Clicked ID: ", clickedId);
    hideTitles();
    revealContent(clickedId);
  });
});

function hideTitles(){
  const contentList = document.querySelector(".view-container .post-list");
  contentList.classList.add("hide");
  console.log("Finished hideTitles()");
  // console.log(contentList.classList[1]);
}

function revealContent(clickedId){
  console.log("Clicked ID: ", clickedId);
  console.log(document.getElementsByClassName(clickedId));
  // document.querySelector(".content-viewport").classList.add(clickedId);
  // content.classList.remove("hide");
  // console.log("Finished revealContent()");
}