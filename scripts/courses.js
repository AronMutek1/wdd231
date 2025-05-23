document.addEventListener("DOMContentLoaded", () => {
    function output(courses) {
        const certificates = {
            "Web and Computer Programming": {
                container: document.querySelector(".boxcertificate01"),
                totalCredits: 0,
                totalCreditsElement:
                    document.getElementById("totalCreditsCert01"),
            },
        };

        courses.forEach((course) => {
            const courseDiv = document.createElement("div");
            courseDiv.classList.add(
                "course",
                course.completed ? "courseComplete" : "courseNoComplete"
            );
            courseDiv.setAttribute("data-subject", course.subject);
            courseDiv.setAttribute("data-credits", course.credits);

            const courseTitle = document.createElement("h3");
            courseTitle.textContent = `${course.subject} ${course.number}`;
            courseDiv.appendChild(courseTitle);

            const certificate = certificates[course.certificate];
            if (certificate) {
                certificate.container.appendChild(courseDiv);
            }

            courseDiv.addEventListener("click", () => {
                displayCourseDetails(course);
            });
        });

        updateCredits("ALL");
    }

    function updateCredits(filter) {
        let totalCredits = 0;

        document.querySelectorAll(".course").forEach((course) => {
            const credits = parseInt(course.getAttribute("data-credits"), 10);
            const subject = course.getAttribute("data-subject").toUpperCase();

            if (filter === "ALL" || filter === subject) {
                totalCredits += credits;
            }
        });

        document.getElementById(
            "totalCreditsCert01"
        ).innerHTML = `<strong>Total Credits:</strong> ${totalCredits}`;
    }

    const boxButtons = document.querySelectorAll(".boxButton button");
    boxButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const filter = button.value.toUpperCase();

            document.querySelectorAll(".course").forEach((course) => {
                const subject = course
                    .getAttribute("data-subject")
                    .toUpperCase();
                course.style.display =
                    filter === "ALL" || filter === subject ? "block" : "none";
            });

            updateCredits(filter);
        });
    });

    document.querySelector('.boxButton button[value="all"]').click();

    const courseDetails = document.getElementById("courses-details");

    function displayCourseDetails(course) {
        courseDetails.innerHTML = `
            <button id="closeModal">X</button>
            <h2>${course.subject} ${course.number}</h2>
            <h3>${course.title}</h3>
            <p><strong>Credits</strong>: ${course.credits}</p>
            <p>${course.description}</p>
            <p><strong>Technologies</strong>: ${course.technology.join(
                ", "
            )}</p>
        `;
        courseDetails.showModal();

        document.getElementById("closeModal").addEventListener("click", () => {
            courseDetails.close();
        });
    }

    const courses = [
        {
            subject: "CSE",
            number: 110,
            title: "Introduction to Programming",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Computer Programming is the process of creating software and applications that run on the internet or computers. It involves writing code using languages like HTML, CSS, JavaScript, Python, and Java to build websites, mobile apps, and desktop software. Programmers use problem-solving skills to develop interactive, user-friendly, and functional digital tools that power everything from simple web pages to complex systems. This field combines creativity with logic and is essential in today’s digital world. course will introduce students to programming. It will introduce the building blocks of programming languages (variables, decisions, calculations, loops, array, and input/output) and use them to solve problems.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 130,
            title: "Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Computer Programming is the creation of websites and software using code to build interactive and functional digital tools.",
            technology: ["HTML", "CSS"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 111,
            title: "Programming with Functions",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Programming with Functions is the practice of building websites and using functions in code to organize, reuse, and simplify tasks, making development more efficient and manageable.",
            technology: ["Python"],
            completed: true,
        },
        {
            subject: "CSE",
            number: 210,
            title: "Programming with Classes",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Programming with Classes involves creating websites and using classes in code to organize data and behavior into reusable, structured components for efficient and scalable development.",
            technology: ["C#"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 131,
            title: "Dynamic Web Fundamentals",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Dynamic Web Fundamentals focuses on building websites that not only display content but also interact with users in real time. It covers the basics of web development using HTML, CSS, and JavaScript, and introduces dynamic features like user input, data updates, and responsive design to create engaging, interactive web experiences.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: true,
        },
        {
            subject: "WDD",
            number: 231,
            title: "Frontend Web Development I",
            credits: 2,
            certificate: "Web and Computer Programming",
            description:
                "Web and Frontend Web Development is the process of designing and building the parts of a website that users see and interact with. It involves using HTML, CSS, and JavaScript to create responsive, accessible, and visually appealing interfaces that work smoothly across different devices and screen sizes.",
            technology: ["HTML", "CSS", "JavaScript"],
            completed: true,
        },
    ];
    output(courses);
});