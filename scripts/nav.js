$(document).ready(() => {
    //Render components
    navBarComponent();
});

const navBarComponent = () => {
    const navHtml = `
    <div class="min-header-bar">
        <div class="wrap">
            <div class="title">
                <span>CODER POLY BLOG</span>
            </div>
            <div class="information">
                <span>MAIL: nhatsdevil@gmail.com</span>
                <div class="group">
                    <span class="link">VIE</span>
                </div>
                <div class="group">
                    <span class="link">ENG</span>
                </div>
            </div>
        </div>
    </div>
    <nav>
        <div class="wrap">
            <div class="container">
            <a href="/"><img src="/assets/images/logo.png"/></a>
            <ul>
                <li class="${location.pathname == "/" ? "active" : ""}""><a href="/">Trang Chủ</a></li>
                <li class="${location.pathname == "/tho.html" ? "active" : ""}"">
                    <a href="/tho.html">Bài Thơ</a>
                    <div class="sub-menu">
                        <div class="wrap">
                            <div class="grid">
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">Bài Thơ</span>
                                    </div>
                                </div>
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">Công Nghệ</span>
                                    </div>
                                </div>
                                <div class="grid-item grid-item-4">
                                    <div class="sub-menu-item">
                                        <div class="banner">

                                        </div>
                                        <span class="title">Sự Kiện</span>
                                    </div>
                                </div>
                            </div>  
                        </div>
                    </div>
                </li>
                <li class="${location.pathname == "/PhuongTrinh.html" ? "active" : ""}""><a href="/PhuongTrinh.html">Phương Trình</a></li>
                <li class="${location.pathname == "/gallery.html" ? "active" : ""}""><a href="/gallery.html">Gallery</a></li>
                <li class="${location.pathname == "/product.html" ? "active" : ""}""><a href="/product.html">Sản Phẩm</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Giới Thiệu</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Liên Hệ</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Góp Ý</a></li>
                <li class="${location.pathname == "#" ? "active" : ""}""><a href="#">Hỏi Đáp</a></li>
            </ul>
        </div>
        </div>
    </nav>
    `

    $("body").prepend(navHtml);
}