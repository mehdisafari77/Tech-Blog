const commentFormHandler = async function(event) {
    event.preventDefault();
  
    const postId = document.querySelector('input[name="post-id"]').value;
    const comment_text = document.querySelector('textarea[name="comment-body"]').value;
  
    if (comment_text) {
      await fetch('/api/comment', {
        method: 'POST',
        body: JSON.stringify({
          postId,
          comment_text
        }),
        headers: {
          'Content-Type': 'application/json'
        }
      });
  
      if (response.ok) {
        document.location.reload();
      } else {
        alert(response.statusText);
      }
    }
  };
  
  document
    .querySelector('#new-comment-form')
    .addEventListener('submit', commentFormHandler);
  