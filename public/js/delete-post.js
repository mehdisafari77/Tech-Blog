  const deleteClickHandler = async function() {
    const response = await fetch(`/api/post/${postId}`, {
      method: 'DELETE',
      body: JSON.stringify({
        post_id: id
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard/');
    } else {
      alert(response.statusText);
    }
  
    document.location.replace('/dashboard');
  };

  document
  .querySelector('#delete-btn')
  .addEventListener('click', deleteClickHandler);