fetch("/api/search", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: "glsl function for linearly interpolation",
}).then((response) => console.log(response));
