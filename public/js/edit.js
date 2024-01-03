const newFormHandler = async (event) => {
    event.preventDefault();
  
    const id = event.target.getAttribute('data-id');
    const name = document.querySelector('#project-name').value.trim();
    const description = document.querySelector('#project-desc').value.trim();
  
    if (name && description && id) {
      const response = await fetch(`/api/projects/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ name, description }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      const result = await response.json()
      console.log(result)

      if (response.ok) {
        document.location.reload();
      } else {
        alert('Failed to update post');
      }
    }
  };
  
  document
    .querySelector('.edit-project-form')
    .addEventListener('submit', delButtonHandler);
  