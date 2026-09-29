function greet(){
    alert("welcome to my website");
    document.getElementById("demo").innerHTML="2026";
}
window.onload = greet;
function stockAvailability(){
    const statusText = document.getElementById("chair_status");
    statusText.innerText = "not Available";
}
function Availability(){
    const statusText = document.getElementById("table_status");
    statusText.innerText = "Not available";
}function sendmessage(){
      const inputfield = document.getElementById("userinput");
        const chatbox = document.getElementById("chatbox");
       const userText = inputfield.value.trim();
    if (userText === "") return;
        chatbox.innerHTML += `<p><strong>User:</strong> ${userText}</p>`;
       const botResponse = "You said " + userText;
    chatbox.innerHTML += `<p><strong>Chatbot:</strong> ${botResponse}</p>`;
    inputfield.value = "";
      chatbox.scrollTop = chatbox.scrollHeight;

}