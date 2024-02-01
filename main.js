document.querySelector("#btn-find").addEventListener("click", function () {
    const postId = document.querySelector("#input-id").value
    if (isNaN(postId) || parseInt(postId) < 1 || parseInt(postId) > 100 || postId === '') {
        alert("The id must be a value between 1 and 100")
    }
    else {
        getPost(postId)
            .then(post => {
                console.log("data retrieved successfully:", post);
                getComments(postId)
                    .then(comments => {
                        console.log("data retrieved successfully:", comments);
                        document.querySelector("#result").innerHTML = `
                        <h3 style='color:blue'>Post:</h3>
                        <pre>
                            ${JSON.stringify(post, null, 2)}
                        </pre>
                        <h3 style='color:green'>Comments:</h3>
                        <pre>
                            ${JSON.stringify(comments, null, 2)}
                        </pre>
                        
                        `
                    })
                    .catch(error => {
                        console.error("Error getting data", error);
                    });
            })
            .catch(error => {
                console.error("Error getting data", error);
            });
    }

})



function getPost(id) {
    return new Promise((resolve, reject) => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`An error occurred. Code: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}

function getComments(postId) {
    return new Promise((resolve, reject) => {
        const url = `https://jsonplaceholder.typicode.com/comments?postId=${postId}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`An error occurred. Code: ${response.status}`)
                }
                return response.json();
            })
            .then(data => {
                resolve(data);
            })
            .catch(error => {
                reject(error);
            });
    });
}