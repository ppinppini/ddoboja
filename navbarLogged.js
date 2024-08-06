// 내비게이션 바 및 모달을 생성하는 함수
export function createNavbar() {
    const navbarHTML = `
        <nav class="navbar">
            <div class="navbar-logo">
                <a href="/" class="logo-link">
                    <img src="images/logo.png" alt="logo" />
                </a>
            </div>
            <ul class="nav-items">
                <li class="nav-item"><a href="./history.html">공공 추모</a></li>
                <li class="nav-item"><a href="./products.html">추모공간</a></li>
                <li class="nav-item"><a href="#" id="openModalBtn">추모공간 생성</a></li>
            </ul>
            <div class="navbar-actions">
                <a href="mypage.html" class="btn">마이페이지</a>
                <div class="notification-icon" onclick="toggleNotifications()">
                    <img src="images/alram.png" alt="Notification Icon" width="24" height="24" />
                    <div class="notification-popup" id="notificationPopup">
                        <ul id="notificationList"></ul>
                    </div>
                </div>
            </div>
        </nav>

        <!-- 모달 -->
        <div id="myModal" class="modal">
            <div class="modal-content">
                <span class="close">&times;</span>
                <form id="myForm">
                    <h1>추모공간 생성</h1>
                    <h3>추모 대상의 기본적인 정보를 입력해주세요</h3>
                    <div class="profile-section">
                        <div class="profile-picture">
                            <h2>메인 프로필</h2>
                            <img id="profileImage" src="https://static.vecteezy.com/system/resources/previews/002/318/271/non_2x/user-profile-icon-free-vector.jpg" alt="profile_pic">
                            <input type="file" id="file-upload" style="display: none" accept="image/*">
                            <label for="file-upload" class="select-button">선택</label>
                        </div>
                        <div class="basic-info">
                            <h2>기본 정보</h2>
                            <div class="info-item">
                                <label for="name">이름</label>
                                <input type="text" id="name" name="name" placeholder="실명을 입력해 주세요" class="input-box">
                            </div>
                            <div class="info-item">
                                <label for="birth">생년월일</label>
                                <input type="text" id="birth" name="birth" placeholder="생년월일을 입력해 주세요" class="input-box">
                            </div>
                            <div class="info-item">
                                <label for="deadDate">기일</label>
                                <input type="text" id="deadDate" name="deadDate" placeholder="기일을 입력해 주세요" class="input-box">
                            </div>
                            <div class="info-item">
                                <label for="comment">소개글</label>
                                <textarea id="comment" name="comment" placeholder="추모 공간에 오실 분들을 위해 추모 대상에 대한 소개글을 적어주세요" class="input-box textarea"></textarea>
                            </div>
                        </div>
                    </div>
                    <button type="submit" id="createButton" class="create-button">생성</button>
                </form>
            </div>
        </div>
    `;

    document.querySelector("#navbar").innerHTML = navbarHTML;

    const style = document.createElement("style");
    style.textContent = `
.navbar {
            height: 10vh;
            background: #2c2c2c;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 0 20px;
            position: relative;
        }

        .navbar-logo {
            margin-right: auto;
        }

        .navbar-logo img {
            width: 200px; 
        }

        .nav-items {
            display: flex;
            list-style: none;
            text-align: center;
            width: 70vw;
            justify-content: flex-end;
            margin-right: 2rem;
        }

        .nav-item {
            display: flex;
            align-items: center;
            height: 10vh;
        }

        .nav-item a {
            text-decoration: none;
            color: white;
            font-size: 1.1rem;
            margin-right: 2rem;
            padding: 6px 16px;
            border-radius: 5px;
        }

        .nav-item a:hover {
            background: gray;
        }

        .navbar-actions {
            display: flex;
            align-items: center;
            gap: 20px;
        }


.btn {
    background: #2c2c2c;
    color: white;
    border: none;
    padding: 8px 16px;
    font-size: 1rem;
    border-radius: 5px;
    text-decoration: none;
    transition: background 0.3s ease;
}

.btn:hover {
    background: white;
    color: #2c2c2c;
}

.notification-icon {
    position: relative;
    cursor: pointer;
}

.notification-popup {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background: white;
    color: black;
    padding: 10px;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    width: 250px;
    z-index: 1000;
}

.notification-popup.show {
    display: block;
}

.notification-popup ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

.notification-popup li {
    padding: 5px 0;
}

/* 모달 스타일 */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-image: url('images/modal.jpg'); /* 배경 이미지 설정 */
    background-size: cover; /* 배경 이미지 크기 조절 */
    background-position: center; /* 배경 이미지 중앙 정렬 */
    padding-top: 60px;
}

.modal-content {
    background-color: #2c2c2c;
    color: white;
    margin: 5% auto;
    padding: 40px;
    border: none;
    width: 1000px;
    borderline:none;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.2);
    position: relative;
}
/* 추모공간 정보 입력 텍스트 스타일 */
.modal-content h3 {
    font-weight: 300; /* 얇게 설정 (300은 일반적으로 얇은 두께로 간주됨) */
    font-size: 0.9rem; /* 글자 크기를 작게 설정 */
    margin-bottom: 10px; /* 아래쪽 여백 조정 */
}
/* 제목 스타일: 메인 프로필 */
.modal-content h2 {
    font-size: 1.4rem; /* 메인 프로필 제목 글자 크기 줄이기 */
    margin: 0; /* 여백 제거 */
}

/* 제목 스타일: 기본 정보 */
.modal-content h4 {
    font-size: 1.2rem; /* 기본 정보 제목 글자 크기 줄이기 */
    margin: 0; /* 여백 제거 */
}


.close {
    color: #aaa;
    float: right;
    font-size: 28px;
    font-weight: bold;
    cursor: pointer;
}

.close:hover,
.close:focus {
    color: black;
    text-decoration: none;
}

/* 프로필 섹션 스타일 */
.profile-section {
    display: flex;
    gap: 20px;
    align-items: flex-start;
}

.profile-picture {
    flex: 1;
    text-align: center;
}

.profile-picture h2 {
    margin-bottom: 10px;
    font-size: 1.5rem;
    color: white;
}

.profile-picture img {
    width: 150px;
    height: 150px;
    border-radius: 50%;
}

.select-button {
    background-color: #d5d5d5;
    border: none;
    width: 150px; /* 버튼 크기 줄이기 */
    padding: 8px;
    color: #000000;
    cursor: pointer;
    margin-top: 10px;
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.select-button:hover {
    background-color: #c5c5c5;
}

.basic-info {
    flex: 2;
}

.info-item {
    margin-bottom: 15px;
}

.info-item label {
    display: block;
    margin-bottom: 5px;
    font-size: 14px;
}

.input-box {
    width: 100%;
    padding: 10px;
    border: 1px solid #444444;
    background-color: #d5d5d5;
    color: #697077;
}

.textarea {
    height: 100px;
    resize: none;
}

/* 생성 버튼 스타일 */
.create-button {
    display: block;
    width: 80px; /* 버튼 크기 줄이기 */
    padding: 8px;
    background-color: #d9d9d9;
    border: none;
    color: #000000;
    font-size: 14px;
    cursor: pointer;
    margin-top: 20px;
    margin-left: auto; /* 버튼을 오른쪽으로 이동 */
    margin-right: 0; /* 오른쪽 끝에 위치 */
}
    `;
    let id = document.querySelector("#name").value;
    let birth = document.querySelector("#birth").value;
    let deadDate = document.querySelector("#deadDate").value;
    let comment = document.querySelector("#comment").value;
    document.head.appendChild(style);

    document.querySelector("#openModalBtn").addEventListener("click", openModal);
    document.querySelector(".close").addEventListener("click", closeModal);
    window.addEventListener("click", outsideClick);

    document.querySelector(".createbutton").addEventListener("click", function () {
        console.log(id,birth,deadDate,comment);
    });

    // 파일 업로드 이벤트 핸들러 추가
    document.querySelector("#file-upload").addEventListener("change", function (event) {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                document.querySelector("#profileImage").src = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    });
}

// 알림 토글 함수
function toggleNotifications() {
    const popup = document.querySelector("#notificationPopup");
    popup.style.display = popup.style.display === "block" ? "none" : "block";
}

window.toggleNotifications = toggleNotifications;

// 알림 추가 함수
export function addNotification(message) {
    const notificationList = document.querySelector("#notificationList");
    const li = document.createElement("li");
    li.textContent = message;
    notificationList.appendChild(li);
}

// 모달 열기 함수
function openModal() {
    document.querySelector("#myModal").style.display = "block";
}

// 모달 닫기 함수
function closeModal() {
    document.querySelector("#myModal").style.display = "none";
}

// 모달 외부 클릭 시 닫기 함수
function outsideClick(event) {
    if (event.target === document.querySelector("#myModal")) {
        closeModal();
    }
}

// 폼 제출 이벤트 핸들러 추가
document.addEventListener("DOMContentLoaded", () => {
    document.querySelector("#myForm").addEventListener("submit", function (e) {
        e.preventDefault(); // 기본 폼 제출 방지

        const formData = new FormData(this);

        // 데이터를 서버로 전송
        /*fetch('http://localhost:8080/forum', {
            method: 'POST',
            body: formData
        })
        .then(response => response.json())
        .then(data => {
            console.log('성공:', data);
            closeModal(); // 폼 제출 후 모달 닫기
*/
        // // 서버에서 받은 데이터를 사용하여 HTML 생성
        // const newContent = document.createElement("div");
        // newContent.innerHTML = `
                
        //         <span>${data.birth}</span>~<span>${data.deadDate}</span>
        //         <div>${data.comment}</div>
        //     `;
        // document.querySelector("#resultContainer").appendChild(newContent);
    });
});
