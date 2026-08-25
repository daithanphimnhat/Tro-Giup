// Danh sách các trang web liên kết. 
// Bạn chỉ cần chỉnh sửa, thêm hoặc xóa bớt trang ở mảng này mà KHÔNG cần đụng vào file index.html.

const quickLinks = [
    { title: "javtrailers", url: "https://javtrailers.com/" },
    { title: "Javhd.today", url: "https://javhd.today/" },
    { title: "Xchina", url: "https://en.xchina.co/" },
    { title: "Pornhub", url: "https://www.pornhub.com/" },
    { title: "xhamster", url: "https://www.google.com/search?q=xhamter&safe=off&pws=0" },
    { title: "MissAV", url: "https://www.google.com/search?q=missav&safe=off&pws=0&filter=0" }

];

// Tự động tạo các nút bấm giao diện khi trang web tải xong
document.addEventListener("DOMContentLoaded", function() {
    const container = document.getElementById("quick-links-container");
    if (!container) return;

    quickLinks.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.title;
        a.target = "_blank"; // Mở trang web ở tab mới
        a.className = "quick-link-btn";
        container.appendChild(a);
    });
});
