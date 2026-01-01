const toggleBtn = document.querySelector(".mobileviewlist");
const icon = document.querySelector(".mobileviewlist i");
const sidebar = document.querySelector(".left_side");

// toggle button click
toggleBtn.addEventListener("click", () => {
  if (icon.classList.contains("bi-list")) {
    icon.classList.replace("bi-list", "bi-x");
    sidebar.style.left = "0";
  } else {
    closeSidebar();
  }
});

// close sidebar function
function closeSidebar() {
  icon.classList.replace("bi-x", "bi-list");
  sidebar.style.left = "-350px";
}

// close on menu item click
document.querySelectorAll(".left_side a").forEach(item => {
  item.addEventListener("click", () => {
    
     if (window.innerWidth < 1200) {
      closeSidebar();
    }
  });
});

// ✅ FIX: Handle screen resize
window.addEventListener("resize", () => {
  if (window.innerWidth >= 1200) {
    sidebar.style.left = "0"; // show sidebar
    icon.classList.replace("bi-x", "bi-list");
  } else {
    sidebar.style.left = "-350px"; // hide on mobile
  }
});


  document.addEventListener("DOMContentLoaded", function () {
                    let text = "I'm Web Developer";
                    let index = 0;

                    function type() {
                        if (index < text.length) {
                            document.getElementById("typing").innerHTML += text.charAt(index);
                            index++;
                            setTimeout(type, 100); // typing speed
                        }
                    }

                    setTimeout(type, 1500);
                });


let attopicon = document.querySelector(".attop");
window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
        attopicon.style.opacity = "1";
        attopicon.style.visibility = "visible";
    } else {
        attopicon.style.opacity = "0";
        attopicon.style.visibility = "hidden";
    }
});
attopicon.addEventListener("click", () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});




const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (scrollY >= sectionTop - sectionHeight / 3) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});
