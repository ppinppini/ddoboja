export function createFooter() {
    const footerHTML = `
        <footer class="footer">
            <div class="footer-left">
                <img src="images/logo.png" alt="logo" class="footer-logo" />
                <p>Blue Whale@gmail.com</p>
            </div>
            <div class="footer-right">
                <a href="/terms">이용약관</a>
                <a href="/privacy">개인정보처리방침</a>
                <a href="/service">서비스 소개</a>
            </div>
        </footer>
    `;

    let footerContainer = document.getElementById('footer');
    if (!footerContainer) {
        footerContainer = document.createElement('div');
        footerContainer.id = 'footer';
        document.body.appendChild(footerContainer);
    }

    footerContainer.innerHTML = footerHTML;

    const style = document.createElement('style');
    style.textContent = `
        body {
            display: flex;
            flex-direction: column;
            min-height: 100vh; /* Ensure body takes at least full viewport height */
            margin: 0;
            font-family: Arial, sans-serif;
            positon:relative;
        }

        .footer {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #2c2c2c;
            padding: 10px 20px; /* Reduced padding to decrease height */
            color: #ffffff;
            font-family: Arial, sans-serif;
            position: sticky;
            bottom:0;
            width: 100%;
            box-sizing: border-box; /* Ensure padding is included in the total width */
            margin-top: auto; /* Push footer to the bottom */
        }

        .footer-left {
            display: flex;
            flex-direction: column;
        }

        .footer-logo {
            width: 80px; /* Adjust logo size to match reduced height */
            margin-bottom: 5px; /* Adjust spacing if necessary */
        }

        .footer-right {
            display: flex;
            gap: 15px; /* Reduced gap for better alignment */
        }

        .footer-right a {
            color: #ffffff;
            text-decoration: none;
            margin-left: 15px; /* Reduced margin for better alignment */
        }

        .footer-right a:hover {
            text-decoration: underline;
        }
    `;
    document.head.appendChild(style);
}
