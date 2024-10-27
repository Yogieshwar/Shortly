let btn = document.querySelector(".submit-btn")
btn.addEventListener("click",short);


   

async function short() {
    let longUrl = document.querySelector(".longurl").value;

    // Check if the input field is empty
    if (!longUrl) {
        console.log("Please enter a URL to shorten.");
        return;
    }

    try {
        // Make a POST request to TinyURL API
        let response = await fetch(`https://api.tinyurl.com/create`, {
            method: "POST",
            headers: {
                "Authorization": "Bearer eia7whqCmnch9mjeG6KWzQMNg8dGSlSEWqPHH5U14oyrNXbl9UZDuSETjtTA", // Replace with your TinyURL API key
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                url: longUrl, // The URL you want to shorten
                domain: "tiny.one", // Optional: You can also use custom domains if available
            }),
        });

        if (response.ok) {
            let data = await response.json();
            let shortUrl = data.data.tiny_url; // Extract shortened URL from the response
            document.querySelector(".shorturl").value = shortUrl; // Display it on the page
          
            console.log("Shortened URL:", shortUrl);
            
            
        } else {
            console.error("Error:", response.statusText);
        }
    } catch (error) {
        console.error("Fetch error:", error);
    }
}
let shortUrl=document.querySelector(".shorturl")
let cpybtn=document.querySelector(".copy")
cpybtn.onclick=()=>{
    shortUrl.select();
    window.navigator.clipboard.writeText(shortUrl.value)

}




