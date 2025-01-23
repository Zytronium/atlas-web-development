// Notice: I had this function AI generated to save time. https://chatgpt.com/share/67918617-bdac-8009-ae8b-8b864f9ed53e (and then edited by me)
function inspectPageSim() {
    const body = document.body;
    const elements = [...body.children];

    // Remove elements one by one with a delay
    elements.forEach((element, index) => {
        setTimeout(() => {
            element.remove();
        }, index * 250); // 1/4 second delay
    });

    // After all elements are removed
    setTimeout(() => {
        // Add a new <p> element
        const message = document.createElement("p");
        message.textContent = "Text Element";
        message.style.fontSize = "2rem";
        body.style.textAlign = "center";
        body.appendChild(message);
        body.style.height = "auto";

        // Wait half a second before setting the text content
        setTimeout(() => {
            message.textContent = "Never gonna give you up!";

            // Wait half a second before setting the background gradient
            setTimeout(() => {
                // Add a linear gradient as the background
                body.style.backgroundImage = "linear-gradient(5deg, rgb(66 143 255), #3bafff)";
                body.style.backgroundSize = "cover";

                // Wait half a second before setting the text color as white
                setTimeout(() => {
                    body.style.color = "white";

                    // Wait 3 seconds and then display the video full-screen
                    setTimeout(() => {
                        // Create a cover so people can't right click the video
                        const cover = document.createElement("div");
                        cover.id = "cover";
                        body.appendChild(cover);

                        // Create the video
                        const video = document.createElement("video");
                        video.src = "videos/rickroll_of_death.mp4";
                        video.id = "rrod";
                        video.autoplay = true;
                        body.appendChild(video);
                        video.style.display = "block";

                        // Hide the cursor starting at a certain point in the video
                        setTimeout(() => {
                            body.style.cursor = "none";
                        }, 3500);
                    }, 3000);
                }, 500);
            }, 500);
        }, 500);
    }, elements.length * 250);
}

document.getElementById("simButton").onclick = inspectPageSim;