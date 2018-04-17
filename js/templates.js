const registerSuccess = function () {
    return `<div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Well done!</h4>
                <p>You have been successfully registered!</p>
                <hr>
                <p class="mb-0">You can <a href="sign-in.php">login</a> now.</p>
            </div>`;
};

const alertV1 = function (message, type) {
    $(".alert").remove();
    return `<div class="alert alert-${type}" role="alert">
                <span>${message}</span>
            </div>`;
};

const alertV2 = function (message, type) {
    $(".alert").remove();
    return `<div class="alert alert-${type}" role="alert">
              <h4 class="alert-heading">${message.title}</h4>
              <p>${message.body}</p>
              <hr>
              <p class="mb-0">${message.footer}</p>
            </div>`;
};
