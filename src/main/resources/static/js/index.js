window.onload = async () => {
  const email = sessionStorage.getItem("email");
  if (email) {
    document.getElementById("loginSpan").innerHTML =
      email + `<button id = "logout">logout</button>`;
  }
//  axios.defaults.withCredentials = true;
  console.log(axios);
  let productList = await fetch("getAllProducts", {
    method: "GET",
  }); // 서버에서 가져온 내용
  // XMLHttpRequest (XHR)
  // await : 데이터 올 때까지 기다릴게 (async 내부에서만 쓸 수 있는 키워드)
  productList = await productList.json(); // 배열로
  let productListDiv = ``;
  productList.forEach((item) => {
    productListDiv += `<div class="card m-3" style="width: 10rem;">
                      <img src="img/${item.pimg}" class="card-img-top" alt="...">
                      <div class="card-body">
                        <b class="card-title">${item.prodname}</b>
                        <p class="card-text text-danger">${item.price}</p>
                        <a href="#" class="btn btn-outline-info" id = "addCart">장바구니 담기</a>
                      </div>
                    </div>`;
  });
  document.getElementById("productListDiv").innerHTML = productListDiv;
};

document.getElementById("signupBtn").addEventListener("click", async () => {
  const nickname = document.getElementById("nickname").value;
  const email = document.getElementById("email").value;
  const pwd = document.getElementById("pwd").value;
  const data = { nickname, email, pwd };
  let response = await fetch("insertMember", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  response = await response.json();
  console.log(response);
  if (response.msg === "ok") {
    console.log("ok");
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("signupModal")
    );
    modal.hide();
    document.getElementById("signupLi").remove();
  } else {
    alert(response.msg);
  }
});
// 로그인
document.getElementById("loginBtn").addEventListener("click", async () => {
  const email = document.getElementById("loginEmail").value;
  const pwd = document.getElementById("loginPwd").value;
  const data = { email, pwd };
  let response = await axios.post("login", data);
  console.log(response);
  alert(response.data.msg);
  if (response.data.msg === "ok") {
    const modal = bootstrap.Modal.getInstance(
      document.getElementById("loginModal")
    );
    modal.hide();
    document.getElementById("loginSpan").innerHTML =
      email + `<button id = "logout">logout</button>`;
    window.sessionStorage.setItem("email", email);
  }
});

// 장바구니
document.getElementById("productListDiv").addEventListener("click", (event) => {
  if (event.target.id == "addCart") {
    axios.post("addCart");
  }
});

document.getElementById("loginSpan").addEventListener("click", (event) => {
  if (event.target.id == "logout") {
    sessionStorage.removeItem("email");
    window.location.reload();
  }
});
