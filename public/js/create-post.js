const newFormHandler = async function(event) {
    event.preventDefault();
  
    const post_title = document.querySelector('input[name="post-title"]').value;
    const post_body = document.querySelector('textarea[name="post-body"]').value;
  
    await fetch(`/api/post`, {
      method: "POST",
      body: JSON.stringify({
        post_title,
        post_body
      }),
      headers: {
        "Content-Type": "application/json"
      }
    });
  
    document.location.replace("/dashboard");
  };
  
  document
    .querySelector("#new-post-form")
    .addEventListener("submit", newFormHandler);
  